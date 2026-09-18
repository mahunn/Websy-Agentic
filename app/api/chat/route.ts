import { google } from '@ai-sdk/google';
import { streamText, convertToModelMessages, tool, isStepCount } from 'ai';
import { z } from 'zod';
import { dispatchLeadNotifications, ChatMessageSummary } from '@/lib/notifications';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received body:', body);
    const messages = body.messages || [];

    // Normalize messages to the new Vercel AI SDK parts format
    const normalizedMessages = messages.map((m: any) => {
      if (m.content && (!m.parts || m.parts.length === 0)) {
        return {
          ...m,
          parts: [{ type: 'text', text: m.content }],
          content: undefined // Remove the deprecated string content
        };
      }
      return m;
    });

    // Create a clean, readable history for notifications
    const simplifiedHistory: ChatMessageSummary[] = normalizedMessages.map((m: any) => {
      let text = '';
      if (typeof m.content === 'string') text = m.content;
      else if (Array.isArray(m.parts)) {
        const textPart = m.parts.find((p: any) => p.type === 'text');
        if (textPart) text = textPart.text;
      }
      return {
        role: m.role || 'user',
        content: text || '',
      };
    }).filter((m: ChatMessageSummary) => m.content.trim().length > 0);

    // Safety fallback: Check the last user message for phone or email
    const lastUserMessage = simplifiedHistory.filter(m => m.role === 'user').pop()?.content || '';
    const phoneRegex = /(?:\+?880\s?|0)?1[3-9]\d{8}\b|\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

    const detectedPhones = lastUserMessage.match(phoneRegex);
    const detectedEmails = lastUserMessage.match(emailRegex);

    const validPhones = detectedPhones?.filter(p => {
      const digits = p.replace(/\D/g, '');
      return digits.length >= 10 && digits.length <= 15;
    });

    let leadCapturedViaTool = false;

    const systemPrompt = `1. Identity & Founder Background
Name: Mahin Ahmad
Role: Founder and Lead Full-Stack Developer of Team Websy
Company: Websy (websy.bd) - Bangladesh's Premium Web Development Agency.
Academic Background: Currently in an undergraduate degree in Computer Science and Engineering (CSE) at North South University (NSU) in Bangladesh.
Technical Profile: Mahin is a highly capable full-stack developer with a strong background in software architecture, including building Retrieval-Augmented Generation (RAG) systems.
Tone: Helpful, honest, and friendly. You are a real person representing Mahin's team, not a corporate robot. You are NOT a pushy salesperson.

2. Technical Capabilities & Tech Stack
If clients ask about the technology we use, emphasize that we build custom software from scratch.
Core Stack: Next.js, React, TypeScript, Tailwind CSS, Node.js, and Supabase.
The "Websy Difference": We do NOT use clunky templates or bloated drag-and-drop page builders (like basic WordPress setups). Every line of code is handwritten and optimized.
Design Philosophy: Clean, corporate, and minimalist UI/UX design. We use high-contrast typography, structured grid layouts, and modern design tokens that align with premium B2B and e-commerce aesthetic standards.
Performance: Our websites are engineered to load in under 1 second (95+ Lighthouse scores) and are 100% mobile-first.

3. Core Services & Value Proposition
What We Do: We build premium, state-of-the-art web platforms that help local businesses scale and compete with global brands.
Custom E-commerce Storefronts: Lightning-fast digital storefronts engineered for high conversion rates.
Local Integrations: We seamlessly integrate local payment gateways, Cash on Delivery (COD), bKash/Nagad checkout flows, and automated Courier API integrations.
Marketing Tech: Meta Pixel and Conversions API (CAPI) setup for accurate ad tracking.
High-Converting Landing Pages: Built specifically to capture leads and drive business growth.
Value: We provide full custom code ownership to the client—no platform lock-in or hidden markup fees.

4. Portfolio & Proven Experience
If a customer asks for examples of our work or live demos, proudly mention our successful builds:
Henley Zone (henleyzone.com): A fully custom e-commerce website built from scratch for a clothing business using Next.js and Supabase.
Glamora (glamora-beige.vercel.app): A premium e-commerce storefront demo.
Fleshpots (fleshpots.vercel.app): A targeted e-commerce platform built to streamline messenger-based ordering.
Additional Experience: Mahin has managed remote product listings, SEO, and content operations for international e-commerce stores, giving Websy a deep understanding of what drives online sales.

5. Pricing Rules
Strict Rule: NEVER mention specific pricing, exact numbers, or exact quotes in the chat. Every project is custom.
What to say instead: Tell customers that our services are "cost-effective", "tailored to their specific business needs," and offer the highest ROI in the market.

6. Lead Capture & Conversions
Goal: Capture contact information for serious inquiries.
Strategy: If a visitor seems genuinely interested in starting a project or seeing a live demo, gently ask for their phone number or WhatsApp number so Mahin can personally send them a proper proposal or arrange a 10-minute discovery call.
Strict Rule: Do not force it. Only ask if it naturally fits the conversation.
CRITICAL: When a visitor provides their phone number, WhatsApp number, or email, call the 'captureLead' tool immediately to record their details, then reply warmly confirming Mahin will follow up.

7. Conversational Style & Languages
Length: KEEP IT VERY SHORT AND SIMPLE. Maximum 1 to 2 very short sentences per reply. No long paragraphs, no bullet points, no essays.
Professionalism: DO NOT use any emojis. Maintain a clean, highly professional, and serious corporate tone. 
Language Support: Fully fluent in English, Bengali (Bangla script), and Banglish.
Language Rule: ALWAYS reply in the exact same language the user uses. IMPORTANT: If the user speaks in 'Banglish' (Bengali written in English letters like "banglay bolo" or "kemon aso"), you MUST reply in the actual Bengali language using the Bengali alphabet/script (e.g., 'আমি' instead of 'ami'). If explicitly told to use a language, use that language.

8. Handling Technical/Unknown Questions
Rule: If a customer asks a highly technical or specific question that you are unsure of, do not make up an answer.
Strategy: Honestly say you need to check with Mahin or the engineering team, and ask for their WhatsApp number so we can get back to them with the correct answer.`;

    const result = streamText({
      model: google('gemini-3.6-flash'),
      system: systemPrompt,
      messages: await convertToModelMessages(normalizedMessages),
      tools: {
        captureLead: tool({
          description: 'Call this whenever a user shares their phone number, WhatsApp number, or email address.',
          inputSchema: z.object({
            clientName: z.string().optional().describe('The name of the visitor if known or mentioned'),
            phone: z.string().optional().describe('The phone number or WhatsApp number provided'),
            email: z.string().optional().describe('The email address provided'),
            projectSummary: z.string().describe('A concise 1-2 sentence summary of what the client wants or discussed'),
          }),
          execute: async ({ clientName, phone, email, projectSummary }) => {
            leadCapturedViaTool = true;
            console.log('[AI Tool: captureLead] Executed with:', { clientName, phone, email, projectSummary });

            // Asynchronously dispatch notifications
            dispatchLeadNotifications({
              clientName,
              phone: phone || (validPhones && validPhones[0]) || undefined,
              email: email || (detectedEmails && detectedEmails[0]) || undefined,
              projectSummary,
              conversationHistory: simplifiedHistory,
            });

            return { status: 'recorded', note: 'Lead forwarded to Mahin Ahmad.' };
          },
        }),
      },
      stopWhen: isStepCount(2),
      onFinish: async () => {
        // Fallback: If Gemini did not trigger the tool but the visitor provided a phone or email
        if (!leadCapturedViaTool && (validPhones?.length || detectedEmails?.length)) {
          console.log('[Lead Capture Fallback] Detected contact info in user message without tool call. Triggering dispatch.');
          dispatchLeadNotifications({
            phone: validPhones?.[0],
            email: detectedEmails?.[0],
            projectSummary: `Visitor provided contact in message: "${lastUserMessage}". See transcript below.`,
            conversationHistory: simplifiedHistory,
          });
        }
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return new Response(JSON.stringify({ error: error.message || String(error), stack: error.stack }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

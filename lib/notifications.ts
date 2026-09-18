import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

export interface ChatMessageSummary {
  role: string;
  content: string;
}

export interface LeadData {
  clientName?: string;
  phone?: string;
  email?: string;
  projectSummary?: string;
  conversationHistory?: ChatMessageSummary[];
  timestamp?: string;
}

/**
 * Normalizes phone numbers to standard WhatsApp format (e.g. 8801XXXXXXXXX)
 */
export function formatWhatsAppUrl(rawPhone?: string, clientName?: string): string | null {
  if (!rawPhone) return null;
  
  // Remove non-numeric characters except leading plus
  let cleaned = rawPhone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  }

  // Handle local BD numbers like 017XXXXXXXX -> 88017XXXXXXXX
  if (cleaned.startsWith('01') && cleaned.length === 11) {
    cleaned = `88${cleaned}`;
  }

  if (cleaned.length < 9) return null;

  const nameGreeting = clientName ? `Hi ${clientName}, ` : 'Hi, ';
  const message = `${nameGreeting}Mahin from Websy here regarding your website project inquiry!`;

  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Sends a push notification to Telegram using the official Bot API
 */
export async function sendTelegramNotification(lead: LeadData): Promise<{ success: boolean; message?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.log('[Telegram Notification] Skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured in .env.local');
    return { success: false, message: 'Telegram credentials missing' };
  }

  const name = lead.clientName || 'Prospective Client';
  const phone = lead.phone || 'Not provided';
  const email = lead.email || 'Not provided';
  const summary = lead.projectSummary || 'Inquired about Websy web development services.';
  const waUrl = formatWhatsAppUrl(lead.phone, lead.clientName);

  // Format last 4 messages for quick context
  let contextText = '';
  if (lead.conversationHistory && lead.conversationHistory.length > 0) {
    const recent = lead.conversationHistory.slice(-4);
    contextText = recent
      .map(m => `<b>${m.role === 'user' ? 'Client' : 'AI'}:</b> ${escapeHtml(m.content.trim())}`)
      .join('\n');
  }

  const htmlMessage = [
    `🔥 <b>NEW CLIENT LEAD FROM WEBSY AI CHAT</b>`,
    ``,
    `👤 <b>Name:</b> ${escapeHtml(name)}`,
    `📱 <b>Phone:</b> ${escapeHtml(phone)}`,
    `✉️ <b>Email:</b> ${escapeHtml(email)}`,
    ``,
    `📋 <b>Project Need:</b>`,
    `${escapeHtml(summary)}`,
    contextText ? `\n💬 <b>Recent Context:</b>\n${contextText}` : '',
    ``,
    waUrl ? `👉 <a href="${waUrl}"><b>CLICK HERE TO CHAT ON WHATSAPP</b></a>` : '<i>(No phone number provided for WhatsApp link)</i>',
    `⏰ <i>${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} BST</i>`
  ].filter(Boolean).join('\n');

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: false,
      }),
    });

    const data = await response.json();
    if (!data.ok) {
      console.error('[Telegram Notification] Error from Telegram API:', data);
      return { success: false, message: data.description };
    }

    console.log('[Telegram Notification] Successfully delivered to Telegram!');
    return { success: true };
  } catch (err: any) {
    console.error('[Telegram Notification] Failed to send:', err);
    return { success: false, message: err.message };
  }
}

/**
 * Sends a structured email alert with complete conversation history via Resend
 */
export async function sendEmailNotification(lead: LeadData): Promise<{ success: boolean; message?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || 'info@websy.bd';

  if (!apiKey) {
    console.log('[Email Notification] Skipped: RESEND_API_KEY not configured in .env.local');
    return { success: false, message: 'Resend API key missing' };
  }

  const name = lead.clientName || 'Prospective Client';
  const phone = lead.phone || 'Not provided';
  const email = lead.email || 'Not provided';
  const summary = lead.projectSummary || 'No specific project summary';
  const waUrl = formatWhatsAppUrl(lead.phone, lead.clientName);

  const resend = new Resend(apiKey);

  const transcriptHtml = lead.conversationHistory && lead.conversationHistory.length > 0
    ? lead.conversationHistory.map(m => `
        <div style="margin-bottom: 12px; padding: 10px 14px; border-radius: 8px; background-color: ${m.role === 'user' ? '#f0fdf4' : '#f8fafc'}; border-left: 3px solid ${m.role === 'user' ? '#16a34a' : '#0284c7'};">
          <strong style="display: block; font-size: 11px; text-transform: uppercase; color: #64748b; margin-bottom: 4px;">${m.role === 'user' ? 'Client' : 'Mahin AI'}:</strong>
          <span style="font-size: 14px; color: #1e293b; line-height: 1.5;">${escapeHtml(m.content)}</span>
        </div>
      `).join('')
    : '<p style="color: #94a3b8; font-style: italic;">No conversation transcript available.</p>';

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Lead Captured</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f1f5f9; padding: 24px; margin: 0;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background-color: #111111; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-weight: 700;">🚀 New Lead Captured via AI Chat</h1>
          <p style="color: #94a3b8; font-size: 12px; margin: 6px 0 0 0;">Websy Studio Website Lead Pipeline</p>
        </div>

        <!-- Lead Details Card -->
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px; font-weight: 600;">Client Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: bold;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Phone / WA:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><strong>${escapeHtml(phone)}</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;"><a href="mailto:${encodeURIComponent(email)}" style="color: #dc2626;">${escapeHtml(email)}</a></td>
            </tr>
          </table>

          ${waUrl ? `
            <div style="text-align: center; margin: 20px 0;">
              <a href="${waUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: bold; font-size: 14px; padding: 12px 24px; border-radius: 9999px; box-shadow: 0 2px 6px rgba(37, 211, 102, 0.3);">
                💬 Open Client on WhatsApp
              </a>
            </div>
          ` : ''}

          <!-- Project Summary -->
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
            <h3 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #475569; letter-spacing: 0.5px;">Project Requirement Summary</h3>
            <p style="margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6;">${escapeHtml(summary)}</p>
          </div>

          <!-- Transcript Section -->
          <h3 style="margin: 24px 0 12px 0; font-size: 14px; text-transform: uppercase; color: #334155; border-bottom: 2px solid #f1f5f9; padding-bottom: 6px;">Conversation Transcript</h3>
          <div style="max-height: 380px; overflow-y: auto; padding: 4px;">
            ${transcriptHtml}
          </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; color: #94a3b8; font-size: 11px;">
          Received on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })} (Bangladesh Standard Time)
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const { error } = await resend.emails.send({
      from: 'Websy AI <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `🚨 New Lead: ${name} (${phone !== 'Not provided' ? phone : email})`,
      html: htmlBody,
    });

    if (error) {
      console.error('[Email Notification] Resend error:', error);
      return { success: false, message: error.message };
    }

    console.log(`[Email Notification] Lead notification email delivered to ${recipientEmail}`);
    return { success: true };
  } catch (err: any) {
    console.error('[Email Notification] Failed to send:', err);
    return { success: false, message: err.message };
  }
}

/**
 * Saves lead and full chat history into Supabase database
 */
export async function saveLeadToSupabase(lead: LeadData): Promise<{ success: boolean; message?: string }> {
  let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !supabaseKey) {
    console.log('[Supabase Backup] Skipped: NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not configured in .env.local');
    return { success: false, message: 'Supabase credentials missing' };
  }

  // Clean URL if copied directly from Data API overview (removes /rest/v1/ if present)
  supabaseUrl = supabaseUrl.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from('leads').insert([
      {
        name: lead.clientName || 'Website Visitor',
        phone: lead.phone || null,
        email: lead.email || null,
        summary: lead.projectSummary || null,
        chat_history: lead.conversationHistory || [],
        source: 'ai_chat',
        created_at: new Date().toISOString()
      }
    ]);

    if (error) {
      console.error('[Supabase Backup] Insert error:', error);
      return { success: false, message: error.message };
    }

    console.log('[Supabase Backup] Successfully archived lead to Supabase!');
    return { success: true };
  } catch (err: any) {
    console.error('[Supabase Backup] Failed to insert:', err);
    return { success: false, message: err.message };
  }
}

/**
 * Concurrently dispatches lead data across all notification channels (Telegram, Email, Supabase)
 * Never throws an error so visitor chat stream is never blocked.
 */
export async function dispatchLeadNotifications(lead: LeadData): Promise<void> {
  console.log('[Lead Capture Pipeline] Initiating broadcast for lead:', {
    name: lead.clientName,
    phone: lead.phone,
    email: lead.email
  });

  const results = await Promise.allSettled([
    sendTelegramNotification(lead),
    sendEmailNotification(lead),
    saveLeadToSupabase(lead)
  ]);

  results.forEach((res, index) => {
    const channel = ['Telegram', 'Email', 'Supabase'][index];
    if (res.status === 'fulfilled') {
      console.log(`[Lead Channel: ${channel}] Result:`, res.value);
    } else {
      console.error(`[Lead Channel: ${channel}] Rejected:`, res.reason);
    }
  });
}

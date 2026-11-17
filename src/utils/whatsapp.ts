import { siteConfig } from '../config/site';

export interface QuickQuoteData {
  from: string;
  to: string;
  tripType: string;
  date: string;
  returnDate?: string;
  passengers?: number | string;
  name?: string;
  phone?: string;
  notes?: string;
}

export interface PartnerFormData {
  partnerType: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email?: string;
  city?: string;
  message?: string;
}

/**
 * Builds a WhatsApp wa.me direct chat link with prefilled URL-encoded message
 */
export function buildWhatsAppLink(number: string, message: string): string {
  const sanitizedNumber = number.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${sanitizedNumber}?text=${encodedText}`;
}

/**
 * Builds a route enquiry message for popular routes
 */
export function buildRouteQuoteMessage(from: string, to: string): string {
  return `Hi, I found AP Tours & Travels online and would like a quote for ${from} to ${to} in an Innova Crysta. Please share availability and rates.`;
}

/**
 * Formats quick quote form fields into a structured WhatsApp message
 */
export function buildQuickQuoteMessage(data: QuickQuoteData): string {
  const lines: string[] = [
    'Hi AP Tours & Travels,',
    'I would like to request a quote for my upcoming trip:',
    `• From: ${data.from}`,
    `• To: ${data.to}`,
    `• Trip Type: ${data.tripType}`,
    `• Travel Date: ${data.date}`,
  ];

  if (data.returnDate && data.returnDate.trim()) {
    lines.push(`• Return Date: ${data.returnDate.trim()}`);
  }

  if (data.passengers) {
    lines.push(`• Passengers: ${data.passengers}`);
  }

  if (data.name && data.name.trim()) {
    lines.push(`• Name: ${data.name.trim()}`);
  }

  if (data.phone && data.phone.trim()) {
    lines.push(`• Phone: ${data.phone.trim()}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`• Notes: ${data.notes.trim()}`);
  }

  lines.push('', 'Please share vehicle availability and estimated fare. Thank you!');

  return lines.join('\n');
}

/**
 * Formats partner enquiry into a structured WhatsApp message
 */
export function buildPartnerMessage(data: PartnerFormData): string {
  const lines: string[] = [
    'Hi AP Tours & Travels,',
    'I would like to enquire about partnering with your service:',
    `• Partner Type: ${data.partnerType}`,
    `• Company / Organization: ${data.companyName}`,
    `• Contact Person: ${data.contactPerson}`,
    `• Phone: ${data.phone}`,
  ];

  if (data.email && data.email.trim()) {
    lines.push(`• Email: ${data.email.trim()}`);
  }

  if (data.city && data.city.trim()) {
    lines.push(`• City: ${data.city.trim()}`);
  }

  if (data.message && data.message.trim()) {
    lines.push(`• Requirements: ${data.message.trim()}`);
  }

  lines.push('', 'Looking forward to discussing potential collaboration.');

  return lines.join('\n');
}

/**
 * Builds a mailto link with pre-filled subject and body for partner inquiries
 */
export function buildPartnerMailto(data: PartnerFormData): string {
  const subject = `Partner Enquiry: ${data.companyName} (${data.partnerType})`;

  const bodyLines: string[] = [
    'Dear AP Tours & Travels Team,',
    '',
    'I am interested in exploring a business partnership with AP Tours & Travels.',
    '',
    `Partner Type: ${data.partnerType}`,
    `Company: ${data.companyName}`,
    `Contact Person: ${data.contactPerson}`,
    `Phone: ${data.phone}`,
  ];

  if (data.email && data.email.trim()) {
    bodyLines.push(`Email: ${data.email.trim()}`);
  }

  if (data.city && data.city.trim()) {
    bodyLines.push(`City: ${data.city.trim()}`);
  }

  if (data.message && data.message.trim()) {
    bodyLines.push('', 'Requirements / Details:', data.message.trim());
  }

  bodyLines.push('', 'Best regards,', data.contactPerson);

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(bodyLines.join('\n'));

  return `mailto:${siteConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;
}

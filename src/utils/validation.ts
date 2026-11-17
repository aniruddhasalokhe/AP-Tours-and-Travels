/**
 * Validates a 10-digit Indian mobile number.
 * Supports optional +91, 91, or 0 prefixes, along with spaces or hyphens.
 */
export function isValidIndianPhone(phone: string): boolean {
  if (!phone) return false;
  const cleanPhone = phone.replace(/[\s\-()]/g, '');
  // Matches +91XXXXXXXXXX, 91XXXXXXXXXX, 0XXXXXXXXXX, or XXXXXXXXXX where X begins with 6-9
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(cleanPhone);
}

/**
 * Validates basic email structure.
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

/**
 * Checks whether a string value is provided and non-empty after trimming.
 */
export function isRequired(value: string | null | undefined): boolean {
  if (value === null || value === undefined) return false;
  return value.trim().length > 0;
}

/**
 * Checks whether a date string (e.g. YYYY-MM-DD from an HTML5 date input)
 * represents today or a future date.
 */
export function isFutureDate(dateStr: string): boolean {
  if (!dateStr) return false;

  const [yearStr, monthStr, dayStr] = dateStr.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1; // 0-indexed month
  const day = parseInt(dayStr, 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    const parsed = new Date(dateStr);
    if (isNaN(parsed.getTime())) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    parsed.setHours(0, 0, 0, 0);
    return parsed.getTime() >= today.getTime();
  }

  const inputDate = new Date(year, month, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return inputDate.getTime() >= today.getTime();
}

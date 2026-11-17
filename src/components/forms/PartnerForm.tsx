// ============================================================
// AP Tours & Travels — Partner Enquiry Form Component
// ============================================================
// Enables Travel Agencies, Tour Operators, Corporates, and Event
// Companies to connect via WhatsApp or Email.
// ============================================================

import React, { useState } from 'react';
import { siteConfig } from '../../config/site';
import { isRequired, isValidIndianPhone, isValidEmail } from '../../utils/validation';
import {
  buildPartnerMessage,
  buildPartnerMailto,
  buildWhatsAppLink,
  type PartnerFormData,
} from '../../utils/whatsapp';

interface FormState {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  city: string;
  partnerType: string;
  expectedRequirement: string;
  message: string;
}

interface FormErrors {
  companyName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  city?: string;
  partnerType?: string;
}

const PartnerForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    partnerType: siteConfig.partnerTypes[0] || 'Travel Agency',
    expectedRequirement: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!isRequired(formData.companyName)) {
      newErrors.companyName = 'Company or Agency name is required';
    }

    if (!isRequired(formData.contactPerson)) {
      newErrors.contactPerson = 'Contact person name is required';
    }

    if (!isRequired(formData.phone)) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!isRequired(formData.email)) {
      newErrors.email = 'Email address is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!isRequired(formData.city)) {
      newErrors.city = 'City is required';
    }

    if (!isRequired(formData.partnerType)) {
      newErrors.partnerType = 'Please select your organization type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructPayload = (): PartnerFormData => {
    const combinedRequirements = [
      formData.expectedRequirement.trim()
        ? `Monthly requirement: ${formData.expectedRequirement.trim()}`
        : '',
      formData.message.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    return {
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      partnerType: formData.partnerType,
      message: combinedRequirements || undefined,
    };
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = constructPayload();
    const message = buildPartnerMessage(payload);
    const waLink = buildWhatsAppLink(siteConfig.whatsappNumber, message);

    setToastMessage('Opening WhatsApp...');
    if (typeof window !== 'undefined') {
      window.open(waLink, '_blank', 'noopener,noreferrer');
    }

    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const handleEmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = constructPayload();
    const mailtoLink = buildPartnerMailto(payload);

    setToastMessage('Opening email client...');
    if (typeof window !== 'undefined') {
      window.location.href = mailtoLink;
    }

    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  const inputClass =
    'w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:border-[#F5B400] focus:ring-1 focus:ring-[#F5B400] outline-none transition text-sm sm:text-base';

  return (
    <div className="relative">
      <form onSubmit={handleWhatsAppSubmit} noValidate className="space-y-4">
        <div>
          <h3 className="font-['Poppins'] text-white font-bold text-xl sm:text-2xl">
            Partner Enquiry
          </h3>
          <p className="font-['Inter'] text-gray-300 text-xs sm:text-sm mt-1">
            Fill in your details and we will get back to you promptly.
          </p>
        </div>

        {/* Agency/Company Name */}
        <div>
          <label
            htmlFor="partner-company"
            className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
          >
            Agency / Company Name <span className="text-[#F5B400]">*</span>
          </label>
          <input
            id="partner-company"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Skyline Travel Solutions"
            className={inputClass}
            required
          />
          {errors.companyName && (
            <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Contact Person */}
        <div>
          <label
            htmlFor="partner-contact"
            className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
          >
            Contact Person <span className="text-[#F5B400]">*</span>
          </label>
          <input
            id="partner-contact"
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            placeholder="e.g. Amit Patil"
            className={inputClass}
            required
          />
          {errors.contactPerson && (
            <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
              {errors.contactPerson}
            </p>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="partner-phone"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              Phone (10 Digits) <span className="text-[#F5B400]">*</span>
            </label>
            <input
              id="partner-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9614379062"
              className={inputClass}
              required
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="partner-email"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              Email Address <span className="text-[#F5B400]">*</span>
            </label>
            <input
              id="partner-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. contact@company.com"
              className={inputClass}
              required
            />
            {errors.email && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* City & Organization Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="partner-city"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              City <span className="text-[#F5B400]">*</span>
            </label>
            <input
              id="partner-city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Kolhapur / Pune"
              className={inputClass}
              required
            />
            {errors.city && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.city}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="partner-type"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              Partner Type <span className="text-[#F5B400]">*</span>
            </label>
            <select
              id="partner-type"
              name="partnerType"
              value={formData.partnerType}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
              required
            >
              {siteConfig.partnerTypes.map((type) => (
                <option key={type} value={type} className="text-gray-900 bg-white">
                  {type}
                </option>
              ))}
            </select>
            {errors.partnerType && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.partnerType}
              </p>
            )}
          </div>
        </div>

        {/* Expected Monthly Requirement (Optional) */}
        <div>
          <label
            htmlFor="partner-requirement"
            className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
          >
            Expected Monthly Requirement <span className="text-gray-300 text-xs">(Optional)</span>
          </label>
          <input
            id="partner-requirement"
            type="text"
            name="expectedRequirement"
            value={formData.expectedRequirement}
            onChange={handleChange}
            placeholder="e.g. 4-6 airport trips / month"
            className={inputClass}
          />
        </div>

        {/* Message (Optional) */}
        <div>
          <label
            htmlFor="partner-message"
            className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
          >
            Additional Message / Requirements <span className="text-gray-300 text-xs">(Optional)</span>
          </label>
          <textarea
            id="partner-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your fleet requirements, frequent routes, or specific expectations..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Action Buttons: WhatsApp (Primary) and Email (Secondary) */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-[#F5B400] hover:bg-[#D49E00] text-[#0B1530] font-['Poppins'] font-bold py-3.5 px-5 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-5 h-5 fill-current shrink-0"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Send on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleEmailSubmit}
            className="flex-1 border-2 border-[#F5B400] text-[#F5B400] hover:bg-[#F5B400] hover:text-[#0B1530] font-['Poppins'] font-semibold py-3.5 px-5 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base bg-transparent"
          >
            {/* Email Icon */}
            <svg
              className="w-5 h-5 fill-none stroke-current shrink-0"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <span>Send by Email Instead</span>
          </button>
        </div>
      </form>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0B1530] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#F5B400] toast-enter">
          <span className="w-3 h-3 rounded-full bg-[#F5B400] animate-ping" />
          <span className="font-['Inter'] text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default PartnerForm;

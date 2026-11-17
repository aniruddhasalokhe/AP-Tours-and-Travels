// ============================================================
// AP Tours & Travels — Quick Quote Form Component
// ============================================================
// Collects travel requirements, validates inputs, formats a
// structured WhatsApp message, and directs the user to WhatsApp.
// ============================================================

import React, { useState } from 'react';
import { siteConfig } from '../../config/site';
import { isRequired, isValidIndianPhone, isFutureDate } from '../../utils/validation';
import { buildQuickQuoteMessage, buildWhatsAppLink } from '../../utils/whatsapp';

interface FormState {
  name: string;
  phone: string;
  from: string;
  to: string;
  date: string;
  passengers: string;
  tripType: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  from?: string;
  to?: string;
  date?: string;
  passengers?: string;
  tripType?: string;
}

const QuickQuoteForm: React.FC = () => {
  // Today's date in YYYY-MM-DD for the HTML5 min attribute
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    from: '',
    to: '',
    date: '',
    passengers: '1-4',
    tripType: siteConfig.tripTypes[0] || 'One Way',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!isRequired(formData.name)) {
      newErrors.name = 'Please enter your name';
    }

    if (!isRequired(formData.phone)) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!isRequired(formData.from)) {
      newErrors.from = 'Please enter pickup city';
    }

    if (!isRequired(formData.to)) {
      newErrors.to = 'Please enter drop city';
    }

    if (!isRequired(formData.date)) {
      newErrors.date = 'Please select a travel date';
    } else if (!isFutureDate(formData.date)) {
      newErrors.date = 'Travel date cannot be in the past';
    }

    if (!isRequired(formData.passengers)) {
      newErrors.passengers = 'Please select number of passengers';
    }

    if (!isRequired(formData.tripType)) {
      newErrors.tripType = 'Please select a trip type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build WhatsApp message
    const message = buildQuickQuoteMessage({
      name: formData.name,
      phone: formData.phone,
      from: formData.from,
      to: formData.to,
      date: formData.date,
      passengers: formData.passengers,
      tripType: formData.tripType,
    });

    const waLink = buildWhatsAppLink(siteConfig.whatsappNumber, message);

    // Show brief toast
    setShowToast(true);

    // Open WhatsApp link in new tab
    if (typeof window !== 'undefined') {
      window.open(waLink, '_blank', 'noopener,noreferrer');
    }

    // Hide toast after 2 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const inputClass =
    'w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder:text-white/60 focus:border-[#F5B400] focus:ring-1 focus:ring-[#F5B400] outline-none transition text-sm sm:text-base';

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <h3 className="font-['Poppins'] text-white font-bold text-xl sm:text-2xl mb-1">
          Get a Quick Quote
        </h3>
        <p className="font-['Inter'] text-gray-300 text-xs sm:text-sm mb-4">
          Share your itinerary and receive instant pricing on WhatsApp.
        </p>

        {/* Name Field */}
        <div>
          <label
            htmlFor="quote-name"
            className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
          >
            Your Name <span className="text-[#F5B400]">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={inputClass}
            required
          />
          {errors.name && (
            <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="quote-phone"
            className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
          >
            Phone Number (10 Digits) <span className="text-[#F5B400]">*</span>
          </label>
          <input
            id="quote-phone"
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

        {/* Pickup & Drop Cities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="quote-from"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              Pickup City <span className="text-[#F5B400]">*</span>
            </label>
            <input
              id="quote-from"
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              placeholder="e.g. Kolhapur"
              className={inputClass}
              required
            />
            {errors.from && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.from}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="quote-to"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              Drop City <span className="text-[#F5B400]">*</span>
            </label>
            <input
              id="quote-to"
              type="text"
              name="to"
              value={formData.to}
              onChange={handleChange}
              placeholder="e.g. Pune"
              className={inputClass}
              required
            />
            {errors.to && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.to}
              </p>
            )}
          </div>
        </div>

        {/* Travel Date */}
        <div>
          <label
            htmlFor="quote-date"
            className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
          >
            Travel Date <span className="text-[#F5B400]">*</span>
          </label>
          <input
            id="quote-date"
            type="date"
            name="date"
            min={todayStr}
            value={formData.date}
            onChange={handleChange}
            className={`${inputClass} [color-scheme:dark]`}
            required
          />
          {errors.date && (
            <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
              {errors.date}
            </p>
          )}
        </div>

        {/* Passengers & Trip Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="quote-passengers"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              Passengers <span className="text-[#F5B400]">*</span>
            </label>
            <select
              id="quote-passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
              required
            >
              <option value="1" className="text-gray-900 bg-white">1 Passenger</option>
              <option value="2" className="text-gray-900 bg-white">2 Passengers</option>
              <option value="3" className="text-gray-900 bg-white">3 Passengers</option>
              <option value="4" className="text-gray-900 bg-white">4 Passengers</option>
              <option value="5" className="text-gray-900 bg-white">5 Passengers</option>
              <option value="6" className="text-gray-900 bg-white">6 Passengers</option>
              <option value="7" className="text-gray-900 bg-white">7 Passengers (Max)</option>
            </select>
            {errors.passengers && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.passengers}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="quote-tripType"
              className="block text-white text-xs sm:text-sm font-medium mb-1 font-['Inter']"
            >
              Trip Type <span className="text-[#F5B400]">*</span>
            </label>
            <select
              id="quote-tripType"
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
              required
            >
              {siteConfig.tripTypes.map((type) => (
                <option key={type} value={type} className="text-gray-900 bg-white">
                  {type}
                </option>
              ))}
            </select>
            {errors.tripType && (
              <p className="mt-1 text-xs text-amber-300 font-medium font-['Inter']">
                {errors.tripType}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-[#F5B400] hover:bg-[#D49E00] text-[#0B1530] font-['Poppins'] font-bold py-3.5 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            {/* WhatsApp Icon */}
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Get Quote on WhatsApp</span>
          </button>
        </div>
      </form>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0B1530] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#F5B400] toast-enter">
          <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping" />
          <span className="font-['Inter'] text-sm font-medium">Opening WhatsApp...</span>
        </div>
      )}
    </div>
  );
};

export default QuickQuoteForm;

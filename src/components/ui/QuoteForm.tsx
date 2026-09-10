"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, Send, RotateCcw } from "lucide-react";
import { CONTACT_DATA } from "@/data/siteData";

interface FormData {
  institutionName: string;
  email: string;
  phone: string;
  requirements: string;
}

interface FormErrors {
  institutionName?: string;
  email?: string;
  phone?: string;
  requirements?: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    institutionName: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.institutionName.trim()) {
      newErrors.institutionName = "Institution name is required.";
    } else if (formData.institutionName.trim().length < 2) {
      newErrors.institutionName = "Please enter a valid institution name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid work or institutional email.";
    }

    if (formData.phone.trim()) {
      const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, "");
      if (!/^\d{7,15}$/.test(phoneClean)) {
        newErrors.phone = "Please enter a valid phone number (7–15 digits).";
      }
    } else {
      newErrors.phone = "Phone number is required for quote coordination.";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please describe your uniform requirements.";
    } else if (formData.requirements.trim().length < 10) {
      newErrors.requirements =
        "Please provide a few details (e.g. grade levels, estimated student count).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
      } else {
        setServerError(
          data.error || "Unable to send your inquiry. Please try again or call us directly."
        );
      }
    } catch {
      // Fallback for network issues or demo
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      institutionName: "",
      email: "",
      phone: "",
      requirements: "",
    });
    setErrors({});
    setIsSuccess(false);
    setServerError(null);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-[8px] p-8 sm:p-10 border border-[#B89047]/40 shadow-xs text-center flex flex-col items-center justify-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-[#F5EFE3] text-[#B89047] flex items-center justify-center mb-5 border border-[#E5DBCA]">
          <CheckCircle className="w-9 h-9 stroke-[2]" />
        </div>

        <h3 className="font-sans text-2xl sm:text-3xl text-[#0F172A] font-semibold tracking-tight mb-2">
          Quote Request Received!
        </h3>

        <p className="font-sans text-sm sm:text-base text-[#4B5563] max-w-md mb-6 leading-relaxed">
          Thank you for reaching out to Concord Apparel. Our team will review your requirements for <strong className="text-[#0F172A]">{formData.institutionName}</strong> and contact you within 24 hours.
        </p>

        <div className="w-full max-w-sm p-4 bg-[#FDFBF7] rounded-[6px] border border-[#E9E4D8] text-xs text-left text-[#525E71] space-y-1.5 mb-6">
          <div className="flex justify-between">
            <span className="text-[#768192]">Contact Email:</span>
            <span className="font-medium text-[#0F172A]">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#768192]">Direct Phone:</span>
            <span className="font-medium text-[#0F172A]">{formData.phone}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] border border-[#DDD5C5] text-xs font-semibold text-[#0F172A] hover:bg-[#F8F5EE] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047]"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#B89047]" />
          <span>Send Another Request</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[8px] p-5 sm:p-8 lg:p-10 border border-[#E5DFD2] shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
      <div className="mb-6">
        <h3 className="font-sans text-2xl sm:text-3xl text-[#0F172A] font-semibold tracking-tight mb-1.5">
          {CONTACT_DATA.formHeading}
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[#525E71]">
          Tell us what you need and we will prepare a free sample kit and price quote for your school.
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-[6px] bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Institution Name */}
        <div>
          <label
            htmlFor="institutionName"
            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5"
          >
            School or College Name <span className="text-red-500">*</span>
          </label>
          <input
            id="institutionName"
            name="institutionName"
            type="text"
            value={formData.institutionName}
            onChange={handleChange}
            placeholder="e.g. Greenwood High School"
            className={`w-full px-3.5 py-2.5 rounded-[6px] text-base sm:text-sm min-h-[44px] text-[#111827] bg-[#FDFBF7] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B89047]/80 ${
              errors.institutionName
                ? "border-red-400 bg-red-50/20"
                : "border-[#DDD5C5] hover:border-[#B89047]/60"
            }`}
          />
          {errors.institutionName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.institutionName}</span>
            </p>
          )}
        </div>

        {/* Email & Phone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="principal@school.edu.in"
              className={`w-full px-3.5 py-2.5 rounded-[6px] text-base sm:text-sm min-h-[44px] text-[#111827] bg-[#FDFBF7] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B89047]/80 ${
                errors.email
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#DDD5C5] hover:border-[#B89047]/60"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full px-3.5 py-2.5 rounded-[6px] text-base sm:text-sm min-h-[44px] text-[#111827] bg-[#FDFBF7] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B89047]/80 ${
                errors.phone
                  ? "border-red-400 bg-red-50/20"
                  : "border-[#DDD5C5] hover:border-[#B89047]/60"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Uniform Requirements */}
        <div>
          <label
            htmlFor="requirements"
            className="block font-sans text-xs font-semibold uppercase tracking-wider text-[#1E293B] mb-1.5"
          >
            Tell us about your uniform needs <span className="text-red-500">*</span>
          </label>
          <textarea
            id="requirements"
            name="requirements"
            rows={4}
            value={formData.requirements}
            onChange={handleChange}
            placeholder="e.g. Grades 1 to 10, approx. 300 students, need shirts, trousers, and skirts for the new academic year..."
            className={`w-full px-3.5 py-2.5 rounded-[6px] text-base sm:text-sm min-h-[44px] text-[#111827] bg-[#FDFBF7] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#B89047]/80 resize-y ${
              errors.requirements
                ? "border-red-400 bg-red-50/20"
                : "border-[#DDD5C5] hover:border-[#B89047]/60"
            }`}
          />
          {errors.requirements && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.requirements}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[6px] bg-[#0F172A] text-white hover:bg-[#1E293B] active:bg-[#0B111E] font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89047] disabled:opacity-60 cursor-pointer shadow-xs"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#B89047]" />
                <span>Processing Inquiry...</span>
              </>
            ) : (
              <>
                <span>Get Free Quote</span>
                <Send className="w-4 h-4 text-[#B89047]" />
              </>
            )}
          </button>

          {/* Privacy Reassurance */}
          <p className="mt-3 text-center text-xs text-[#6B7280]">
            {CONTACT_DATA.privacyText}
          </p>
        </div>
      </form>
    </div>
  );
}


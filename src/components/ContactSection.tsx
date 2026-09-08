import React, { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import SectionCardTitle from '@/components/SectionCardTitle';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [globalError, setGlobalError] = useState('');

  const validateField = (field: keyof FormData, value: string): string => {
    const val = value.trim();
    switch (field) {
      case 'name':
        if (!val) return 'Full Name is required.';
        if (val.length < 2) return 'Name must be at least 2 characters long.';
        if (!/^[a-zA-Z\s.'-]+$/.test(val)) return 'Name should contain letters, spaces, and hyphens only.';
        return '';
      case 'email':
        if (!val) return 'Email Address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) return 'Please enter a valid email address (e.g. name@example.com).';
        return '';
      case 'phone':
        if (val && !/^(\+?\d{1,4}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/.test(val)) {
          return 'Please enter a valid phone number (e.g. +91 98765 43210).';
        }
        return '';
      case 'subject':
        if (!val) return 'Subject is required.';
        if (val.length < 3) return 'Subject must be at least 3 characters long.';
        return '';
      case 'message':
        return '';
      default:
        return '';
    }
  };

  const validateAll = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};
    (Object.keys(data) as Array<keyof FormData>).forEach((field) => {
      const err = validateField(field, data[field]);
      if (err) newErrors[field] = err;
    });
    return newErrors;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error || undefined }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error || undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: Record<keyof FormData, boolean> = {
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus('error');
      setGlobalError('Please fix the errors in the form before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setGlobalError('');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTouched({
        name: false,
        email: false,
        phone: false,
        subject: false,
        message: false,
      });
      setErrors({});
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Contact Header Card */}
      <div
        style={{
          backgroundColor: 'rgb(30, 30, 31)',
          border: '1px solid rgb(43, 43, 44)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <SectionTitle title="Get in Touch" />
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '1.6em',
            color: 'rgb(185, 185, 186)',
          }}
        >
          I am always open to discussing new full-time software engineering roles, contract projects, open-source collaborations, or tech consulting. Reach out directly or fill in the form below!
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Email */}
        <div
          style={{
            backgroundColor: 'rgb(30, 30, 31)',
            border: '1px solid rgb(43, 43, 44)',
            borderRadius: '20px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
          className="hover:border-[#EA4335]/50 transition-all duration-200"
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(234, 67, 53, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA4335',
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                fill="#EA4335"
              />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs uppercase font-medium text-[#EA4335]">Direct Email</span>
            <a
              href="mailto:chandansahu9054@gmail.com"
              className="text-sm font-semibold text-[rgb(243,243,252)] hover:underline truncate"
            >
              chandansahu9054@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div
          style={{
            backgroundColor: 'rgb(30, 30, 31)',
            border: '1px solid rgb(43, 43, 44)',
            borderRadius: '20px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
          className="hover:border-rose-400/50 transition-all duration-200"
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(234, 67, 53, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EA4335',
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="#EA4335"
              />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs uppercase font-medium text-[#EA4335]">Location</span>
            <span className="text-sm font-semibold text-[rgb(243,243,252)] truncate">
              Hyderabad, Telangana, India
            </span>
          </div>
        </div>

        {/* LinkedIn */}
        <div
          style={{
            backgroundColor: 'rgb(30, 30, 31)',
            border: '1px solid rgb(43, 43, 44)',
            borderRadius: '20px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
          className="hover:border-[#0A66C2]/50 transition-all duration-200"
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: 'rgba(10, 102, 194, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="4" fill="#0A66C2" />
              <path
                d="M19 19h-2.9v-4.5c0-1.1-.02-2.5-1.5-2.5-1.5 0-1.8 1.2-1.8 2.4V19H9.9V9.5h2.8v1.3h.04c.39-.74 1.34-1.5 2.76-1.5 2.95 0 3.5 1.94 3.5 4.5V19zM6.9 8.2c-.93 0-1.7-.75-1.7-1.7s.76-1.7 1.7-1.7 1.7.76 1.7 1.7-.77 1.7-1.7 1.7zm1.4 10.8H5.4V9.5h2.9V19z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs uppercase font-medium text-[#0A66C2]">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/sr-chandan-sahu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[rgb(243,243,252)] hover:underline truncate"
            >
              in/sr-chandan-sahu
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Contact Form */}
      <div
        style={{
          backgroundColor: 'rgb(30, 30, 31)',
          border: '1px solid rgb(43, 43, 44)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <SectionCardTitle title="Send a Direct Message" />

        {submitStatus === 'success' && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <div>
              <strong>Message Sent Successfully!</strong>
              <p className="text-xs text-emerald-200/80 mt-0.5">
                Thank you for contacting me. I will get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{globalError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[rgb(185,185,186)] flex items-center justify-between">
                <span>Full Name <span className="text-rose-400">*</span></span>
              </label>
              <input
                type="text"
                placeholder="e.g. Sarah Connor"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(21,21,22)] border text-[rgb(243,243,252)] text-sm placeholder-[rgb(120,120,125)] focus:outline-none transition-colors ${
                  touched.name && errors.name
                    ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500'
                    : touched.name && !errors.name
                    ? 'border-emerald-500/60 focus:border-emerald-500'
                    : 'border-[rgb(43,43,44)] focus:border-[rgb(133,138,227)]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              {touched.name && errors.name && (
                <span className="text-rose-400 text-[11px] font-light flex items-center gap-1 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[rgb(185,185,186)] flex items-center justify-between">
                <span>Email Address <span className="text-rose-400">*</span></span>
              </label>
              <input
                type="email"
                placeholder="sarah@company.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(21,21,22)] border text-[rgb(243,243,252)] text-sm placeholder-[rgb(120,120,125)] focus:outline-none transition-colors ${
                  touched.email && errors.email
                    ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500'
                    : touched.email && !errors.email
                    ? 'border-emerald-500/60 focus:border-emerald-500'
                    : 'border-[rgb(43,43,44)] focus:border-[rgb(133,138,227)]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              {touched.email && errors.email && (
                <span className="text-rose-400 text-[11px] font-light flex items-center gap-1 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[rgb(185,185,186)] flex items-center justify-between">
                <span>Phone Number</span>
                <span className="text-[11px] text-[rgb(130,130,135)] font-light">Optional</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(21,21,22)] border text-[rgb(243,243,252)] text-sm placeholder-[rgb(120,120,125)] focus:outline-none transition-colors ${
                  touched.phone && errors.phone
                    ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500'
                    : touched.phone && formData.phone && !errors.phone
                    ? 'border-emerald-500/60 focus:border-emerald-500'
                    : 'border-[rgb(43,43,44)] focus:border-[rgb(133,138,227)]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              {touched.phone && errors.phone && (
                <span className="text-rose-400 text-[11px] font-light flex items-center gap-1 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[rgb(185,185,186)] flex items-center justify-between">
                <span>Subject <span className="text-rose-400">*</span></span>
              </label>
              <input
                type="text"
                placeholder="Job Role / Project Proposal"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                onBlur={() => handleBlur('subject')}
                className={`w-full px-4 py-2.5 rounded-xl bg-[rgb(21,21,22)] border text-[rgb(243,243,252)] text-sm placeholder-[rgb(120,120,125)] focus:outline-none transition-colors ${
                  touched.subject && errors.subject
                    ? 'border-rose-500/80 bg-rose-500/5 focus:border-rose-500'
                    : touched.subject && !errors.subject
                    ? 'border-emerald-500/60 focus:border-emerald-500'
                    : 'border-[rgb(43,43,44)] focus:border-[rgb(133,138,227)]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              />
              {touched.subject && errors.subject && (
                <span className="text-rose-400 text-[11px] font-light flex items-center gap-1 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {errors.subject}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[rgb(185,185,186)] flex items-center justify-between">
              <span>Your Message</span>
              <span className="text-[11px] text-[rgb(130,130,135)] font-light">Optional</span>
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about the role, tech stack, or project scope..."
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              className={`w-full px-4 py-3 rounded-xl bg-[rgb(21,21,22)] border text-[rgb(243,243,252)] text-sm placeholder-[rgb(120,120,125)] focus:outline-none transition-colors resize-y ${
                touched.message && formData.message
                  ? 'border-emerald-500/60 focus:border-emerald-500'
                  : 'border-[rgb(43,43,44)] focus:border-[rgb(133,138,227)]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto self-start px-8 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer shadow-lg hover:shadow-indigo-500/25 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'rgb(133, 138, 227)',
              color: '#ffffff',
              border: 'none',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending Message...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

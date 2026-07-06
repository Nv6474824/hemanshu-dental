'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Smile, Check, Shield, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export default function BookingModal({ isOpen, onClose, defaultTreatment = '' }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState(defaultTreatment);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-]{8,15}$/.test(phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (email.trim() && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!treatment) newErrors.treatment = 'Please select a treatment';
    if (!date) newErrors.date = 'Preferred date is required';
    if (!time) newErrors.time = 'Preferred time slot is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setTreatment('');
    setDate('');
    setTime('');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    if (isSuccess) {
      setTimeout(resetForm, 300);
    }
  };

  const treatments = [
    'General Checkup & Cleaning',
    'Cosmetic Dentistry',
    'Root Canal Treatment',
    'Dental Implants',
    'Orthodontics (Braces & Aligners)',
    'Pediatric Dental Care',
    'Teeth Whitening',
    'Emergency Dentistry',
  ];

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100"
            id="booking-modal-card"
          >
            {/* Soft Gold Header Accent */}
            <div className="h-2 bg-[#C9A227] w-full" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#222222]"
              id="close-modal-btn"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {!isSuccess ? (
              <div className="p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-[#E8F5E9] p-3 text-[#2E7D32]">
                    <Smile className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#222222] md:text-3xl">
                      Book an Appointment
                    </h2>
                    <p className="text-sm text-gray-500">
                      Your journey to a perfect smile starts here
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" id="booking-form">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Himanshu Sharma"
                        className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#2E7D32] focus:ring-[#E8F5E9]'
                        }`}
                        id="form-name-input"
                      />
                      {errors.name && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#2E7D32] focus:ring-[#E8F5E9]'
                        }`}
                        id="form-phone-input"
                      />
                      {errors.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. himanshu@example.com"
                        className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#2E7D32] focus:ring-[#E8F5E9]'
                        }`}
                        id="form-email-input"
                      />
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Treatment Selection */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Select Treatment *
                      </label>
                      <select
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.treatment
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-gray-200 focus:border-[#2E7D32] focus:ring-[#E8F5E9]'
                        }`}
                        id="form-treatment-select"
                      >
                        <option value="">Select a procedure...</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.treatment && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" /> {errors.treatment}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {/* Preferred Date */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute top-3.5 left-4 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={date}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setDate(e.target.value)}
                          className={`w-full rounded-xl border pl-11 pr-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.date
                              ? 'border-red-300 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[#2E7D32] focus:ring-[#E8F5E9]'
                          }`}
                          id="form-date-input"
                        />
                      </div>
                      {errors.date && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" /> {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Preferred Time *
                      </label>
                      <div className="relative">
                        <Clock className="absolute top-3.5 left-4 h-4 w-4 text-gray-400" />
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className={`w-full rounded-xl border bg-white pl-11 pr-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 ${
                            errors.time
                              ? 'border-red-300 focus:ring-red-200'
                              : 'border-gray-200 focus:border-[#2E7D32] focus:ring-[#E8F5E9]'
                          }`}
                          id="form-time-select"
                        >
                          <option value="">Select a time slot...</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.time && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" /> {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share any special concerns, medical history, or details..."
                      rows={3}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:border-[#2E7D32] focus:outline-none focus:ring-2 focus:ring-[#E8F5E9]"
                      id="form-message-input"
                    />
                  </div>

                  {/* Guarantee info */}
                  <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-3 text-xs text-gray-500">
                    <Shield className="h-4 w-4 text-[#C9A227] shrink-0" />
                    <span>Your personal information is secure and fully HIPAA compliant.</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
                      id="form-cancel-btn"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative rounded-xl bg-[#2E7D32] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1B5E20] focus:ring-4 focus:ring-[#E8F5E9] disabled:opacity-70 flex items-center gap-2 shadow-md shadow-green-900/10"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Confirm Appointment'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center"
                id="booking-success-container"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F5E9] text-[#2E7D32] shadow-inner shadow-green-100">
                  <Check className="h-10 w-10 stroke-[3]" />
                </div>

                <h2 className="mb-3 font-serif text-3xl font-bold text-[#222222]">
                  Appointment Confirmed!
                </h2>
                <p className="mx-auto max-w-md text-gray-500 mb-8 leading-relaxed">
                  Thank you, <span className="font-semibold text-gray-800">{name}</span>! We have reserved your slot on <span className="font-semibold text-gray-800">{date}</span> at <span className="font-semibold text-gray-800">{time}</span> for <span className="font-semibold text-[#2E7D32]">{treatment}</span>.
                </p>

                <div className="mx-auto max-w-sm rounded-2xl bg-[#FAFAFA] border border-gray-100 p-5 text-left mb-8 space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-400">Patient:</span>
                    <span className="font-medium text-[#222222]">{name}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-400">Treatment:</span>
                    <span className="font-medium text-[#222222]">{treatment}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-400">Date & Time:</span>
                    <span className="font-medium text-[#222222]">{date} | {time}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-gray-400">Clinic Contact:</span>
                    <span className="font-medium text-[#2E7D32]">+91 98765 43210</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-8">
                  A confirmation message with instructions has been sent to your phone <span className="font-medium">{phone}</span>{email && <> and email <span className="font-medium">{email}</span></>}.
                </p>

                <button
                  onClick={handleClose}
                  className="rounded-xl bg-[#2E7D32] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B5E20] shadow-md shadow-green-900/10"
                  id="success-done-btn"
                >
                  Done & Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

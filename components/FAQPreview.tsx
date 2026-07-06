'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Phone, Mail, MessageCircle, HelpCircle, ChevronRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Does Himanshu Dental Care offer emergency appointments?',
      answer: 'Yes! We reserve dedicated priority slots every day specifically for emergency care. If you are experiencing acute toothaches, severe dental swelling, or traumatic dental fractures, please call us directly for immediate booking.',
    },
    {
      question: 'Is the dental treatment really pain-free?',
      answer: 'Absolutely. We utilize computerized local anesthesia delivery systems which neutralize the sting of standard needles. Paired with micro-dentistry tools and specialized patient comfort protocols, we ensure your treatment remains entirely painless.',
    },
    {
      question: 'Do you offer flexible payment or interest-free EMI options?',
      answer: 'Yes, we believe premium healthcare should remain accessible. We offer transparent pricing structures along with 0% interest-free EMI options for major treatments including dental implants, smile designs, and orthodontics.',
    },
    {
      question: 'How often should I visit for general dental wellness?',
      answer: 'We recommend a clinical cleaning, scale polishing, and comprehensive checkup every six months. Regular visits allow us to detect potential decay or gum conditions before they escalate into painful, costly problems.',
    },
    {
      question: 'What sterilization standards are followed at the clinic?',
      answer: 'We strictly practice premium Class-B autoclave medical vacuum sterilization. Every instrument undergoes a meticulous physical and chemical disinfection process, and is individually packed and sealed before opening in front of you.',
    },
  ];

  return (
    <section id="faq" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative vector shape */}
      <div className="absolute top-[10%] right-[-5%] h-[300px] w-[300px] bg-[#FDF9E7]/20 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-4">
            <span>Support Centre</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl">
            Frequently Asked <span className="text-[#2E7D32]">Questions</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C9A227]" />
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left mb-16" id="faq-accordion-group">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#2E7D32]/30 bg-[#FAFAFA] shadow-md shadow-gray-200/30'
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50/50'
                }`}
                id={`faq-item-${idx}`}
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 md:p-6 text-left font-serif text-base md:text-lg font-bold text-[#222222] transition-colors hover:text-[#2E7D32] focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all ${
                    isOpen
                      ? 'border-[#2E7D32]/20 bg-[#E8F5E9] text-[#2E7D32]'
                      : 'border-gray-200 bg-white text-gray-400'
                  }`}>
                    {isOpen ? (
                      <Minus className="h-4.5 w-4.5 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4.5 w-4.5 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Accordion Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-7 text-sm md:text-base text-gray-500 font-light leading-relaxed border-t border-gray-100/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* BOTTOM QUESTION BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-tr from-[#E8F5E9]/50 via-white to-[#FDF9E7]/30 border border-gray-100 p-8 md:p-10 shadow-xl shadow-gray-200/50 text-center"
          id="faq-still-questions"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9] text-[#2E7D32]">
            <HelpCircle className="h-6 w-6" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#222222] mb-2">
            Still Have Questions?
          </h3>
          <p className="text-sm text-gray-500 font-light max-w-md mx-auto mb-8">
            Can’t find the answer you’re looking for? Reach out directly to our support desk. We are active 24/7.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4" id="faq-support-actions">
            {/* Call */}
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 hover:border-[#2E7D32]/30"
              id="faq-call"
            >
              <Phone className="h-4 w-4 text-[#2E7D32]" />
              <span>Call Us</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@himanshudentalcare.com?subject=Inquiry from Website"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-50 hover:border-[#2E7D32]/30"
              id="faq-email"
            >
              <Mail className="h-4 w-4 text-[#C9A227]" />
              <span>Email Us</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Himanshu%20Dental%20Care%2C%20I%20have%20a%20question%20regarding%20treatments."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#1B5E20] shadow-md shadow-green-900/10"
              id="faq-whatsapp"
            >
              <MessageCircle className="h-4.5 w-4.5 fill-white stroke-none" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

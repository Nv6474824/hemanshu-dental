'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Award, Shield, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function AboutPreview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="bg-[#FAFAFA] py-20 md:py-28 relative overflow-hidden">
      {/* Subtle styling grids */}
      <div className="absolute top-10 left-10 h-32 w-32 bg-[#C9A227]/5 rounded-full blur-xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Side: Premium Collage of Clinic Visuals */}
          <div className="lg:col-span-5 relative" id="about-visuals">
            
            {/* Background solid framing */}
            <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] rounded-[32px] bg-[#E8F5E9] -z-10" />

            <div className="relative overflow-hidden rounded-[32px] bg-white p-3 shadow-xl border border-gray-100/50" id="about-image-frame">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&h=800&q=80"
                alt="Himanshu Dental Care Modern Treatment Lounge"
                referrerPolicy="no-referrer"
                className="h-full w-full rounded-[24px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                id="about-clinic-image"
              />
              
              {/* Overlaid Gold Badge */}
              <div className="absolute bottom-8 left-8 rounded-2xl bg-white/95 backdrop-blur-md p-4.5 shadow-xl border border-gray-100 flex items-center gap-3 max-w-[240px]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDF9E7] text-[#C9A227]">
                  <Award className="h-5.5 w-5.5" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#222222]">ISO 9001:2015</p>
                  <p className="text-xs text-gray-500">Certified Clinic Standards</p>
                </div>
              </div>
            </div>

            {/* Tiny clinical stat ring */}
            <div className="absolute top-[-20px] right-[-20px] bg-white h-24 w-24 rounded-full border border-gray-100 shadow-lg flex flex-col items-center justify-center text-center p-2">
              <span className="font-serif text-2xl font-black text-[#2E7D32]">100%</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Painless</span>
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left" id="about-narrative">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
              <span>Since 2008</span>
            </div>
            
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl md:text-[42px] leading-tight">
              A Legacy of Premium Dental <br />
              <span className="text-[#2E7D32]">Excellence & Warm Care</span>
            </h2>
            
            <div className="h-1 w-20 rounded-full bg-[#C9A227]" />

            <div className="space-y-4 text-base text-gray-500 font-light leading-relaxed">
              <p>
                Founded by Dr. Himanshu Sharma, Himanshu Dental Care has established itself as a premier destination for holistic, advanced dentistry. We combine medical expertise with standard equipment to redefine the dental clinical experience.
              </p>
              <p>
                We believe that visiting the dentist shouldn&apos;t feel like a chore. Our clinical lounges are designed to evoke comfort, our staff is trained to provide gentle care, and our therapies are planned to remain painless and efficient.
              </p>
            </div>

            {/* Collapsible Expanded Story */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="overflow-hidden"
                  id="expanded-story-content"
                >
                  <div className="border-t border-gray-200 mt-6 pt-6 space-y-4 text-base text-gray-500 font-light leading-relaxed">
                    <p className="font-serif text-lg font-bold text-[#222222] italic">
                      &ldquo;Our focus has never been just treating teeth. We restore confidence.&rdquo;
                    </p>
                    <p>
                      At Himanshu Dental Care, our dental surgeons participate in international medical symposiums to stay at the vanguard of dental sciences. From high-fidelity dental implants using guided bone regeneration to personalized orthodontic designs with clear aligners, we handle simple to complex cosmetic dental reconstructions under one roof.
                    </p>
                    <p>
                      Our patient-first protocols feature zero-wait times, digital scheduling, complete treatment transparency with digital radiographs, and standard hygiene processes certified by state medical departments.
                    </p>

                    {/* Quick highlights list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-[#222222]">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-[#2E7D32] shrink-0" />
                        <span>State Medical Council Registered</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-[#2E7D32] shrink-0" />
                        <span>Premium German Dental Chairs</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-[#2E7D32] shrink-0" />
                        <span>High-Speed CAD/CAM Restorations</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-[#2E7D32] shrink-0" />
                        <span>Lifelong Implant Guarantees</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Read More / Read Less CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2E7D32] hover:text-[#1B5E20] group bg-white border border-gray-200 px-6 py-3 rounded-full hover:border-[#2E7D32]/30 transition-all cursor-pointer"
                id="about-expand-btn"
              >
                <span>{isExpanded ? 'Read Less About Us' : 'Read Our Full Story'}</span>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

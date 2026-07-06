'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import FloatingActions from '@/components/FloatingActions';
import { motion } from 'motion/react';
import { Sparkles, Star, Award, ShieldCheck, Heart, Smile, CheckCircle, Activity, ArrowRight, ShieldAlert, BadgeCheck, Zap } from 'lucide-react';

interface TreatmentDetail {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  benefits: string[];
  techUsed: string;
  duration: string;
  priceEstimate: string;
  icon: React.ComponentType<any>;
  image: string;
}

export default function TreatmentsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState('');

  const treatments: TreatmentDetail[] = [
    {
      id: 'implants',
      name: 'Dental Implants & Prosthodontics',
      category: 'Surgical Dentistry',
      tagline: 'Permanent, lifelike replacements for missing teeth.',
      description: 'Replace missing teeth with high-strength, biocompatible titanium or zirconia root systems topped with premium, custom-milled porcelain crowns. Our advanced computer-guided planning ensures lifelong durability and standard aesthetics.',
      benefits: [
        'Restores full chewing power & bite strength',
        'Prevents bone loss & preserves facial structure',
        'Matches surrounding teeth color & texture exactly',
        'Lifetime warranty on implant fixtures',
      ],
      techUsed: '3D CBCT Guided Surgery, CAD/CAM Milled Crowns',
      duration: '2 - 3 Visits over 3 months',
      priceEstimate: '0% Interest-free EMIs available',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      id: 'cosmetic',
      name: 'Cosmetic Smile Makeovers',
      category: 'Aesthetic Dentistry',
      tagline: 'Unleash your ultimate self-confidence.',
      description: 'Redesign your smile using custom-crafted porcelain veneers, composite bonding, and professional teeth whitening. We analyze facial symmetry, lip contours, and personal preferences to craft a completely natural-looking smile makeover.',
      benefits: [
        'Corrects chipped, stained, or spaced teeth',
        'Digital Smile Design (DSD) previews before starting',
        'Stain-resistant premium porcelain materials',
        'Completed in as little as 2 visits',
      ],
      techUsed: 'Digital Smile Design, Ultra-Thin E-Max Veneers',
      duration: '1 - 2 Visits',
      priceEstimate: 'Custom design consultation included',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      id: 'root-canal',
      name: 'Micro-Endodontics (Root Canal)',
      category: 'Restorative Care',
      tagline: 'Save your natural teeth with absolute comfort.',
      description: 'Overcome painful tooth infections and preserve your natural tooth. Our root canal treatments utilize specialized clinical microscopes and rotary endodontic files, guaranteeing a fast, comfortable, and pain-free procedure.',
      benefits: [
        'Relieves persistent throbbing toothaches immediately',
        'Prevents dental infections from spreading to jawbone',
        'High-speed rotary files complete treatment in 1 visit',
        '99% clinical success rate with laser sterilization',
      ],
      techUsed: 'Dental Operating Microscopes, Rotary Endodontics',
      duration: '1 Session (60 mins)',
      priceEstimate: '100% Pain-free clinical guarantee',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      id: 'aligners',
      name: 'Orthodontics & Clear Aligners',
      category: 'Orthodontic Care',
      tagline: 'Discreetly straight teeth without the metal.',
      description: 'Straighten your teeth comfortably with Invisalign or customized premium medical-grade transparent aligners. Removable and virtually invisible, they allow you to align your teeth without changing your active lifestyle or professional appearance.',
      benefits: [
        'Completely invisible in professional and social settings',
        'Removable for easy brushing, flossing, and eating',
        'No painful metal wires or emergency bracket breaks',
        'Predictable tooth movement tracked via cloud app',
      ],
      techUsed: 'Invisalign System, iTero 3D Intraoral Scanning',
      duration: '6 - 12 Months',
      priceEstimate: 'Includes complimentary teeth whitening pack',
      icon: Smile,
      image: 'https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      id: 'pediatric',
      name: 'Pediatric Dental Care',
      category: 'Family Dentistry',
      tagline: 'Gentle dentistry for your little ones.',
      description: 'Create a positive, fear-free relationship with dentists. Our pediatric lounges and gentle, kid-friendly dentists focus on preventative sealants, tooth protection, and interactive oral hygiene lessons inside an immersive playroom vibe.',
      benefits: [
        'Stress-free environment prevents childhood dental anxiety',
        'Fluoride treatments & tooth sealants block cavities',
        'Dedicated pediatric dental treatment suites',
        'Complimentary tooth-fairy rewards after sessions',
      ],
      techUsed: 'Air-Abrasion Drill-free Cavity Prep, Gentle Sedation',
      duration: '1 Visit (30-45 mins)',
      priceEstimate: 'Family package discounts available',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&h=400&q=80',
    },
    {
      id: 'preventive',
      name: 'Preventive Care & Diagnostic Screenings',
      category: 'General Dentistry',
      tagline: 'The bedrock of healthy, lifelong smiles.',
      description: 'Proactively safeguard your dental wellness. Our premium general dental screenings include high-definition intraoral camera tours, state-of-the-art ultrasonic scale polishing, plaque index mapping, and deep oral cancer screenings.',
      benefits: [
        'Catches dental cavities & gum conditions early',
        'Removes tough plaque, tartar, and coffee stains',
        'Ultrasonic scaling is fast and entirely non-invasive',
        'Personalized dental health scorecard provided',
      ],
      techUsed: 'Ultrasonic Piezo Scalers, Digital Intraoral HD Cameras',
      duration: '1 Session (45 mins)',
      priceEstimate: 'Recommended every 6 months',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=400&q=80',
    },
  ];

  const handleBookTreatment = (treatmentName: string) => {
    setSelectedTreatmentForBooking(treatmentName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]" id="treatments-page-root">
      
      {/* Header / Navbar */}
      <Navbar onOpenBooking={() => handleBookTreatment('')} />

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-b from-[#E8F5E9]/50 to-[#FAFAFA] pt-32 pb-16 text-center relative overflow-hidden">
        {/* Subtle decorative gold highlight */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-64 w-64 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-5"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#C9A227] fill-[#C9A227]" />
            <span>Premium Procedures</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl font-extrabold tracking-tight text-[#222222] sm:text-5xl md:text-[52px] leading-tight"
          >
            Our Specialized <span className="text-[#2E7D32]">Dental Treatments</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#C9A227]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Explore our curated catalog of elite dental procedures. At Himanshu Dental Care, we combine premium clinical artistry with top-tier technology to deliver unmatched results.
          </motion.p>
        </div>
      </section>

      {/* TREATMENTS DETAILED LISTING GRID */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {treatments.map((treatment, idx) => {
            const IconComponent = treatment.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-xl shadow-gray-200/40 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
                id={`treatment-detail-card-${treatment.id}`}
              >
                
                {/* Visual Imagery Panel */}
                <div className={`lg:col-span-5 relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  
                  {/* Floating clinical rating */}
                  <div className="absolute top-4 left-4 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-md border border-gray-100 flex items-center gap-1 text-xs font-bold text-[#222222]">
                    <Star className="h-4 w-4 text-[#C9A227] fill-[#C9A227]" />
                    <span>5.0 Clinical Score</span>
                  </div>
                </div>

                {/* Content Panel */}
                <div className={`lg:col-span-7 space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  
                  {/* Category Pill */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#2E7D32] bg-[#E8F5E9] px-3.5 py-1.5 rounded-full border border-[#2E7D32]/10 uppercase tracking-wider">
                      {treatment.category}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">• {treatment.duration}</span>
                  </div>

                  {/* Name and Tagline */}
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl sm:text-3.5xl font-extrabold tracking-tight text-[#222222]">
                      {treatment.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#C9A227] tracking-wide uppercase">
                      {treatment.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Bullet Benefits Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2" id={`benefits-grid-${treatment.id}`}>
                    {treatment.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <BadgeCheck className="h-5 w-5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Clinic Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-5 text-xs text-gray-400 font-semibold uppercase tracking-wider" id={`metrics-grid-${treatment.id}`}>
                    <div>
                      <p className="text-gray-400 mb-1">Clinic Technologies:</p>
                      <p className="text-gray-800 font-bold flex items-center gap-1.5">
                        <Zap className="h-4 w-4 text-[#C9A227] fill-[#C9A227] animate-pulse" />
                        {treatment.techUsed}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">Pricing / Finance:</p>
                      <p className="text-[#2E7D32] font-bold">
                        {treatment.priceEstimate}
                      </p>
                    </div>
                  </div>

                  {/* Button trigger */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    <button
                      onClick={() => handleBookTreatment(treatment.name)}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2E7D32] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1B5E20] hover:scale-[1.02] shadow-md shadow-green-900/10 cursor-pointer"
                      id={`book-treatment-btn-${treatment.id}`}
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <a
                      href="tel:+919876543210"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Call Special Helpline
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* FOOTER CTA PROMISE */}
      <section className="bg-gradient-to-tr from-[#2E7D32] to-[#1B5E20] text-white py-16 text-center relative overflow-hidden">
        {/* Subtle decorative gold circle */}
        <div className="absolute top-[-50%] left-[-20%] h-[350px] w-[350px] bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-sm sm:text-base text-gray-100/90 font-light max-w-xl mx-auto leading-relaxed">
            Schedule a comprehensive, non-invasive general dental diagnostics checkup today. Our specialists will chart your teeth, capture digital radiographs, and build a tailored dental health roadmap.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleBookTreatment('General Checkup & Cleaning')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A227] text-white px-8 py-4 text-sm font-bold transition-all hover:bg-[#B28E1E] hover:scale-[1.03] shadow-lg shadow-yellow-950/20 cursor-pointer"
            >
              Book General Diagnostics
            </button>
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-bold transition-colors hover:bg-white/20"
            >
              Talk to a Dental Care Expert
            </a>
          </div>
        </div>
      </section>

      {/* Clinical footer */}
      <Footer onOpenBooking={() => handleBookTreatment('')} />

      {/* Pop-up appointment modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultTreatment={selectedTreatmentForBooking}
      />

      {/* Floating Call, WhatsApp, Scroll Actions */}
      <FloatingActions />

    </div>
  );
}

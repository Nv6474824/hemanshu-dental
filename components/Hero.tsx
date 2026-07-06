'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldCheck, Phone, Calendar, Heart, Award, Sparkles, Check } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#E8F5E9]/60 via-[#FAFAFA] to-[#FAFAFA] pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Decorative subtle visual gold/green highlights */}
      <div className="absolute top-20 right-[-10%] -z-10 h-96 w-96 rounded-full bg-[#C9A227]/5 blur-3xl" />
      <div className="absolute bottom-10 left-[-10%] -z-10 h-96 w-96 rounded-full bg-[#2E7D32]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Super Header Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#2E7D32]/10 bg-[#E8F5E9] px-4.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E7D32]"
              id="hero-tag"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#C9A227] fill-[#C9A227]" />
              <span>Himanshu Dental Care</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl font-extrabold tracking-tight text-[#222222] sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1]"
                id="hero-heading"
              >
                Your Smile, <br />
                <span className="text-[#2E7D32]">Our Priority.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-xl text-base text-gray-500 sm:text-lg leading-relaxed font-light"
                id="hero-description"
              >
                Experience world-class, pain-free dental care with advanced technology and seasoned experts. We craft personalized treatment plans to ensure you and your family enjoy lasting, radiant smiles.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
              id="hero-actions"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2E7D32] px-8 py-4.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#1B5E20] hover:scale-[1.03] shadow-lg shadow-green-900/15 border border-transparent hover:border-[#C9A227]/20 active:scale-95 cursor-pointer"
                id="hero-book-btn"
              >
                <Calendar className="h-4.5 w-4.5" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white border border-gray-200 px-8 py-4.5 text-sm font-bold text-[#2E7D32] transition-all duration-300 hover:bg-[#FAFAFA] hover:border-[#2E7D32]/30 active:scale-95"
                id="hero-call-btn"
              >
                <Phone className="h-4.5 w-4.5" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Divider line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="h-[1px] bg-gray-100 max-w-xl"
            />

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-xl"
              id="hero-trust-indicators"
            >
              {/* Google Rating */}
              <div className="flex items-center gap-2.5" id="trust-indicator-google">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDF9E7] text-[#C9A227]">
                  <Star className="h-5 w-5 fill-[#C9A227]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#222222]">⭐ 4.9 Rating</p>
                  <p className="text-xs text-gray-400">On Google Reviews</p>
                </div>
              </div>

              {/* Happy Patients */}
              <div className="flex items-center gap-2.5" id="trust-indicator-patients">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#2E7D32]">
                  <span className="text-sm font-bold">15k+</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#222222]">Happy Patients</p>
                  <p className="text-xs text-gray-400">Trusted Clinic</p>
                </div>
              </div>

              {/* Emergency Available */}
              <div className="flex items-center gap-2.5" id="trust-indicator-emergency">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-orange-600">🚨 Emergency</p>
                  <p className="text-xs text-gray-400">Slots Available</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Doctor Image Panel */}
          <div className="lg:col-span-5 relative flex justify-center" id="hero-image-panel">
            
            {/* Background design elements */}
            <div className="absolute inset-0 -m-4 rounded-[40px] border border-gray-100 bg-white/50 shadow-inner -z-10" />
            
            {/* Premium Gold Accent Ring */}
            <div className="absolute top-1/2 left-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50px] border-2 border-dashed border-[#C9A227]/20 -z-10 animate-[spin_100s_linear_infinite]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 50 }}
              className="relative w-full max-w-sm overflow-hidden rounded-[36px] bg-white shadow-2xl border-4 border-white shadow-gray-300/40"
              id="hero-doctor-wrapper"
            >
              {/* Doctor Photo */}
              <img
                src="https://images.unsplash.com/photo-1594824813573-246434e33963?auto=format&fit=crop&w=700&h=900&q=80"
                alt="Dr. Himanshu, Founder & Chief Dentist"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                id="hero-doctor-image"
              />

              {/* Founder Tag overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-left">
                <p className="font-serif text-lg font-bold">Dr. Himanshu Sharma</p>
                <p className="text-xs text-[#C9A227] font-semibold tracking-wide uppercase">Founder & Head Prosthodontist</p>
              </div>
            </motion.div>

            {/* FLOATING STATISTIC CARDS */}
            {/* Stats Card 1: Happy Patients */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute left-[-20px] top-[20%] hidden md:flex items-center gap-3.5 rounded-2xl bg-white p-4.5 shadow-xl shadow-gray-200/50 border border-gray-100/80 cursor-pointer"
              id="floating-stat-patients"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#2E7D32]">
                <Heart className="h-5 w-5 fill-[#2E7D32]" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-[#222222]">15,000+</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Happy Patients</p>
              </div>
            </motion.div>

            {/* Stats Card 2: Years Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute right-[-20px] top-[50%] hidden md:flex items-center gap-3.5 rounded-2xl bg-white p-4.5 shadow-xl shadow-gray-200/50 border border-gray-100/80 cursor-pointer"
              id="floating-stat-experience"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDF9E7] text-[#C9A227]">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-[#222222]">18+ Years</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Experience</p>
              </div>
            </motion.div>

            {/* Stats Card 3: Successful Treatments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bottom-[20px] left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3.5 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-gray-200/50 border border-gray-100/80 w-[80%] cursor-pointer"
              id="floating-stat-treatments"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F5E9] text-[#2E7D32]">
                <Check className="h-5 w-5 stroke-[3]" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-[#222222]">25,000+</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Successful Treatments Completed</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

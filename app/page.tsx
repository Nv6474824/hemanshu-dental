'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutPreview from '@/components/AboutPreview';
import TestimonialPreview from '@/components/TestimonialPreview';
import BlogPreview from '@/components/BlogPreview';
import FAQPreview from '@/components/FAQPreview';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA]" id="homepage-root">
      {/* Sticky Premium Header / Navigation */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Presentation Layer */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Section 1: Why Choose Us standards */}
      <WhyChooseUs />

      {/* Section 2: Clinical Heritage & Legacy Story */}
      <AboutPreview />

      {/* Section 3: Patient Testimonial Slider and Gallery */}
      <TestimonialPreview />

      {/* Section 4: Latest Clinical Blog Articles */}
      <BlogPreview />

      {/* Section 5: Interactive Frequently Asked Questions */}
      <FAQPreview />

      {/* Premium Multi-column Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Appointment Scheduling Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Floating Call, WhatsApp & Scroll-to-Top triggers */}
      <FloatingActions />
    </div>
  );
}

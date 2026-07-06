'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageSquare, MapPin, Clock, Sparkles, ExternalLink, Globe, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const treatmentsList = [
    { name: 'Dental Implants', href: '/treatments' },
    { name: 'Cosmetic Dentistry', href: '/treatments' },
    { name: 'Root Canal Treatment', href: '/treatments' },
    { name: 'Orthodontics (Braces)', href: '/treatments' },
    { name: 'Teeth Whitening', href: '/treatments' },
    { name: 'Pediatric Care', href: '/treatments' },
  ];

  const quickLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About Us', sectionId: 'about' },
    { label: 'Why Choose Us', sectionId: 'why-choose-us' },
    { label: 'Testimonials', sectionId: 'testimonials' },
    { label: 'Blog', sectionId: 'blog' },
    { label: 'FAQ', sectionId: 'faq' },
  ];

  return (
    <footer id="contact" className="bg-[#111111] text-gray-300 pt-16 pb-8 border-t-2 border-[#C9A227]/40 relative overflow-hidden">
      
      {/* Decorative ambient background spots */}
      <div className="absolute top-[-50px] right-[-50px] h-64 w-64 bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] h-64 w-64 bg-[#C9A227]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top visual divider with gold gradient */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 text-left">
          
          {/* Col 1: Clinic identity */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/#home" className="flex items-center gap-2.5 group">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2E7D32] to-[#1B5E20] text-white shadow-md shadow-green-950/40 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="h-5 w-5 text-[#C9A227] absolute -top-1 -right-1" />
                <span className="font-serif text-xl font-bold tracking-tight">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-[#2E7D32] transition-colors duration-300">
                  HIMANSHU
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                  DENTAL CARE
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Redefining your clinical dentistry experience through a harmonious blend of medical excellence, advanced technologies, and warm, compassionate care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3" id="footer-social-links">
              {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform.toLowerCase()}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all hover:bg-[#2E7D32] hover:text-white hover:border-[#2E7D32]"
                  aria-label={`Follow Himanshu Dental Care on ${platform}`}
                >
                  <Globe className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wider uppercase border-l-2 border-[#C9A227] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm" id="footer-quick-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScrollToSection(link.sectionId)}
                    className="text-gray-400 hover:text-[#2E7D32] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/treatments" className="text-gray-400 hover:text-[#2E7D32] transition-colors">
                  Treatments Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Treatments */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wider uppercase border-l-2 border-[#C9A227] pl-3">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm" id="footer-treatments-links">
              {treatmentsList.map((t) => (
                <li key={t.name}>
                  <Link href={t.href} className="text-gray-400 hover:text-[#2E7D32] transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Working Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wider uppercase border-l-2 border-[#C9A227] pl-3">
              Hours & Contact
            </h4>
            
            <div className="space-y-3.5 text-sm font-light">
              
              {/* Working Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="h-4.5 w-4.5 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="font-semibold text-gray-200">Mon - Sat: 09:00 AM - 08:00 PM</p>
                  <p>Sunday: 10:00 AM - 02:00 PM (Prior bookings only)</p>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="flex items-start gap-2.5">
                <Phone className="h-4.5 w-4.5 text-[#2E7D32] shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="font-semibold text-gray-200">Hotline:</p>
                  <a href="tel:+919876543210" className="hover:text-[#2E7D32] transition-colors font-medium">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="h-4.5 w-4.5 text-[#C9A227] shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="font-semibold text-gray-200">Support Email:</p>
                  <a href="mailto:info@himanshudentalcare.com" className="hover:text-[#2E7D32] transition-colors">
                    info@himanshudentalcare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="h-4.5 w-4.5 text-[#2E7D32] shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="font-semibold text-gray-200">WhatsApp Booking:</p>
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Himanshu%20Dental%20Care%2C%20I%20would%20like%20to%20book%20a%20priority%20appointment."
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#2E7D32] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* GOOGLE MAPS PREMIUM VISUAL CARD */}
        <div className="mb-12" id="footer-google-map-section">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2E7D32]/20 text-[#2E7D32] border border-[#2E7D32]/20">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">Visit Our Clinical Premises</h4>
                <p className="text-sm text-gray-400 font-light mt-1 max-w-lg">
                  Sector-12, Near Metro Station Gateway, Dwarka, New Delhi, Delhi 110075. Located strategically with complimentary valet parking and complete wheelchair accessibility.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#2E7D32] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1B5E20] hover:scale-[1.03]"
              id="open-google-maps-btn"
            >
              <span>Get Directions on Google Maps</span>
              <ArrowUpRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Himanshu Dental Care. All Rights Reserved. Designed to medical safety guidelines.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Patient Bill of Rights</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

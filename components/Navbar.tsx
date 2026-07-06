'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section highlights based on scroll position
      if (pathname === '/') {
        const sections = ['home', 'about', 'why-choose-us', 'testimonials', 'blog', 'faq', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/#home', sectionId: 'home' },
    { label: 'About Us', href: '/#about', sectionId: 'about' },
    { label: 'Treatments', href: '/treatments', isExternal: true },
    { label: 'Testimonials', href: '/#testimonials', sectionId: 'testimonials' },
    { label: 'Blog', href: '/#blog', sectionId: 'blog' },
    { label: 'FAQ', href: '/#faq', sectionId: 'faq' },
    { label: 'Contact', href: '/#contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navLinks[0]) => {
    if (item.isExternal) return;
    
    setIsOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(item.sectionId || '');
      if (el) {
        const offset = 80; // Offset for sticky navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        setActiveSection(item.sectionId || 'home');
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-md shadow-gray-200/20 backdrop-blur-md py-3.5 border-b border-gray-100'
          : 'bg-transparent py-5'
      }`}
      id="main-navbar"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Clinic Logo */}
          <Link href="/#home" className="flex items-center gap-2.5 group" id="navbar-logo">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2E7D32] to-[#1B5E20] text-white shadow-md shadow-green-900/10 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="h-5 w-5 text-[#C9A227] absolute -top-1 -right-1 animate-pulse" />
              <span className="font-serif text-xl font-bold tracking-tight">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#222222] group-hover:text-[#2E7D32] transition-colors duration-300">
                HIMANSHU
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A227]">
                DENTAL CARE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7" id="desktop-nav">
            {navLinks.map((item) => {
              const isCurrent =
                pathname === '/' && !item.isExternal
                  ? activeSection === item.sectionId
                  : pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item)}
                  className={`text-sm font-medium transition-all relative py-1 hover:text-[#2E7D32] ${
                    isCurrent ? 'text-[#2E7D32] font-semibold' : 'text-[#222222]/80'
                  }`}
                  id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A227] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Nav CTAs */}
          <div className="hidden xl:flex items-center gap-4" id="desktop-ctas">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-sm font-semibold text-[#2E7D32] hover:text-[#1B5E20] transition-colors py-2 px-3 rounded-lg hover:bg-[#E8F5E9]"
              id="navbar-phone-cta"
            >
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            
            <button
              onClick={onOpenBooking}
              className="rounded-full bg-[#2E7D32] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1B5E20] hover:scale-[1.02] shadow-md shadow-green-900/10 border border-transparent hover:border-[#C9A227]/20 active:scale-95 cursor-pointer"
              id="navbar-book-cta"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-3">
            <a
              href="tel:+919876543210"
              className="p-2 text-[#2E7D32] bg-[#E8F5E9] rounded-xl hover:bg-[#2E7D32] hover:text-white transition-all"
              aria-label="Call Clinic"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2.5 text-gray-600 hover:bg-gray-100 hover:text-[#222222] transition-colors focus:outline-none"
              id="mobile-menu-btn"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-x-0 top-[72px] bottom-0 z-30 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`xl:hidden fixed inset-x-0 top-[72px] z-30 bg-white shadow-xl transition-all duration-300 ease-in-out border-b border-gray-100 overflow-hidden ${
          isOpen ? 'max-h-[90vh] opacity-100 py-6 px-4' : 'max-h-0 opacity-0 pointer-events-none py-0 px-4'
        }`}
        id="mobile-nav-panel"
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((item) => {
            const isCurrent =
              pathname === '/' && !item.isExternal
                ? activeSection === item.sectionId
                : pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item)}
                className={`text-base font-semibold px-4 py-3 rounded-xl transition-all ${
                  isCurrent
                    ? 'bg-[#E8F5E9] text-[#2E7D32]'
                    : 'text-[#222222] hover:bg-gray-50'
                }`}
                id={`mobile-nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            );
          })}
          
          <div className="h-[1px] bg-gray-100 my-2" />
          
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenBooking();
            }}
            className="w-full text-center rounded-xl bg-[#2E7D32] py-4 text-sm font-bold text-white transition-colors hover:bg-[#1B5E20] shadow-md shadow-green-900/10 cursor-pointer"
            id="mobile-navbar-book-cta"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}

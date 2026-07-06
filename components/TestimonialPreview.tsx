'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Smile } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  treatment: string;
  text: string;
  image: string;
}

export default function TestimonialPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Aditya Vardhan',
      role: 'Principal Software Architect',
      rating: 5,
      treatment: 'Smile Design & Crown Replacement',
      text: 'Dr. Himanshu and his team completely redesigned my smile. The pain-free experience was not just a marketing slogan; it was absolutely true. They explained every detail and used premium digital scanners. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'test-2',
      name: 'Priyanka Sen',
      role: 'Senior Product Designer',
      rating: 5,
      treatment: 'Invisalign Clear Aligners',
      text: 'Being a designer, aesthetics are extremely important to me. The precision of my clear aligner treatment was remarkable. The soft gold accents in the clinic made me feel relaxed, and the sterilization standards are impeccable.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'test-3',
      name: 'Dr. Rajesh Malhotra',
      role: 'Professor of Surgery',
      rating: 5,
      treatment: 'Dental Implants',
      text: 'As a surgeon, I am highly critical of sterile fields and surgical precision. Dr. Himanshu Sharma possesses stellar implant skills. The guided implant surgery was flawless, quick, and healed without any complications.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 'test-4',
      name: 'Meenakshi Iyer',
      role: 'Family Counselor',
      rating: 5,
      treatment: 'Pediatric Care & Root Canal',
      text: 'My 8-year-old was petrified of dental chairs. The pediatric dental lounge at Himanshu Dental Care was a miracle. The dentist treated her with absolute kindness, using pediatric sedation that turned it into a breeze.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-[20%] left-[-5%] h-[400px] w-[400px] bg-[#E8F5E9]/25 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-4">
            <span>Patient Testimonies</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl md:text-[44px]">
            Stories of <span className="text-[#2E7D32]">Radiant Smiles</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C9A227]" />
          <p className="mt-5 text-base md:text-lg text-gray-500 font-light">
            Read what our wonderful patients say about their comfortable journeys to dental wellness.
          </p>
        </div>

        {/* Dynamic Carousel / Slider */}
        {!showAll ? (
          <div className="relative mx-auto max-w-4xl" id="testimonial-slider">
            
            {/* Slide Container */}
            <div className="overflow-hidden rounded-3xl bg-[#FAFAFA] border border-gray-100 p-8 md:p-12 shadow-xl shadow-gray-200/40 relative">
              
              {/* Premium Quote Marks */}
              <Quote className="absolute right-8 top-8 h-20 w-20 text-[#2E7D32]/5 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col md:flex-row items-center gap-8 md:gap-10"
                >
                  {/* Reviewer Headshot */}
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#2E7D32] to-[#C9A227] scale-[1.05] -z-10 blur-[3px]" />
                    <img
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      referrerPolicy="no-referrer"
                      className="h-28 w-28 rounded-2xl object-cover border-2 border-white shadow-md"
                    />
                  </div>

                  {/* Review Text */}
                  <div className="flex-1 text-left space-y-4">
                    
                    {/* Stars and Treatment Badge */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex text-[#C9A227]">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-4.5 w-4.5 fill-[#C9A227] stroke-[1.5]" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#2E7D32] bg-[#E8F5E9] px-3 py-1 rounded-full border border-[#2E7D32]/10">
                        {testimonials[activeIndex].treatment}
                      </span>
                    </div>

                    <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed italic">
                      &ldquo;{testimonials[activeIndex].text}&rdquo;
                    </p>

                    <div>
                      <h4 className="font-serif text-lg font-bold text-[#222222]">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center px-4" id="slider-nav-controls">
              
              {/* Dots */}
              <div className="flex gap-2.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === activeIndex ? 'w-8 bg-[#2E7D32]' : 'w-2.5 bg-gray-200'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Left & Right Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="rounded-full border border-gray-200 bg-white p-3.5 text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#2E7D32] shadow-sm cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-full border border-gray-200 bg-white p-3.5 text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#2E7D32] shadow-sm cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* Expanded Reviews Grid */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
            id="all-testimonials-grid"
          >
            {testimonials.map((test, idx) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl bg-[#FAFAFA] border border-gray-100 p-8 text-left shadow-lg shadow-gray-200/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex text-[#C9A227]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#C9A227]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full border border-[#2E7D32]/10">
                      {test.treatment}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={test.image}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full object-cover border border-gray-200"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#222222]">
                      {test.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      {test.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Read More button */}
        <div className="mt-12 text-center" id="testimonials-cta">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-bold text-[#2E7D32] transition-colors hover:bg-gray-50 hover:border-[#2E7D32]/30 shadow-sm cursor-pointer"
            id="testimonial-readmore-btn"
          >
            <span>{showAll ? 'Show Testimonial Slider' : 'Read All Patient Reviews'}</span>
            <Smile className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

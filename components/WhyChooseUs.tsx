'use client';

import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Sparkles, Cpu, Coins, ShieldCheck, HeartPulse, ChevronRight } from 'lucide-react';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  badge?: string;
}

export default function WhyChooseUs() {
  const features: FeatureCard[] = [
    {
      id: 'docs',
      title: 'Experienced Doctors',
      description: 'Led by veteran specialists with over 18+ years of clinical excellence and academic credentials.',
      icon: UserCheck,
      badge: 'Expertise',
    },
    {
      id: 'painfree',
      title: 'Pain-Free Treatment',
      description: 'Advanced computerized anesthesia and micro-dentistry ensure minimal discomfort.',
      icon: HeartPulse,
      badge: 'Comfort First',
    },
    {
      id: 'equip',
      title: 'Modern Equipment',
      description: 'Equipped with ultra-low radiation 3D CBCT imaging, surgical microscopes, and CAD/CAM.',
      icon: Cpu,
      badge: 'State-of-the-Art',
    },
    {
      id: 'afford',
      title: 'Affordable Care',
      description: 'Transparent, competitive pricing plans and convenient, interest-free EMI dental options.',
      icon: Coins,
    },
    {
      id: 'steril',
      title: 'Sterilized Clinic',
      description: 'Strict adherence to international Class-B sterilization autoclaving standards.',
      icon: ShieldCheck,
      badge: '100% Sterile',
    },
    {
      id: 'emerg',
      title: 'Emergency Support',
      description: 'Dedicated dental emergency response team ready to treat urgent cases with minimal wait.',
      icon: Sparkles,
      badge: '24/7 Priority',
    },
  ];

  return (
    <section id="why-choose-us" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Decorative accent graphic */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-[#E8F5E9]/40 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-[#FDF9E7]/40 rounded-full blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-4">
            <span>Our Standards</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl md:text-[44px] leading-tight">
            Why Patients Trust <br />
            <span className="text-[#2E7D32]">Himanshu Dental Care</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C9A227]" />
          <p className="mt-5 text-base md:text-lg text-gray-500 font-light leading-relaxed">
            We hold ourselves to a higher clinical standard. Discover the premium features that set our patient-first experience apart.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="why-choose-us-grid">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-[#FAFAFA] border border-gray-100 p-8 text-left transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:bg-white hover:border-[#C9A227]/30"
                id={`feature-card-${feature.id}`}
              >
                {/* Accent Golden Top-Border on Hover */}
                <div className="absolute top-0 inset-x-8 h-[3px] bg-[#C9A227] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-full" />

                {/* Badge Overlay */}
                {feature.badge && (
                  <span className="absolute top-6 right-6 text-[10px] font-bold tracking-wider uppercase bg-white px-2.5 py-1 rounded-full text-gray-400 group-hover:bg-[#E8F5E9] group-hover:text-[#2E7D32] transition-colors border border-gray-100">
                    {feature.badge}
                  </span>
                )}

                {/* Icon Circle */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md shadow-gray-100 text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition-all duration-500">
                  <IconComponent className="h-6 w-6 stroke-[1.8]" />
                </div>

                {/* Feature Title */}
                <h3 className="font-serif text-xl font-bold text-[#222222] mb-3 group-hover:text-[#2E7D32] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                  {feature.description}
                </p>

                {/* Micro Action link visual */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#C9A227] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  <span>Learn about our standard</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowRight, X, Heart, MessageSquare, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}

export default function BlogPreview() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'blog-1',
      title: 'The Ultimate Guide to Pain-Free Dental Implants',
      excerpt: 'Discover how modern computer-guided surgical navigation systems make dental implants quick, painless, and highly durable.',
      category: 'Implantology',
      date: 'July 01, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&h=400&q=80',
      content: [
        'Dental implants have revolutionized the replacement of missing teeth, offering a permanent solution that looks, feels, and functions like a natural tooth. However, many patients delay implant treatment due to fears of surgical pain and recovery times. Today, we want to demystify this process and explain how modern technology has made dental implants virtually pain-free.',
        'At Himanshu Dental Care, we utilize state-of-the-art 3D CBCT imaging (Cone Beam Computed Tomography) to map out your entire jaw structure digitally before the procedure even begins. This virtual mapping allows our surgeons to practice and plan the exact placement of your implant down to the tenth of a millimeter.',
        'During the procedure itself, computerized local anesthesia systems deliver numbing agents in a slow, controlled manner, neutralizing the initial sting of the needle. Our advanced surgical guides allow us to place the implant through microscopic keyholes rather than traditional large incisions, leading to minimal postoperative swelling and almost zero pain.',
        'Most of our implant patients report needing nothing stronger than mild over-the-counter pain relievers for just a day or two after surgery. With proper care, these advanced restorations are designed to last a lifetime, returning your confidence and culinary freedom.'
      ]
    },
    {
      id: 'blog-2',
      title: 'Why Invisalign is the Preferred Choice for Working Adults',
      excerpt: 'Traditional metal braces can look awkward in professional settings. Learn why clear Aligners are the ultimate cosmetic orthodontic choice.',
      category: 'Orthodontics',
      date: 'June 24, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&h=400&q=80',
      content: [
        'A confident smile is a massive asset in professional and social settings. Yet, many working adults choose to live with misaligned teeth because they dread the prospect of wearing metallic braces to boardroom meetings or social gatherings.',
        'This is where Invisalign clear aligners enter the equation. Made from medical-grade, smart-track polyurethane, Invisalign aligners are virtually invisible. They allow you to undergo teeth alignment without compromising your professional appearance.',
        'Beyond aesthetics, clear aligners offer significant hygienic advantages. Because they are removable, you can brush, floss, and maintain pristine gum health without navigation around metallic brackets. There are no dietary restrictions either; simply remove your aligners before eating your favorite foods.',
        'Using 3D intraoral scanners, we generate a high-fidelity digital projection of your tooth movements. This means you will see your final smile configuration before the very first tray is manufactured. Appointments are also shorter, requiring brief progress reviews every 6-8 weeks.'
      ]
    },
    {
      id: 'blog-3',
      title: 'Demystifying Root Canals: Gentle Care & Common Myths',
      excerpt: 'Root canals have a reputation they do not deserve. Discover how modern anesthetics make this therapy as comfortable as a standard filling.',
      category: 'Endodontics',
      date: 'June 15, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&w=600&h=400&q=80',
      content: [
        'The phrase "I would rather have a root canal" is frequently used to describe a miserable event. But where does this bad reputation come from? Historically, before modern anesthetics and micro-dentistry, dental procedures were indeed uncomfortable. Today, however, root canal therapy is not only comfortable but is designed specifically to stop severe pain.',
        'A root canal becomes necessary when the soft pulp inside your tooth becomes infected due to deep decay or trauma. If left untreated, this infection can lead to painful abscesses. Root canal therapy safely removes this infected tissue, sterilizes the internal canal, and seals it to prevent future decay.',
        'With modern rotary endodontics and computerized anesthetic delivery, a root canal at our clinic feels remarkably similar to receiving a standard composite filling. The area is completely numbed, and our ultra-precise rotary tools clean the micro-canals with exceptional speed and silence.',
        'Don’t believe the outdated myths. Preserving your natural tooth through a root canal is far better than extracting it and needing implants. Our endodontic specialists ensure you remain comfortable throughout your procedure.'
      ]
    }
  ];

  return (
    <section id="blog" className="bg-[#FAFAFA] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative gold background blur */}
      <div className="absolute bottom-10 right-10 h-64 w-64 bg-[#C9A227]/5 rounded-full blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#2E7D32] mb-4">
            <span>Dental Insights</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl md:text-[44px]">
            Latest from our <span className="text-[#2E7D32]">Clinical Blog</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C9A227]" />
          <p className="mt-5 text-base md:text-lg text-gray-500 font-light">
            Stay informed with clinical guides, oral health insights, and treatment overviews written by our experts.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" id="blog-posts-grid">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group flex flex-col justify-between rounded-3xl bg-white border border-gray-100 overflow-hidden shadow-md shadow-gray-200/20 hover:shadow-2xl hover:shadow-gray-300/40 transition-all duration-500 cursor-pointer text-left"
              id={`blog-card-${post.id}`}
            >
              {/* Blog Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  id={`blog-image-${post.id}`}
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-sm px-3.5 py-1.5 text-xs font-bold text-[#2E7D32] border border-gray-100/50">
                  {post.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#C9A227]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold leading-snug text-[#222222] group-hover:text-[#2E7D32] transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#2E7D32] group-hover:text-[#1B5E20] transition-colors pt-4 border-t border-gray-50">
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Read More Blogs button */}
        <div className="mt-12 text-center" id="blog-cta">
          <button
            onClick={() => setSelectedPost(posts[0])}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-bold text-[#2E7D32] transition-colors hover:bg-gray-50 hover:border-[#2E7D32]/30 shadow-sm cursor-pointer"
            id="blog-readmore-btn"
          >
            <span>Read Featured Article</span>
            <BookOpen className="h-4 w-4" />
          </button>
        </div>

        {/* Blog Reading Overlay Modal */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative z-10 w-full max-w-3xl overflow-y-auto max-h-[90vh] rounded-3xl bg-white shadow-2xl border border-gray-100"
                id="blog-modal-container"
              >
                {/* Visual Header Image */}
                <div className="relative aspect-[21/9] bg-gray-100 w-full">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-6 rounded-full bg-[#E8F5E9] text-[#2E7D32] border border-[#2E7D32]/10 px-3.5 py-1.5 text-xs font-bold">
                    {selectedPost.category}
                  </span>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 rounded-full p-2 bg-black/30 backdrop-blur-md text-white/95 transition-all hover:bg-black/50 hover:text-white"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6 sm:p-10 text-left">
                  {/* Metadata header */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-[#C9A227]" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#C9A227]" />
                      {selectedPost.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl sm:text-3.5xl font-extrabold tracking-tight text-[#222222] mb-6 leading-tight">
                    {selectedPost.title}
                  </h2>

                  {/* Article content paragraphs */}
                  <div className="space-y-5 text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                    {selectedPost.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Editorial signature */}
                  <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] font-bold">
                        H
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#222222]">Reviewed by Dr. Himanshu Sharma</p>
                        <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Head Surgeon, Himanshu Dental Care</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="rounded-full bg-gray-100 text-gray-600 px-6 py-2 text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                      Close Article
                    </button>
                  </div>

                </div>
              </motion.div>

            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

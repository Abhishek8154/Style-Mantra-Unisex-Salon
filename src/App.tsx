/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  User, 
  Star, 
  ChevronRight, 
  Menu, 
  X, 
  Instagram, 
  Facebook,
  Sparkles,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    title: "Hair Patch & Replacement",
    description: "Natural-looking non-surgical hair replacement solutions tailored to your scalp.",
    icon: <Scissors className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Premium Hair Wigs",
    description: "High-quality human hair and synthetic wigs for a confident new look.",
    icon: <User className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hair Extensions",
    description: "Add length and volume with our best-in-class hair extension techniques.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Skin & Beauty Care",
    description: "Advanced skin treatments and salon services for a radiant glow.",
    icon: <Star className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  }
];

const REVIEWS = [
  { name: "Rahul Sharma", text: "Best hair patch service in Bhopal. Very professional and natural results.", rating: 5 },
  { name: "Priya Singh", text: "Amazing hair extensions! The quality is top-notch and the staff is very friendly.", rating: 5 },
  { name: "Amit Verma", text: "Highly recommended for hair replacement. They really understand what suits you.", rating: 5 }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center">
                <Scissors className="text-[#D4AF37] w-6 h-6" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">STYLE MANTRA</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-[#D4AF37] transition-colors uppercase tracking-widest"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:09131011231"
                className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#D4AF37] transition-all duration-300 shadow-lg shadow-black/10"
              >
                BOOK NOW
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-black/5 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {['Services', 'About', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#D4AF37]"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="tel:09131011231"
                  className="block w-full text-center bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-medium"
                >
                  CALL NOW
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6">
                <Sparkles className="w-3 h-3" />
                Bhopal's Premier Hair Studio
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
                Rediscover Your <br />
                <span className="italic text-[#D4AF37]">Confidence</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Style Mantra Unisex Salon specializes in advanced hair replacement, 
                natural hair patches, and premium wigs. Experience the best hair 
                and skin care in Bhopal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:09131011231"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#D4AF37] transition-all group"
                >
                  Book Appointment
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => scrollToSection('services')}
                  className="inline-flex items-center justify-center gap-2 border border-black/10 px-8 py-4 rounded-full font-bold hover:bg-black/5 transition-all"
                >
                  View Services
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200"
                  alt="Salon Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-black/5 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                    <Award className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">10+ Years</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Happy Clients', value: '5000+' },
              { label: 'Expert Stylists', value: '12+' },
              { label: 'Services', value: '25+' },
              { label: 'Rating', value: '4.9/5' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-serif font-bold text-[#D4AF37] mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Our Expertise</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold">Premium Salon Services</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
                    alt="Salon Work"
                    className="rounded-2xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-[#D4AF37] p-8 rounded-2xl text-white">
                    <ShieldCheck className="w-8 h-8 mb-4" />
                    <div className="font-bold text-lg">Quality Guaranteed</div>
                    <p className="text-sm opacity-90 mt-2">We use only the finest products for your hair and skin.</p>
                  </div>
                </div>
                <div className="pt-8 space-y-4">
                  <div className="bg-white p-8 rounded-2xl border border-black/5">
                    <Clock className="w-8 h-8 text-[#D4AF37] mb-4" />
                    <div className="font-bold text-lg">Expert Care</div>
                    <p className="text-sm text-gray-500 mt-2">Personalized attention for every client.</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=600"
                    alt="Hair Styling"
                    className="rounded-2xl shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Why Choose Us</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-8">Excellence in Hair & Skin Care</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Style Mantra Unisex Salon is Bhopal's leading destination for hair replacement 
                and beauty services. We combine years of expertise with modern techniques 
                to deliver results that look and feel natural.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Advanced Non-Surgical Hair Replacement',
                  'Customized Hair Patches & Wigs',
                  'Best Hair Extensions in Bhopal',
                  'Professional Skin & Beauty Treatments',
                  'Highly Experienced Stylists'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:09131011231"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#D4AF37] hover:gap-4 transition-all"
              >
                Learn More About Us <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Testimonials</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-black/5 shadow-sm relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#D4AF37]">
                    {review.name[0]}
                  </div>
                  <div className="font-bold">{review.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4">Visit Us</h2>
              <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-12">Get in Touch</h3>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Location</div>
                    <p className="text-gray-400 leading-relaxed">
                      Habib Ganj, metro police thana, Raksha tower E-5/16 <br />
                      bittan market Front of, Bhopal, Madhya Pradesh 462016
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Call Us</div>
                    <a href="tel:09131011231" className="text-2xl font-bold hover:text-[#D4AF37] transition-colors">
                      09131011231
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="text-[#D4AF37] w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-2">Hours</div>
                    <p className="text-gray-400">Open Daily: 10:00 AM - 09:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.866046342881!2d77.4304!3d23.219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43c222222223%3A0x2222222222222222!2sStyle%20Mantra%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1711180000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#111] border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <Scissors className="text-[#D4AF37] w-4 h-4" />
            </div>
            <span className="text-lg font-serif font-bold tracking-tight text-white">STYLE MANTRA</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Style Mantra Unisex Salon. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        href="tel:09131011231"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}

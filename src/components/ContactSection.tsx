import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import content from '../data/content.json';

export const ContactSection: React.FC = () => {
  const { contact } = content;
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fafaf8] bg-dots relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563EB] uppercase block">
                GET IN TOUCH
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight">
                {contact.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#666] leading-relaxed">
                {contact.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#EAEAEA]">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#888] uppercase">Email Us</div>
                  <a href={`mailto:${contact.email}`} className="text-sm font-semibold text-[#111] hover:text-[#2563EB] transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#888] uppercase">Campus Address</div>
                  <div className="text-sm font-semibold text-[#111] whitespace-pre-line leading-relaxed">
                    {contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Photo */}
            <div className="rounded-xl overflow-hidden border border-[#EAEAEA] h-48 relative shadow-sm">
              <img
                src={contact.image}
                alt="Campus Location"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-mono font-bold">
                NMIET PUNE CAMPUS
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 bg-white border border-[#EAEAEA] rounded-2xl p-6 sm:p-8 shadow-sm"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-[#111] mb-2">Send a Message</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-[#333] mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#EAEAEA] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333] mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@nmiet.ac.in"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#EAEAEA] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#333] mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#EAEAEA] focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button type="submit" className="w-full btn-primary justify-center py-3 text-sm font-semibold">
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#111]">Message Received!</h3>
                <p className="text-sm text-[#666] max-w-sm mx-auto">
                  Thank you <span className="font-semibold text-[#111]">{name}</span>. Our team will respond to your inquiry at <span className="font-semibold text-[#111]">{email}</span> shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setName(''); setEmail(''); setMessage(''); }}
                  className="btn-secondary text-xs px-6 py-2"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

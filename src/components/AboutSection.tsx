import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Handshake, Lightbulb, Heart, Quote, ArrowRight } from 'lucide-react';
import content from '../data/content.json';

const valueIcons: Record<string, React.ElementType> = {
  GraduationCap,
  Handshake,
  Lightbulb,
  Heart,
};

export const AboutSection: React.FC = () => {
  const { about } = content;

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0C1220] text-white relative overflow-hidden">
      {/* Background glow and subtle dot matrix */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-600/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dots-dark opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top Overlapping Layout: Left High Impact Text + Right Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] font-bold uppercase tracking-widest">
              ABOUT ACM NMIET
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              The World's Largest Computing Society.
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal">
              {about.description}
            </p>

            <div className="pt-2 flex items-center gap-6 border-t border-white/10 text-sm font-mono text-blue-400">
              <div>
                <div className="text-2xl font-bold text-white font-display">100K+</div>
                <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider">Global ACM Members</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white font-display">50+</div>
                <div className="text-[11px] text-[#94A3B8] uppercase tracking-wider">NMIET Chapter Events</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Overlapping Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="ACM NMIET Team Collaboration"
                className="w-full h-[380px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/15 rounded-xl p-4">
                <div className="text-xs font-mono text-blue-300 font-bold uppercase tracking-wider mb-1">
                  OFFICIAL STUDENT CHAPTER
                </div>
                <div className="text-sm font-semibold text-white">
                  Nutan Maharashtra Institute of Engineering & Technology
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Mission Quote & Core Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 border-t border-white/10"
        >
          {about.values.map((value, idx) => {
            const Icon = valueIcons[value.icon] || GraduationCap;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-400/20 flex items-center justify-center text-blue-400 mb-3">
                  <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display font-bold text-sm text-white mb-1">
                  {value.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

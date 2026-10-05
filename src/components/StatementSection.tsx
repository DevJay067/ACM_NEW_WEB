import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2, Users, ArrowUpRight } from 'lucide-react';
import content from '../data/content.json';

const domainIcons: Record<string, React.ElementType> = {
  wb1: BookOpen,
  wb2: Code2,
  wb3: Users,
};

export const StatementSection: React.FC = () => {
  const { whatWeBuild } = content;

  return (
    <section id="statement" className="py-20 sm:py-28 bg-[#fafaf8] bg-dots border-t border-[#EAEAEA] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563EB] uppercase">
            — OUR PURPOSE —
          </span>
        </motion.div>

        {/* Big Centered Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight tracking-tight max-w-4xl mx-auto mb-10"
        >
          We build opportunities for students to learn, collaborate, and transform ambitious ideas into real engineering impact.
        </motion.h2>

        {/* Category Domain Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12"
        >
          {whatWeBuild.cards.map((card, idx) => {
            const Icon = domainIcons[card.id] || BookOpen;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#EAEAEA] rounded-xl overflow-hidden group shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-[#111]">
                    DOMAINS // 0{idx + 1}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-md bg-blue-50 text-[#2563EB] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#111]">{card.title}</h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#999] group-hover:text-[#2563EB] transition-colors" />
                  </div>
                  <p className="text-xs text-[#666] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

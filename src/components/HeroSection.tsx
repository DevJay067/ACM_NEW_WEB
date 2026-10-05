import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Calendar, Users, Code2 } from 'lucide-react';
import { HeroIllustration } from './HeroIllustration';
import { BlurText } from './BlurText';
import content from '../data/content.json';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  isReady?: boolean;
}

const statIcons: Record<string, React.ElementType> = { Calendar, Users, Code2 };

const HeroSectionComponent: React.FC<HeroSectionProps> = ({ onNavigate, isReady = true }) => {
  const { hero, site } = content;

  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-between pt-28 pb-12 bg-[#fafaf8] bg-dots overflow-hidden"
    >
      {/* Background imagery + gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div
          className="absolute inset-0 bg-cover bg-center filter grayscale opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf8]/80 via-[#fafaf8] to-[#fafaf8]" />
        <div className="absolute inset-0 bg-dots" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-[#2563EB] text-[11px] font-mono font-semibold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              {hero.badge}
            </motion.div>

            {/* Headline */}
            <div className="font-display text-[42px] sm:text-[56px] lg:text-[64px] font-extrabold text-[#111111] leading-[1.05] tracking-tight">
              <BlurText
                text={hero.titleLine1}
                delay={100}
                animateBy="words"
                direction="top"
                className="text-[#111111]"
                forceAnimate={isReady}
              />
              <br />
              <BlurText
                text={hero.titleLine2}
                delay={100}
                animateBy="words"
                direction="bottom"
                className="text-[#2563EB]"
                forceAnimate={isReady}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl font-normal"
            >
              {hero.subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => onNavigate('statement')}
                className="btn-primary py-3 px-6 shadow-md hover:shadow-lg transition-all"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="btn-secondary py-3 px-6 hover:bg-gray-50 transition-all"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#666]" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Vector Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[440px]">
              <HeroIllustration className="w-full drop-shadow-xl" />
            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-12 pt-6 border-t border-[#EAEAEA]"
        >
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            {hero.stats.map((stat, idx) => {
              const Icon = statIcons[stat.icon] || Calendar;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-[#111] leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#666] font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-10 text-center pb-2 flex flex-col items-center cursor-pointer"
        onClick={() => onNavigate('statement')}
      >
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#888] mb-1">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#2563EB]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export const HeroSection = React.memo(HeroSectionComponent);
export default HeroSection;

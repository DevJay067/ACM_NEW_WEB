import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Brain, Code2, Shield, Palette, BarChart3 } from 'lucide-react';
import content from '../data/content.json';

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Brain,
  Code2,
  Shield,
  Palette,
  BarChart3,
};

const getStatusBadgeStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'coming soon':
      return 'bg-amber-50 text-amber-800 border-amber-200';
    case 'planned':
      return 'bg-yellow-50 text-yellow-800 border-yellow-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
};

export const FocusAreasSection: React.FC = () => {
  const { focusAreas } = content;

  return (
    <section id="focus-areas" className="py-20 sm:py-28 bg-[#fafaf8] bg-dots border-t border-[#EAEAEA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Header Block: Our Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tight leading-none mb-6">
            {focusAreas.title}
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto font-normal">
            {focusAreas.subtitle}
          </p>
        </motion.div>

        {/* Secondary Header Block: Technical Domains We're Passionate About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-4">
            {focusAreas.sectionTitle}
          </h3>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl mx-auto">
            {focusAreas.sectionDescription}
          </p>
        </motion.div>

        {/* Technical Domains 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.domains.map((domain, idx) => {
            const Icon = iconMap[domain.icon] || Code2;
            const badgeClass = getStatusBadgeStyle(domain.status);

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-[#EAEAEA] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#2563EB] mb-6 shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>

                  {/* Title & Status Badge */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-display text-xl font-bold text-[#111111] leading-snug">
                      {domain.title}
                    </h4>
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${badgeClass}`}>
                      {domain.status}
                    </span>
                  </div>

                  {/* Domain Description */}
                  <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {domain.description}
                  </p>
                </div>

                {/* Technologies Footer */}
                <div className="pt-4 border-t border-[#F0F0ED]">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#888888] uppercase block mb-2.5">
                    TECHNOLOGIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {domain.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-[#F5F5F2] border border-[#E6E6E0] text-[#333333] text-xs font-mono px-2.5 py-1 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const MemoizedFocusAreasSection = React.memo(FocusAreasSection);
export default MemoizedFocusAreasSection;

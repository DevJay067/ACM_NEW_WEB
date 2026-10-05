import React from 'react';
import { BookOpen, Code2, Users, ArrowRight } from 'lucide-react';
import content from '../data/content.json';

const cardIcons: Record<string, React.ElementType> = { BookOpen, Code2, Users };

export const WhatWeBuildSection: React.FC = () => {
  const { whatWeBuild } = content;
  const [card1, card2, card3] = whatWeBuild.cards;

  const Icon1 = cardIcons[card1?.icon] || BookOpen;
  const Icon2 = cardIcons[card2?.icon] || Code2;
  const Icon3 = cardIcons[card3?.icon] || Users;

  return (
    <section id="whatwebuild" className="py-12 sm:py-16 bg-[#F8F7F4] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 reveal">
          <div className="space-y-3 max-w-xl">
            <span className="eyebrow">{whatWeBuild.eyebrow}</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0C1220] tracking-tight leading-tight">
              {whatWeBuild.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#64748B] max-w-md leading-relaxed">
            {whatWeBuild.description}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Card 1 — Featured wide */}
          {card1 && (
            <div className="md:col-span-7 card overflow-hidden group reveal delay-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card1.image}
                  alt={card1.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 chip chip-active text-[10px]">Featured</span>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                    <Icon1 className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0C1220]">{card1.title}</h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">{card1.description}</p>
                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors mt-1 cursor-pointer border-none bg-transparent group/link">
                  Explore Workshops
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Card 2 — Narrow */}
          {card2 && (
            <div className="md:col-span-5 card overflow-hidden group reveal delay-2">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card2.image}
                  alt={card2.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 chip text-[10px]">Compete</span>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                    <Icon2 className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0C1220]">{card2.title}</h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed">{card2.description}</p>
                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors mt-1 cursor-pointer border-none bg-transparent group/link">
                  View Hackathons
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Card 3 — Horizontal full-width */}
          {card3 && (
            <div className="md:col-span-12 card overflow-hidden flex flex-col sm:flex-row group reveal delay-3">
              <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden shrink-0">
                <img
                  src={card3.image}
                  alt={card3.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 chip text-[10px]">Network</span>
              </div>
              <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between gap-3">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                      <Icon3 className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#0C1220]">{card3.title}</h3>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed">{card3.description}</p>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer border-none bg-transparent group/link">
                    Join Community
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </button>
                  <span className="text-xs font-semibold text-[#94A3B8] bg-[#F1F0EC] px-3 py-1 rounded-md hidden sm:inline-block">
                    200+ Active Members
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

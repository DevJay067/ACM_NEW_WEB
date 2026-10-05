import React from 'react';
import { motion } from 'framer-motion';
import { AccordionGallery, AccordionItem } from './AccordionGallery';

const galleryEventItems: AccordionItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=1200&fit=crop',
    label: 'Web Development Bootcamp',
    category: 'Workshops',
    date: '04 Oct 2025',
    link: '#events',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384764587-bb0dda352b78?w=900&h=1200&fit=crop',
    label: '24-Hour Hackathon',
    category: 'Hackathons',
    date: '18 Oct 2025',
    link: '#events',
  },
  {
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&h=1200&fit=crop',
    label: 'Tech Talk: Build for Impact',
    category: 'Talks',
    date: '25 Oct 2025',
    link: '#events',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=1200&fit=crop',
    label: 'Open Source Sprint',
    category: 'Community',
    date: '02 Nov 2025',
    link: '#events',
  },
  {
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&h=1200&fit=crop',
    label: 'Community Meetup',
    category: 'Community',
    date: '15 Nov 2025',
    link: '#events',
  },
];

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-20 sm:py-28 bg-[#fafaf8] bg-dots relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12 space-y-3"
        >
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563EB] uppercase block">
            EVENTS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Discover. Learn. Grow.
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            From hands-on workshops to 24-hour hackathons, explore our lineup of upcoming and flagship ACM chapter activities.
          </p>
        </motion.div>

        {/* GSAP Accordion Gallery (Main Visual Showcase) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="shadow-xl rounded-2xl p-2 bg-white/80 backdrop-blur-md border border-[#EAEAEA]"
        >
          <AccordionGallery
            items={galleryEventItems}
            orientation="horizontal"
            trigger="hover"
            expandRatio={0.5}
            height={480}
            radius={16}
            grayscale={true}
            showLabels={true}
            accentColor="#3b82f6"
          />
        </motion.div>

      </div>
    </section>
  );
};

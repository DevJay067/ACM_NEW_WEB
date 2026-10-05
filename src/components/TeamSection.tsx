import React from 'react';
import { motion } from 'framer-motion';
import { ProfileCard, ProfileCardProps } from './ProfileCard';

interface PyramidLevel {
  label: string;
  members: ProfileCardProps[];
  layout: 'center-single' | 'dual' | 'grid';
}

const pyramidData: PyramidLevel[] = [
  {
    label: 'HEAD OF DEPARTMENT',
    layout: 'center-single',
    members: [
      {
        name: 'Dr. Subhashish Patel',
        title: 'Head of Department (Computer Engg)',
        handle: 'hod_computer',
        status: 'Faculty Sponsor',
        avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
    ],
  },
  {
    label: 'FACULTY COORDINATORS',
    layout: 'dual',
    members: [
      {
        name: 'Prof. Rajesh Patil',
        title: 'Faculty Advisor & Assoc. Professor',
        handle: 'rajesh_patil',
        status: 'Faculty Advisor',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
      {
        name: 'Dr. Ananya Sen',
        title: 'ACM Chapter Mentor',
        handle: 'ananya_sen',
        status: 'ACM Mentor',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
    ],
  },
  {
    label: 'EXECUTIVE LEADERSHIP',
    layout: 'center-single',
    members: [
      {
        name: 'Aarav Sharma',
        title: 'Chapter President',
        handle: 'aarav_sharma',
        status: 'President',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
    ],
  },
  {
    label: 'VICE PRESIDENTS',
    layout: 'dual',
    members: [
      {
        name: 'Isha Verma',
        title: 'Vice President (Operations)',
        handle: 'isha_verma',
        status: 'Vice President',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
      {
        name: 'Rohan Gupta',
        title: 'Vice President (Technology)',
        handle: 'rohan_gupta',
        status: 'Vice President',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
    ],
  },
  {
    label: 'DOMAIN LEADS',
    layout: 'grid',
    members: [
      {
        name: 'Sneha Patil',
        title: 'Design & UI/UX Lead',
        handle: 'sneha_patil',
        status: 'Design Lead',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
      {
        name: 'Vikramaditya Singh',
        title: 'Technical & Dev Lead',
        handle: 'vikram_singh',
        status: 'Tech Lead',
        avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
      {
        name: 'Priya Nair',
        title: 'Events & Logistics Lead',
        handle: 'priya_nair',
        status: 'Events Lead',
        avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
      {
        name: 'Kabir Mehta',
        title: 'Marketing & PR Lead',
        handle: 'kabir_mehta',
        status: 'PR Lead',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
        contactText: 'Connect',
        enableTilt: true,
      },
    ],
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-28 bg-[#fafaf8] bg-dots relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563EB] uppercase block">
            OUR TEAM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            People Behind ACM NMIET
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Faculty guidance and dedicated student leaders working together to drive technical excellence across campus.
          </p>
        </motion.div>

        {/* Pyramid Hierarchy Layout */}
        <div className="space-y-16">
          {pyramidData.map((level, levelIdx) => (
            <motion.div
              key={level.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: levelIdx * 0.1 }}
              className="space-y-6 text-center"
            >
              {/* Level Badge Divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="h-px bg-[#EAEAEA] w-12 sm:w-24" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#2563EB] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 uppercase">
                  {level.label}
                </span>
                <div className="h-px bg-[#EAEAEA] w-12 sm:w-24" />
              </div>

              {/* Members Row / Grid */}
              {level.layout === 'center-single' && (
                <div className="flex justify-center">
                  <div className="w-full max-w-xs">
                    <ProfileCard {...level.members[0]} />
                  </div>
                </div>
              )}

              {level.layout === 'dual' && (
                <div className="flex flex-wrap justify-center gap-6">
                  {level.members.map((member) => (
                    <div key={member.name} className="w-full sm:w-[280px]">
                      <ProfileCard {...member} />
                    </div>
                  ))}
                </div>
              )}

              {level.layout === 'grid' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                  {level.members.map((member) => (
                    <ProfileCard key={member.name} {...member} />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

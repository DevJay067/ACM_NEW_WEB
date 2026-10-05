import React from 'react';
import { ArrowUp, ExternalLink, Github, Linkedin, Twitter, Globe } from 'lucide-react';
import content from '../data/content.json';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Events', id: 'events' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const acmResources = [
    { name: 'ACM.org', url: 'https://www.acm.org' },
    { name: 'ACM Digital Library', url: 'https://dl.acm.org' },
    { name: 'ACM Learning Center', url: 'https://learning.acm.org' },
    { name: 'Career Center', url: 'https://jobs.acm.org' },
  ];

  return (
    <footer className="bg-[#0C1220] text-white pt-12 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/[0.08]">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/acm-logo.png"
                alt="ACM NMIET Student Chapter"
                className="h-10 w-auto object-contain bg-white/90 p-1.5 rounded-lg shadow-sm"
              />
            </div>

            <p className="text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              Building the next generation of engineers, designers, and tech leaders at {content.site.college}.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#64748B]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Est. {content.site.established} • Official ACM Chapter
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Globe, label: 'Website' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/50 hover:bg-blue-500/10 text-[#64748B] hover:text-white flex items-center justify-center transition-all"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors font-medium cursor-pointer border-none bg-transparent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">ACM Network</h4>
            <ul className="space-y-2">
              {acmResources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#94A3B8] hover:text-blue-400 transition-colors font-medium group"
                  >
                    {res.name}
                    <ExternalLink className="w-3 h-3 text-[#64748B] group-hover:text-blue-400 transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <span>© {content.site.established} {content.site.fullTitle}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] text-[#94A3B8] hover:text-white px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/[0.15] transition-all text-xs font-medium cursor-pointer"
          >
            Back to top
            <ArrowUp className="w-3 h-3 text-blue-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

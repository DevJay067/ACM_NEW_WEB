import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { GlassSurface } from './GlassSurface';
import content from '../data/content.json';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Events', id: 'events' },
    { label: 'Domains', id: 'focus-areas' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-3'}`}>
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={16}
          borderWidth={0.06}
          brightness={60}
          opacity={0.9}
          blur={12}
          displace={0}
          backgroundOpacity={0.25}
          saturation={1.3}
          distortionScale={-80}
          className="w-full shadow-sm"
        >
          <nav className="flex items-center justify-between w-full px-2 py-1 sm:px-3">
            {/* Logo */}
            <button
              onClick={() => handleClick('hero')}
              className="flex items-center gap-2 cursor-pointer border-none bg-transparent py-0.5"
            >
              <img
                src="/acm-logo.png"
                alt="ACM NMIET Student Chapter"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all cursor-pointer border-none ${
                      isActive
                        ? 'text-[#2563EB] bg-blue-50/90 font-bold'
                        : 'text-[#555555] hover:text-[#111111] hover:bg-[#F1F0EC]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden sm:block">
              <button
                onClick={() => handleClick('contact')}
                className="btn-primary text-[13px] py-2 px-4 shadow-sm hover:shadow-md transition-all font-bold"
              >
                <span>Join ACM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 text-[#64748B] hover:text-[#0C1220] cursor-pointer border-none bg-transparent rounded-lg hover:bg-[#F1F0EC]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </GlassSurface>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-1.5 bg-white/95 backdrop-blur-xl border border-[#E5E5E0] rounded-xl p-3 shadow-lg">
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`px-3 py-2.5 rounded-lg text-left text-sm font-medium cursor-pointer border-none transition-colors ${
                    activeSection === item.id
                      ? 'text-[#2563EB] bg-blue-50/80'
                      : 'text-[#64748B] hover:bg-[#F1F0EC]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-[#E5E5E0]">
                <button
                  onClick={() => handleClick('contact')}
                  className="w-full btn-primary justify-center text-sm py-2.5"
                >
                  Join ACM Chapter
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

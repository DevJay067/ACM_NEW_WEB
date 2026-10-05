import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import './AccordionGallery.css';

export interface AccordionItem {
  image: string;
  label: string;
  link?: string;
  category?: string;
  date?: string;
}

export interface AccordionGalleryProps {
  items: AccordionItem[];
  orientation?: 'horizontal' | 'vertical';
  trigger?: 'hover' | 'click';
  expandRatio?: number;
  height?: number | string;
  radius?: number;
  grayscale?: boolean;
  showLabels?: boolean;
  accentColor?: string;
  className?: string;
}

export const AccordionGallery: React.FC<AccordionGalleryProps> = ({
  items,
  orientation = 'horizontal',
  trigger = 'hover',
  expandRatio = 0.5,
  height = 480,
  radius = 16,
  grayscale = true,
  showLabels = true,
  accentColor = '#3b82f6',
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((el, idx) => {
      if (!el) return;
      const isExpanded = idx === activeIndex;
      const flexValue = isExpanded ? expandRatio * 10 : 1;

      gsap.to(el, {
        flex: flexValue,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    });
  }, [activeIndex, expandRatio]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  const containerStyle: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
    ['--accent-color' as any]: accentColor,
  };

  return (
    <div
      ref={containerRef}
      className={`accordion-gallery accordion-gallery--${orientation} ${className}`}
      style={containerStyle}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        const eventProps =
          trigger === 'hover'
            ? { onMouseEnter: () => handleInteraction(index) }
            : { onClick: () => handleInteraction(index) };

        return (
          <div
            key={index}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            {...eventProps}
            className={`accordion-item ${grayscale ? 'accordion-item--grayscale' : ''} ${
              isActive ? 'accordion-item--active' : ''
            }`}
            style={{ borderRadius: `${radius}px` }}
          >
            <div className="accordion-item__accent-bar" />
            <img
              src={item.image}
              alt={item.label}
              className="accordion-item__image"
              loading="lazy"
            />
            <div className="accordion-item__overlay" />

            {showLabels && (
              <div className="accordion-item__content">
                {item.category && (
                  <div className="accordion-item__badge">
                    {item.date ? `${item.category} • ${item.date}` : item.category}
                  </div>
                )}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="accordion-item__label">{item.label}</h3>
                  <a
                    href={item.link || '#'}
                    className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-[#0C1220] transition-colors shrink-0"
                    aria-label={`View ${item.label}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionGallery;

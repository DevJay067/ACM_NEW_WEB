import React, { useState, useEffect, useRef } from 'react';
import './Loader.css';

interface LoaderProps {
  onExitStart?: () => void;
  onComplete?: () => void;
}

const LOG_STEPS = [
  { threshold: 0, text: '+ SYSTEM BOOT' },
  { threshold: 18, text: '[0.012s] INITIALIZING ACM KERNEL...' },
  { threshold: 42, text: '[0.084s] MOUNTING NMIET CHAPTER MODULES...' },
  { threshold: 68, text: '[0.192s] ESTABLISHING AI AGENT PIPELINE...' },
  { threshold: 88, text: '[0.340s] VERIFIED // ENTERING PLATFORM' },
];

export const Loader: React.FC<LoaderProps> = ({ onExitStart, onComplete }) => {
  const checkShouldSkip = () => {
    if (typeof window === 'undefined') return false;
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('noloader') === '1' || searchParams.get('noloader') === 'true') return true;
    if (searchParams.get('loader') === '1' || searchParams.get('loader') === 'true') return false;
    if ((import.meta as any).env?.DEV) return false;
    return sessionStorage.getItem('acm_loader_seen') === 'true';
  };

  const [shouldSkip] = useState(checkShouldSkip);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(shouldSkip);

  const assetsLoadedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Lock scroll during boot
  useEffect(() => {
    if (shouldSkip) {
      onExitStart?.();
      onComplete?.();
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [shouldSkip, onExitStart, onComplete]);

  // Asset loading state check
  useEffect(() => {
    if (shouldSkip) return;

    const checkAssets = () => {
      if (document.readyState === 'complete') {
        assetsLoadedRef.current = true;
      }
    };

    if (document.readyState === 'complete') {
      assetsLoadedRef.current = true;
    } else {
      window.addEventListener('load', checkAssets);
    }

    return () => {
      window.removeEventListener('load', checkAssets);
    };
  }, [shouldSkip]);

  // Progress counter RAF loop (0% -> 100%)
  useEffect(() => {
    if (shouldSkip) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsExiting(true);
        onExitStart?.();
        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem('acm_loader_seen', 'true');
          onComplete?.();
        }, 200);
      }, 100);
      return () => clearTimeout(timer);
    }

    const duration = 2200; // ~2.2s fast boot

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      let val = Math.min(100, (elapsed / duration) * 100);
      val = 100 * (1 - Math.pow(1 - val / 100, 2.2));

      if (val >= 90 && !assetsLoadedRef.current) {
        val = 90;
      }

      setProgress(val);

      if (val < 100) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsExiting(true);
          onExitStart?.();

          setTimeout(() => {
            setIsFinished(true);
            document.body.style.overflow = '';
            sessionStorage.setItem('acm_loader_seen', 'true');

            if (typeof window !== 'undefined') {
              window.dispatchEvent(new Event('resize'));
            }

            onComplete?.();
          }, 500);
        }, 200);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [shouldSkip, onExitStart, onComplete]);

  if (isFinished || shouldSkip) {
    return null;
  }

  const roundedPercent = Math.min(100, Math.floor(progress));
  const paddedCounter = String(roundedPercent).padStart(3, '0') + '%';

  const visibleLogs = LOG_STEPS.filter((step) => progress >= step.threshold);
  const activeLogIndex = visibleLogs.length - 1;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="High-Tech System Boot Loading Screen"
      className={`acm-boot-overlay ${isExiting ? 'acm-boot-exit' : ''}`}
    >
      {/* Background Matrix Grid Overlay */}
      <div className="acm-boot-grid" />
      <div className="acm-boot-scanline" />

      {/* Top Header Row */}
      <div className="acm-boot-header">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#38BDF8]">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span>SYSTEM BOOT // ONLINE</span>
        </div>
        <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
          EST. 2025 // NMIET CHAPTER
        </div>
      </div>

      {/* Main Left Log Console */}
      <div className="acm-boot-console">
        <div className="acm-boot-logs space-y-2">
          {visibleLogs.map((log, idx) => {
            const isActive = idx === activeLogIndex;
            return (
              <div
                key={idx}
                className={`font-mono text-xs sm:text-sm md:text-base tracking-wider flex items-center gap-2 transition-all duration-200 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-400 font-medium opacity-80'
                }`}
              >
                <span className={isActive ? 'text-[#38BDF8]' : 'text-slate-500'}>
                  {idx === 0 ? '●' : '›'}
                </span>
                <span>{log.text}</span>
                {isActive && roundedPercent < 100 && (
                  <span className="inline-block w-2 h-4 bg-[#38BDF8] animate-pulse ml-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Horizontal Progress Fill Line Under Console */}
        <div className="acm-boot-line-track">
          <div
            className="acm-boot-line-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="acm-boot-footer">
        <div className="text-xs font-mono uppercase tracking-widest text-slate-400 max-w-xs leading-relaxed">
          ACM NMIET STUDENT CHAPTER
          <br />
          <span className="text-[#38BDF8] font-semibold">INNOVATING FOR THE FUTURE // NMIET</span>
        </div>

        {/* Fixed 3-Digit Percentage Counter (000% -> 100%) in Bottom Right */}
        <div className="acm-boot-counter" aria-hidden="true">
          {paddedCounter}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import './Loader.css';

interface LoaderProps {
  onExitStart?: () => void;
  onComplete?: () => void;
}

const STATUS_MESSAGES = [
  "INITIALIZING ACM NMIET KERNEL",
  "RESOLVING CHAPTER MODULES & ASSETS",
  "ESTABLISHING AI AGENT PIPELINE",
  "VERIFIED // ENTERING PLATFORM"
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

  // Asset loading listener
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

  // Progress RAF loop (0% -> 100%)
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
        }, 150);
      }, 50);
      return () => clearTimeout(timer);
    }

    const duration = 2200; // ~2.2s clean boot timing

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
          }, 450);
        }, 250);
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

  // Calculate current status message index
  let msgIndex = 0;
  if (progress >= 85) {
    msgIndex = 3;
  } else if (progress >= 55) {
    msgIndex = 2;
  } else if (progress >= 25) {
    msgIndex = 1;
  }
  const currentMsg = STATUS_MESSAGES[msgIndex];

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="System Boot Loading Screen"
      className={`acm-simple-loader-overlay ${isExiting ? 'exiting' : ''}`}
    >
      {/* Top Header Labels */}
      <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#777777] z-10 w-full">
        <span>ACM NMIET STUDENT CHAPTER</span>
        <span>EST. 2025 · CHAPTER BOOT</span>
      </div>

      {/* Center-Left Status Console */}
      <div className="my-auto max-w-3xl w-full text-left z-10 py-8 px-1 sm:px-2">
        {/* Pulsing Dot + Label */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2563EB] tracking-widest uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span>SYSTEM BOOT</span>
        </div>

        {/* Dynamic Single Status Message */}
        <div className="min-h-[2.5rem] flex items-center mb-5">
          <h1 className="font-mono text-xl sm:text-2xl md:text-3xl font-extrabold text-[#111111] tracking-tight uppercase leading-snug">
            {currentMsg}
          </h1>
        </div>

        {/* Thin ACM Blue Progress Fill Line */}
        <div className="w-44 sm:w-60 h-[2px] bg-[#E5E5E0] rounded-full overflow-hidden relative">
          <div
            className="h-full bg-[#2563EB] transition-all duration-100 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Footer Labels */}
      <div className="flex justify-between items-end text-[10px] sm:text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#777777] z-10 w-full">
        <span>INNOVATING FOR THE FUTURE // NMIET</span>

        {/* Bottom-Right 3-Digit Percentage Counter */}
        <div
          aria-hidden="true"
          className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] leading-none"
        >
          {paddedCounter}
        </div>
      </div>
    </div>
  );
};

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export type JobItem = {
  id: string;
  title: string;
  type: string;
  location: string;
  startDate: string;
  description: string;
  href: string;
};

export interface JobLoopProps {
  jobs: JobItem[];
  speed?: number;
  direction?: 'left' | 'right';
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  cardWidth?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, dependencies);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  hoverSpeed: number | undefined
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, hoverSpeed]);
};

export const JobLoop = React.memo<JobLoopProps>(
  ({
    jobs,
    speed = 60,
    direction = 'left',
    gap = 24,
    pauseOnHover = true,
    hoverSpeed,
    cardWidth = 380,
    className,
    style
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLDivElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      
      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [jobs, gap, cardWidth]);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, effectiveHoverSpeed);

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderJobCard = useCallback((job: JobItem, key: React.Key) => {
      return (
        <div
          key={key}
          className="flex-shrink-0"
          style={{ width: toCssLength(cardWidth) }}
        >
          <div className="group bg-white border border-slate-200 hover:border-[#921bb2] rounded-lg p-6 transition-colors flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#921bb2] to-[#cd20b2] flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#921bb2]/10 text-[#921bb2] border border-[#921bb2]/20">
                {job.type}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              {job.title}
            </h3>
            <p className="text-slate-600 text-sm mb-4 flex-grow" style={{ lineHeight: '1.7' }}>
              {job.description}
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <MapPin className="w-4 h-4 text-[#921bb2] flex-shrink-0" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm">
                <Calendar className="w-4 h-4 text-[#921bb2] flex-shrink-0" />
                <span>{job.startDate}</span>
              </div>
            </div>
            <a
              href={job.href}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-[#921bb2] to-[#cd20b2] text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-sm mt-auto text-center block"
            >
              Details ansehen
            </a>
          </div>
        </div>
      );
    }, [cardWidth]);

    const jobLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <div
            key={`copy-${copyIndex}`}
            className="flex"
            style={{ gap: `${gap}px` }}
            ref={copyIndex === 0 ? seqRef : undefined}
            aria-hidden={copyIndex > 0}
          >
            {jobs.map((job, jobIndex) => renderJobCard(job, `${copyIndex}-${jobIndex}`))}
            {/* Zusätzlicher Abstand am Ende für nahtlosen Übergang zwischen letztem und erstem Card */}
            <div style={{ width: `${gap}px`, flexShrink: 0 }} />
          </div>
        )),
      [copyCount, jobs, renderJobCard, gap]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: '100%',
        overflow: 'hidden',
        ...style
      }),
      [style]
    );

    return (
      <div
        ref={containerRef}
        className={`jobloop ${className || ''}`}
        style={containerStyle}
        role="region"
        aria-label="Offene Jobs"
      >
        <div
          className="jobloop__track flex"
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: 'transform' }}
        >
          {jobLists}
        </div>
      </div>
    );
  }
);

JobLoop.displayName = 'JobLoop';

export default JobLoop;

import React, { useState, useRef } from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
  deliverables?: string[];
  badge?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  tags = [],
  deliverables = [],
  badge,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-card-subtle)',
        borderColor: 'var(--border-main)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {/* Ambient Spotlight following cursor */}
      {mousePos.active && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent-subtle), transparent 80%)`,
          }}
        />
      )}

      {/* Top Header */}
      <div className="flex flex-col gap-3 relative z-10">
        <div className="flex items-center justify-between gap-3">
          {/* Animated Icon Box */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl border shadow-inner transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: 'var(--bg-card-inner)',
              borderColor: 'var(--border-main)',
              color: 'var(--accent-primary)',
            }}
          >
            {icon}
          </div>

          {badge && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium font-mono bg-indigo-500/10 text-[var(--accent-primary)] border border-indigo-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="font-semibold text-lg text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-primary)] transition-colors">
          {title}
        </h4>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Pills */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium text-[var(--tag-text)] border px-2.5 py-0.5 rounded-md transition-colors hover:border-[var(--accent-primary)]"
                style={{
                  backgroundColor: 'var(--tag-bg)',
                  borderColor: 'var(--tag-border)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Expandable Key Highlights */}
      {deliverables.length > 0 && (
        <div className="mt-4 pt-3 border-t border-[var(--border-main)] relative z-10">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-xs font-medium text-[var(--accent-primary)] hover:opacity-80 transition-opacity cursor-pointer py-1"
          >
            <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights & Impact'}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="6 9 12 15 18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {isExpanded && (
            <ul className="mt-2.5 space-y-1.5 text-xs text-[var(--text-secondary)] font-light pl-2 border-l border-[var(--accent-primary)]/40">
              {deliverables.map((item, dIdx) => (
                <li key={dIdx} className="flex items-start gap-1.5 leading-relaxed">
                  <span className="text-[var(--accent-primary)] font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

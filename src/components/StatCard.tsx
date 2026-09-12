import React, { useState, useEffect, useRef } from 'react';

interface StatCardProps {
  value?: string;
  numericTarget?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
  accentColor?: string;
}

export default function StatCard({
  value,
  numericTarget,
  suffix = '+',
  prefix = '',
  label,
  sublabel,
  icon,
  accentColor = 'var(--accent-primary)',
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (numericTarget === undefined) return;
    let start = 0;
    const duration = 1200; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = numericTarget / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericTarget]);

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

  const displayValue =
    numericTarget !== undefined ? `${prefix}${count}${suffix}` : value;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer overflow-hidden text-center min-h-[155px]"
      style={{
        backgroundColor: 'var(--bg-card-subtle)',
        borderColor: 'var(--border-main)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {/* Ambient Spotlight */}
      {mousePos.active && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, var(--accent-subtle), transparent 80%)`,
          }}
        />
      )}

      {/* Top Icon Container */}
      {icon && (
        <div
          className="flex items-center justify-center w-9 h-9 rounded-xl border transition-transform duration-300 group-hover:scale-110 shadow-inner"
          style={{
            backgroundColor: 'var(--bg-card-inner)',
            borderColor: 'var(--border-main)',
          }}
        >
          {icon}
        </div>
      )}

      {/* Main Counter Value */}
      <div className="my-1">
        <h4
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '28px',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: '1.1em',
            color: 'var(--text-primary)',
          }}
          className="group-hover:text-[var(--accent-primary)] transition-colors"
        >
          {displayValue}
        </h4>
      </div>

      {/* Labels */}
      <div>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            lineHeight: '1.3em',
          }}
        >
          {label}
        </p>
        {sublabel && (
          <span className="text-[11px] text-[var(--text-muted)] font-light mt-0.5 block">
            {sublabel}
          </span>
        )}
      </div>

      {/* Bottom Accent Bar */}
      <div
        className="w-8 h-1 rounded-full opacity-40 group-hover:w-16 group-hover:opacity-100 transition-all duration-300 mt-2"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}

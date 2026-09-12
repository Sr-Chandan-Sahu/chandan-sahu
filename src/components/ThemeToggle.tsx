import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  size?: 'sm' | 'md';
  className?: string;
}

export default function ThemeToggle({ size = 'md', className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const isSmall = size === 'sm';
  const width = isSmall ? '52px' : '58px';
  const height = isSmall ? '28px' : '30px';
  const knobSize = isSmall ? '22px' : '24px';
  const knobOffset = isSmall ? '3px' : '3px';
  const knobTravel = isSmall ? '24px' : '28px';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center cursor-pointer select-none rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 active:scale-95 shrink-0 ${className}`}
      style={{
        width,
        height,
        backgroundColor: isDark ? '#38bdf8' : '#f59e0b',
        boxShadow: isDark
          ? '0 0 12px rgba(56, 189, 248, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.15)'
          : '0 0 12px rgba(245, 158, 11, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.15)',
        padding: 0,
        border: 'none',
      }}
    >
      {/* Left Icon (Moon for Dark Mode) */}
      <div
        className="absolute flex items-center justify-center pointer-events-none transition-opacity duration-200"
        style={{
          left: isSmall ? '6px' : '7px',
          width: '16px',
          height: '16px',
          opacity: isDark ? 1 : 0,
        }}
      >
        <svg
          width={isSmall ? '13' : '14'}
          height={isSmall ? '13' : '14'}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>

      {/* Right Icon (Sun for Light Mode) */}
      <div
        className="absolute flex items-center justify-center pointer-events-none transition-opacity duration-200"
        style={{
          right: isSmall ? '6px' : '7px',
          width: '16px',
          height: '16px',
          opacity: isDark ? 0 : 1,
        }}
      >
        <svg
          width={isSmall ? '14' : '15'}
          height={isSmall ? '14' : '15'}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>

      {/* Sliding White Circular Knob */}
      <div
        className="rounded-full bg-white transition-transform duration-300 ease-in-out pointer-events-none"
        style={{
          width: knobSize,
          height: knobSize,
          transform: isDark ? `translateX(${knobTravel})` : `translateX(${knobOffset})`,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25), 0 1px 2px rgba(0, 0, 0, 0.15)',
        }}
      />
    </button>
  );
}

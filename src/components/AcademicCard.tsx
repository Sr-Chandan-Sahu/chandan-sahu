import React from 'react';

interface AcademicCardProps {
  logoText: string;
  institution: string;
  degree: string;
  year?: string;
  grade?: string;
}

export default function AcademicCard({
  logoText,
  institution,
  degree,
  year,
  grade,
}: AcademicCardProps) {
  return (
    <div
      className="flex flex-row items-start hover:border-[var(--accent-primary)] transition-all duration-200"
      style={{
        backgroundColor: 'var(--bg-card-subtle)',
        border: '1px solid var(--border-main)',
        borderRadius: '16px',
        padding: '16px',
        gap: '14px',
        width: '100%',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          border: '2px solid var(--accent-border)',
          backgroundColor: 'var(--accent-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '18px',
          color: 'var(--accent-primary)',
          flexShrink: 0,
        }}
      >
        {logoText}
      </div>
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex items-center justify-between flex-wrap gap-1">
          <h5
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: '1.4em',
              color: 'var(--text-primary)',
            }}
          >
            {institution}
          </h5>
          {year && (
            <span className="text-xs text-[var(--accent-primary)] font-medium font-mono">{year}</span>
          )}
        </div>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '13px',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: '1.6em',
            color: 'var(--text-secondary)',
          }}
        >
          {degree}
        </p>
        {grade && (
          <span className="text-xs text-emerald-500 font-light mt-0.5">{grade}</span>
        )}
      </div>
    </div>
  );
}

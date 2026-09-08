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
      className="flex flex-row items-start hover:border-[rgb(94,98,161)] transition-all duration-200"
      style={{
        backgroundColor: 'rgb(34, 34, 36)',
        border: '1px solid rgb(43, 43, 44)',
        borderRadius: '16px',
        padding: '16px',
        gap: '14px',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          border: '2px solid rgba(133, 138, 227, 0.4)',
          backgroundColor: 'rgba(133, 138, 227, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '18px',
          color: 'rgb(133, 138, 227)',
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
              color: 'rgb(243, 243, 252)',
            }}
          >
            {institution}
          </h5>
          {year && (
            <span className="text-xs text-[rgb(133,138,227)] font-medium font-mono">{year}</span>
          )}
        </div>
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '13px',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: '1.6em',
            color: 'rgb(185, 185, 186)',
          }}
        >
          {degree}
        </p>
        {grade && (
          <span className="text-xs text-[rgb(74,222,128)] font-light mt-0.5">{grade}</span>
        )}
      </div>
    </div>
  );
}

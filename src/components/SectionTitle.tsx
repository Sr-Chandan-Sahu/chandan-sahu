import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Purple accent bar */}
      <div
        style={{
          width: '80px',
          height: '4px',
          borderRadius: '2px',
          background: 'rgb(133, 138, 227)',
          flexShrink: 0,
        }}
      />
      <h2
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '32px',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          lineHeight: '1.1em',
          color: 'rgb(243, 243, 252)',
        }}
      >
        {title}
      </h2>
    </div>
  );
}

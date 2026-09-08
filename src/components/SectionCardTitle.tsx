import React from 'react';

interface SectionCardTitleProps {
  title: string;
}

export default function SectionCardTitle({ title }: SectionCardTitleProps) {
  return (
    <h3
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '22px',
        fontWeight: 600,
        letterSpacing: '0em',
        lineHeight: '1.4em',
        color: 'rgb(243, 243, 252)',
      }}
    >
      {title}
    </h3>
  );
}

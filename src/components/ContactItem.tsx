import React from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <p
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '11px',
          fontWeight: 400,
          letterSpacing: '0.04em',
          lineHeight: '1.4em',
          color: 'rgb(152, 152, 152)',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '13px',
          fontWeight: 400,
          letterSpacing: '-0.01em',
          lineHeight: '1.4em',
          color: 'rgb(243, 243, 252)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {value}
      </p>
    </>
  );

  return (
    <div className="flex flex-row items-center gap-3 w-full">
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{
          width: '38px',
          height: '38px',
          backgroundColor: 'rgb(30, 30, 31)',
          border: '1px solid rgb(43, 43, 44)',
          borderRadius: '10px',
        }}
      >
        {icon}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col flex-1 min-w-0 hover:text-[rgb(133,138,227)] transition-colors"
          style={{ textDecoration: 'none' }}
        >
          {content}
        </a>
      ) : (
        <div className="flex flex-col flex-1 min-w-0">{content}</div>
      )}
    </div>
  );
}

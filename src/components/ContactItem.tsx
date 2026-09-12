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
          color: 'var(--text-muted)',
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
          color: 'var(--text-primary)',
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
          backgroundColor: 'var(--bg-card-inner)',
          border: '1px solid var(--border-main)',
          borderRadius: '10px',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
      >
        {icon}
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col flex-1 min-w-0 hover:text-[var(--accent-primary)] transition-colors"
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

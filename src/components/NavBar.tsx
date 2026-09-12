import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

// Crisp SVG Icons for Navigation items
const AboutIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ResumeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ProjectsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SkillsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const CertificationsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const ContactIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const navItems = [
  { label: 'About', id: 'about', icon: <AboutIcon /> },
  { label: 'Resume', id: 'resume', icon: <ResumeIcon /> },
  { label: 'Projects', id: 'projects', icon: <ProjectsIcon /> },
  { label: 'Skills', id: 'skills', icon: <SkillsIcon /> },
  { label: 'Certifications', id: 'certifications', icon: <CertificationsIcon /> },
  { label: 'Contact', id: 'contact', icon: <ContactIcon /> },
];

interface NavBarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function NavBar({ activeSection, onNavClick }: NavBarProps) {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP NAVBAR (Top Header Bar with Text labels + Theme Toggle) */}
      {/* ========================================================================= */}
      <nav className="hidden lg:block w-full">
        <div
          className="flex flex-row items-center justify-between w-full overflow-x-auto no-scrollbar gap-2"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '24px',
            border: '1px solid var(--border-main)',
            boxShadow: 'var(--card-shadow)',
            padding: '8px 16px',
            transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          }}
        >
          {/* Navigation Tab Pills */}
          <div className="flex items-center gap-1.5 flex-1 justify-around">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className="px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap text-sm font-medium flex items-center justify-center hover:text-[var(--accent-primary)]"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    border: 'none',
                    backgroundColor: isActive ? 'var(--accent-subtle)' : 'transparent',
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    boxShadow: isActive ? 'inset 0 0 0 1px var(--accent-border)' : 'none',
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Divider & Theme Toggle Switch */}
          <div className="flex items-center gap-3 pl-2 border-l border-[var(--border-main)] shrink-0">
            <ThemeToggle size="sm" />
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 2. MOBILE ANDROID TABBAR NAVIGATION (Fixed Bottom Bar with Icons Only) */}
      {/* ========================================================================= */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around px-2 pt-2"
        style={{
          backgroundColor: 'var(--mobile-nav-bg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-subtle)',
          boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.25)',
          paddingBottom: 'max(10px, env(safe-area-inset-bottom, 10px))',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
        aria-label="Mobile Navigation"
      >
        <div className="flex items-center justify-between w-full max-w-md mx-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  // Smoothly scroll window to top when changing section
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-250 cursor-pointer active:scale-90 ${
                  isActive
                    ? 'text-[var(--accent-primary)] bg-[var(--accent-subtle)] ring-1 ring-[var(--accent-border)] shadow-[0_0_14px_rgba(99,102,241,0.2)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                aria-label={item.label}
                title={item.label}
              >
                <div
                  className={`transition-transform duration-200 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}
                >
                  {item.icon}
                </div>

                {/* Subtle Android active dot indicator */}
                {isActive && (
                  <span
                    className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_6px_var(--accent-primary)]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

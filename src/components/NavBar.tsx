import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

// High-precision modern SVG Icons for Navigation items
const AboutIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={active ? '2.3' : '1.8'}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ResumeIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={active ? '2.3' : '1.8'}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ProjectsIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={active ? '2.3' : '1.8'}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const SkillsIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={active ? '2.3' : '1.8'}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
  </svg>
);

const CertificationsIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={active ? '2.3' : '1.8'}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ContactIcon = ({ active }: { active?: boolean }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={active ? '2.3' : '1.8'}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const navItems = [
  {
    label: 'About',
    shortLabel: 'About',
    id: 'about',
    icon: (active: boolean) => <AboutIcon active={active} />,
  },
  {
    label: 'Resume',
    shortLabel: 'Resume',
    id: 'resume',
    icon: (active: boolean) => <ResumeIcon active={active} />,
  },
  {
    label: 'Projects',
    shortLabel: 'Projects',
    id: 'projects',
    icon: (active: boolean) => <ProjectsIcon active={active} />,
  },
  {
    label: 'Skills',
    shortLabel: 'Skills',
    id: 'skills',
    icon: (active: boolean) => <SkillsIcon active={active} />,
  },
  {
    label: 'Certifications',
    shortLabel: 'Certs',
    id: 'certifications',
    icon: (active: boolean) => <CertificationsIcon active={active} />,
  },
  {
    label: 'Contact',
    shortLabel: 'Contact',
    id: 'contact',
    icon: (active: boolean) => <ContactIcon active={active} />,
  },
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
      {/* 2. MOBILE MODERN LIQUID GLASS APP TAB BAR (Floating Bottom Island Dock) */}
      {/* ========================================================================= */}
      <nav
        className="lg:hidden fixed bottom-3 sm:bottom-4 inset-x-2.5 sm:inset-x-4 z-40 max-w-[460px] mx-auto select-none"
        aria-label="Mobile Navigation"
        style={{
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div className="liquid-glass-dock relative flex items-center justify-between px-1.5 py-1.5 rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-300">
          {/* Top Edge Specular Reflection Sheen (Simulating Optical Glass Edge Light) */}
          <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/25 to-transparent pointer-events-none z-10" />

          {/* Ambient Liquid Glow behind active tab */}
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(133,138,227,0.15),transparent_70%)]" />

          {/* Liquid Glass Tabs */}
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
                className={`relative flex-1 flex flex-col items-center justify-center py-1.5 px-0.5 rounded-[18px] transition-all duration-300 cursor-pointer active:scale-90 group ${
                  isActive
                    ? 'liquid-glass-tab-active text-[var(--accent-primary)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--liquid-tab-hover)]'
                }`}
                aria-label={item.label}
                title={item.label}
              >
                {/* Icon with Fluid Micro-motion and Liquid Specular Drop */}
                <div
                  className={`transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'scale-110 -translate-y-0.5 filter drop-shadow-[0_2px_8px_var(--liquid-tab-active-glow)]'
                      : 'group-hover:scale-105'
                  }`}
                >
                  {item.icon(isActive)}
                </div>

                {/* Mobile App Micro Label */}
                <span
                  className={`text-[9.5px] sm:text-[10px] tracking-tight leading-none mt-1 transition-all duration-300 ${
                    isActive
                      ? 'text-[var(--accent-primary)] font-semibold'
                      : 'text-[var(--text-muted)] font-normal group-hover:text-[var(--text-secondary)]'
                  }`}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {item.shortLabel}
                </span>

                {/* Liquid Active Droplet Indicator */}
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 w-3.5 h-[2px] rounded-full bg-[var(--accent-primary)] shadow-[0_0_8px_var(--accent-primary)]"
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

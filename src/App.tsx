import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import ThemeToggle from '@/components/ThemeToggle';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import myProfileImg from '@/assets/my_profile.jfif';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Close profile modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isProfileOpen) {
        setIsProfileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProfileOpen]);

  // Lock body scroll when profile modal is open on mobile
  useEffect(() => {
    if (isProfileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isProfileOpen]);

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        padding: '0 16px',
        transition: 'background-color 0.25s ease, color 0.25s ease',
      }}
    >
      {/* ========================================================================= */}
      {/* MOBILE TOP HEADER BAR (with Theme Toggle & Profile on Top Right) */}
      {/* ========================================================================= */}
      <header
        className="lg:hidden w-full max-w-[1200px] flex items-center justify-between py-3.5 px-1 border-b sticky top-0 z-30"
        style={{
          backgroundColor: 'var(--header-bg)',
          borderColor: 'var(--border-subtle)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
      >
        {/* Branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-[var(--text-primary)] leading-tight">
              Chandan Sahu
            </span>
            <span className="text-[11px] text-[var(--accent-primary)] font-normal leading-tight">
              Full Stack Engineer
            </span>
          </div>
        </div>

        {/* Top Right Controls: Theme Toggle + Profile Button */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle size="sm" />

          <button
            onClick={() => setIsProfileOpen(true)}
            className="relative flex items-center justify-center w-8 h-8 rounded-full border border-[var(--accent-primary)] transition-all duration-200 active:scale-90 hover:scale-105 shadow-sm overflow-hidden cursor-pointer shrink-0"
            style={{
              backgroundColor: 'var(--bg-card)',
              boxShadow: '0 0 8px var(--accent-subtle)',
            }}
            aria-label="View Profile & Contact Info"
            title="View Profile & Contact Info"
          >
            <img
              src={myProfileImg}
              alt="Chandan Sahu Profile"
              className="w-full h-full object-cover object-top"
            />
          </button>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE PROFILE DRAWER / MODAL OVERLAY */}
      {/* ========================================================================= */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsProfileOpen(false)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-t-[28px] sm:rounded-[28px] shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar isMobileModal onClose={() => setIsProfileOpen(false)} />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MAIN CONTAINER (Desktop 2-Column Layout / Mobile Stacked Layout) */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-start w-full max-w-[1200px] gap-6 lg:gap-8 py-4 lg:py-8 pb-28 lg:pb-10">
        {/* DESKTOP LEFT SIDEBAR (Sticky on lg screens, hidden on mobile) */}
        <aside className="hidden lg:block w-[320px] xl:w-[340px] flex-shrink-0 lg:sticky lg:top-8">
          <Sidebar />
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Navigation (Desktop Top Bar with ThemeToggle + Mobile Bottom Android TabBar) */}
          <NavBar activeSection={activeSection} onNavClick={setActiveSection} />

          {/* Dynamic Section Views */}
          <div className="w-full">
            {activeSection === 'about' && <AboutSection />}
            {activeSection === 'resume' && <ResumeSection />}
            {activeSection === 'projects' && <ProjectsSection />}
            {activeSection === 'skills' && <SkillsSection />}
            {activeSection === 'certifications' && <CertificationsSection />}
            {activeSection === 'contact' && <ContactSection />}
          </div>
        </main>
      </div>
    </div>
  );
}

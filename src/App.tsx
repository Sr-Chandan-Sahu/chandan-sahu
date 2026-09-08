import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
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
        backgroundColor: 'rgb(21, 21, 22)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Poppins, sans-serif',
        padding: '0 16px',
      }}
    >
      {/* ========================================================================= */}
      {/* MOBILE TOP HEADER BAR (with Profile Icon on Top Right of each screen) */}
      {/* ========================================================================= */}
      <header className="lg:hidden w-full max-w-[1200px] flex items-center justify-between py-4 pt-5 pb-3 border-b border-[rgb(38,38,40)] sticky top-0 bg-[rgb(21,21,22)]/95 backdrop-blur-md z-30">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <div className="flex flex-col">
            <span className="font-semibold text-base text-gray-100 leading-tight">
              Chandan Sahu
            </span>
            <span className="text-[11px] text-[rgb(133,138,227)] font-light leading-tight">
              Full Stack Engineer
            </span>
          </div>
        </div>

        {/* Profile Button on Top Right */}
        <button
          onClick={() => setIsProfileOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgb(30,30,32)] border border-[rgba(133,138,227,0.35)] hover:border-[rgb(133,138,227)] transition-all duration-200 active:scale-95 shadow-md shadow-black/40 group cursor-pointer"
          aria-label="View Profile & Contact Info"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[rgb(133,138,227)] shadow-sm shrink-0">
            <img
              src={myProfileImg}
              alt="Chandan Sahu Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="text-xs text-gray-200 font-medium group-hover:text-[rgb(133,138,227)]">
            Profile
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[rgb(133,138,227)]"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </header>

      {/* ========================================================================= */}
      {/* MOBILE PROFILE DRAWER / MODAL OVERLAY */}
      {/* ========================================================================= */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsProfileOpen(false)}
        >
          <div
            className="w-full max-w-lg max-h-[90vh] overflow-hidden rounded-t-[28px] sm:rounded-[28px] shadow-2xl animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar isMobileModal onClose={() => setIsProfileOpen(false)} />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MAIN CONTAINER (Desktop 2-Column Layout / Mobile Stacked Layout) */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-start w-full max-w-[1200px] gap-6 lg:gap-8 py-4 lg:py-10 pb-24 lg:pb-10">
        {/* DESKTOP LEFT SIDEBAR (Sticky on lg screens, hidden on mobile) */}
        <aside className="hidden lg:block w-[320px] xl:w-[340px] flex-shrink-0 lg:sticky lg:top-8">
          <Sidebar />
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Navigation (Desktop Top Bar + Mobile Bottom Android TabBar) */}
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

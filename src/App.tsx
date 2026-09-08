import { useState } from 'react';
import NavBar from '@/components/NavBar';
import ContactItem from '@/components/ContactItem';
import AboutSection from '@/components/AboutSection';
import ResumeSection from '@/components/ResumeSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import myProfileImg from '@/assets/my_profile.jfif';

// SVG Icons with authentic brand colors
const EmailIcon = () => (
  <svg width="20" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 2C20 0.9 19.1 0 18 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L18 16C19.1 16 20 15.1 20 14ZM18 2L10 6.99L2 2ZM18 14L2 14L2 4L10 9L18 4Z"
      fill="#EA4335"
      transform="translate(2 4)"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#0A66C2" />
    <path
      d="M19 19h-2.9v-4.5c0-1.1-.02-2.5-1.5-2.5-1.5 0-1.8 1.2-1.8 2.4V19H9.9V9.5h2.8v1.3h.04c.39-.74 1.34-1.5 2.76-1.5 2.95 0 3.5 1.94 3.5 4.5V19zM6.9 8.2c-.93 0-1.7-.75-1.7-1.7s.76-1.7 1.7-1.7 1.7.76 1.7 1.7-.77 1.7-1.7 1.7zm1.4 10.8H5.4V9.5h2.9V19z"
      fill="#FFFFFF"
    />
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="#EA4335"
    />
  </svg>
);

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const MediumIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const StackOverflowIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <path d="M18.986 21.865v-6.408h2.134V24H1.87v-8.543h2.135v6.408h14.981z" fill="#BCBBBB" />
    <path d="M6.111 19.731h10.68v-2.135H6.111v2.135z" fill="#F48024" />
    <path d="m7.075 13.883 10.134 3.481.693-2.02-10.134-3.482-.693 2.021z" fill="#F48024" />
    <path d="m9.465 8.123 8.832 6.085 1.207-1.758-8.833-6.084-1.206 1.757z" fill="#F48024" />
    <path d="m14.311 2.669-1.745 1.227 6.085 8.833 1.746-1.227-6.086-8.833z" fill="#F48024" />
    <path d="M18.986 0l-1.92 1.025 4.544 9.774 1.92-1.025L18.986 0z" fill="#F48024" />
  </svg>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div
      style={{
        backgroundColor: 'rgb(21, 21, 22)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
        padding: '0 16px',
      }}
    >
      <div
        className="flex flex-col lg:flex-row items-stretch lg:items-start w-full max-w-[1200px] gap-6 lg:gap-8 py-6 lg:py-10"
      >
        {/* LEFT SIDEBAR */}
        <aside
          className="w-full lg:w-[320px] xl:w-[340px] flex-shrink-0 lg:sticky lg:top-8"
        >
          <div
            style={{
              backgroundColor: 'rgb(30, 30, 31)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Profile Section */}
            <div className="flex flex-col items-center gap-3">
              {/* Profile Avatar Container */}
              <div
                style={{
                  width: '100%',
                  height: '260px',
                  borderRadius: '16px',
                  border: '1px solid rgb(43, 43, 44)',
                  overflow: 'hidden',
                  flexShrink: 0,
                  backgroundColor: 'rgb(24, 24, 25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src={myProfileImg}
                  alt="Chandan Sahu"
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Name */}
              <h1
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '24px',
                  fontWeight: 600,
                  letterSpacing: '0em',
                  lineHeight: '1.3em',
                  color: 'rgb(243, 243, 252)',
                  textAlign: 'center',
                  marginTop: '4px',
                }}
              >
                Chandan Sahu
              </h1>

              {/* Title Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                <div
                  style={{
                    backgroundColor: 'rgb(43, 43, 44)',
                    border: '1px solid rgba(133, 138, 227, 0.3)',
                    borderRadius: '8px',
                    padding: '4px 14px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'rgb(243, 243, 252)',
                    }}
                  >
                    Software Engineer
                  </span>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgb(43, 43, 44)',
                    border: '1px solid rgba(133, 138, 227, 0.3)',
                    borderRadius: '8px',
                    padding: '4px 14px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      color: 'rgb(243, 243, 252)',
                    }}
                  >
                    Full Stack Dev
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgb(43, 43, 44)',
                  margin: '4px 0',
                }}
              />
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <ContactItem
                icon={<EmailIcon />}
                label="EMAIL"
                value="chandansahu9054@gmail.com"
                href="mailto:chandansahu9054@gmail.com"
              />

              <ContactItem
                icon={<LinkedInIcon />}
                label="LINKEDIN"
                value="in/sr-chandan-sahu"
                href="https://www.linkedin.com/in/sr-chandan-sahu/"
              />

              <ContactItem
                icon={<LocationIcon />}
                label="LOCATION"
                value="Hyderabad, India"
              />
            </div>

            {/* Social Icons with authentic brand colors & interactive hover states */}
            <div className="flex flex-row items-center justify-around w-full pt-3 border-t border-[rgb(43,43,44)]">
              <a
                href="https://www.linkedin.com/in/sr-chandan-sahu/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgb(34,34,36)] hover:bg-[#0A66C2]/20 border border-[rgb(43,43,44)] hover:border-[#0A66C2] transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Sr-Chandan-Sahu"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgb(34,34,36)] hover:bg-white/15 border border-[rgb(43,43,44)] hover:border-white/50 transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <GithubIcon />
              </a>
              <a
                href="https://medium.com/@coder_chandan"
                target="_blank"
                rel="noopener noreferrer"
                title="Medium Blog"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgb(34,34,36)] hover:bg-emerald-500/20 border border-[rgb(43,43,44)] hover:border-emerald-400 transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <MediumIcon />
              </a>
              <a
                href="https://stackoverflow.com/users/25763701"
                target="_blank"
                rel="noopener noreferrer"
                title="Stack Overflow"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgb(34,34,36)] hover:bg-[#F48024]/20 border border-[rgb(43,43,44)] hover:border-[#F48024] transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <StackOverflowIcon />
              </a>
            </div>

            {/* Glowing orb background effect */}
            <div
              style={{
                position: 'absolute',
                bottom: '-260px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '280px',
                height: '280px',
                borderRadius: '500px',
                background: 'linear-gradient(180deg, rgb(56, 58, 95) 0%, rgb(133, 138, 227) 100%)',
                filter: 'blur(48px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="flex-1 min-w-0 flex flex-col gap-6">
          {/* Navigation */}
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

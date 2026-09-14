import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import SectionCardTitle from '@/components/SectionCardTitle';
import StatCard from '@/components/StatCard';

// Stat Icons
const RepoIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6 6h10" />
    <path d="M6 10h10" />
  </svg>
);

const ExpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const AppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
  </svg>
);

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* About Me Section Card */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-main)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--card-shadow)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <SectionTitle title="About Me" />

        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: '1.7em',
            color: 'var(--text-secondary)',
            textAlign: 'justify',
            position: 'relative',
            zIndex: 1,
          }}
        >
          Hi there! I am <strong className="text-[var(--text-primary)] font-semibold">Chandan Sahu</strong>, a passionate and result-oriented Software Engineer with over 2.5 years of hands-on experience in full-stack web and application development. Based in Hyderabad, India, I specialize in building performant frontend architectures with React, Next.js, and TypeScript, backed by robust backend services using Nest.js, Express, Python, FastAPI, and scalable database systems.
        </p>

        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            lineHeight: '1.7em',
            color: 'var(--text-secondary)',
            textAlign: 'justify',
            position: 'relative',
            zIndex: 1,
          }}
        >
          I thrive on crafting high-impact digital products that bridge elegant user interfaces with dependable, fault-tolerant infrastructure. Constantly learning and evolving, I am deeply invested in Cloud technologies (AWS, GCP), Docker containerization, CI/CD automation, and modern DevOps practices.
        </p>

        {/* Glowing orb background effect (Dark mode only) */}
        <div
          className="dark:block hidden"
          style={{
            position: 'absolute',
            bottom: '-263px',
            left: '50%',
            transform: 'translateX(-50%) scale(1.145)',
            width: '279px',
            height: '279px',
            borderRadius: '500px',
            background: 'linear-gradient(180deg, rgb(56, 58, 95) 0%, var(--accent-primary) 100%)',
            filter: 'blur(48px)',
            opacity: 'var(--glow-opacity)',
            display: 'var(--glow-display)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Career & GitHub Stars Section */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-main)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: 'var(--card-shadow)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <SectionCardTitle title="Engineering Highlights" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          <StatCard
            numericTarget={28}
            suffix="+"
            label="GitHub Repos"
            sublabel="Open Source & Apps"
            icon={<RepoIcon />}
            accentColor="#60A5FA"
          />
          <StatCard
            numericTarget={3}
            suffix="+ Yrs"
            label="Experience"
            sublabel="Full-Stack Dev"
            icon={<ExpIcon />}
            accentColor="#34D399"
          />
          <StatCard
            numericTarget={44}
            suffix="+"
            label="GitHub Stars"
            sublabel="Community Stars"
            icon={<StarIcon />}
            accentColor="#FBBF24"
          />
          <StatCard
            numericTarget={15}
            suffix="+"
            label="Production Apps"
            sublabel="Web & Cloud"
            icon={<AppIcon />}
            accentColor="#A78BFA"
          />
        </div>
      </div>
    </div>
  );
}

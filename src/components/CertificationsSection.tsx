import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import SectionCardTitle from '@/components/SectionCardTitle';

import softwareEngineerImg from '@/assets/certificates/software_engineer.png';
import frontendDeveloperImg from '@/assets/certificates/frontend_developer.png';
import sqlImg from '@/assets/certificates/SQL.png';
import pythonImg from '@/assets/certificates/python.png';

// HackerRank Brand Logo
const HackerRankIcon = () => (
  <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="shrink-0 rounded-md">
    <rect width="32" height="32" rx="7" fill="#00EA64" />
    <path
      d="M18.8 11.5h-1.9v3.6h-3.8v-3.6h-1.9v9h1.9v-3.7h3.8v3.7h1.9v-9z"
      fill="#050E09"
    />
  </svg>
);

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  image: string;
  issueDate: string;
  verifyUrl: string;
  description: string;
  skills: string[];
}

const certificates: CertificateItem[] = [
  {
    id: '419156283ae8',
    title: 'Software Engineer Role Certificate',
    issuer: 'HackerRank',
    image: softwareEngineerImg,
    issueDate: '03 May, 2026',
    verifyUrl: 'https://www.hackerrank.com/certificates/419156283ae8',
    description:
      'Validates comprehensive full-stack software engineering proficiency covering end-to-end algorithmic problem solving, time/space complexity analysis, advanced SQL relational queries, and scalable REST API architectures.',
    skills: ['Problem Solving', 'SQL & Databases', 'REST APIs', 'Algorithms', 'Software Engineering'],
  },
  {
    id: 'f5b226a5a566',
    title: 'Frontend Developer (React) Certificate',
    issuer: 'HackerRank',
    image: frontendDeveloperImg,
    issueDate: '26 Jul, 2024',
    verifyUrl: 'https://www.hackerrank.com/certificates/f5b226a5a566',
    description:
      'Certifies industry-level proficiency in architecting modern frontend single-page web applications, complex state management workflows, custom React hooks, component lifecycle optimizations, and responsive UI engineering.',
    skills: ['React.js', 'JavaScript (ES6+)', 'CSS3 / UI Layouts', 'State Management', 'DOM APIs'],
  },
  {
    id: 'e29bdaa81ed5',
    title: 'SQL Skill Certificate',
    issuer: 'HackerRank',
    image: sqlImg,
    issueDate: '16 Sep, 2023',
    verifyUrl: 'https://www.hackerrank.com/certificates/e29bdaa81ed5',
    description:
      'Validates fundamental knowledge of relational database management systems, complex multi-table joins, subqueries, aggregations, data grouping, filtering, and query optimization with standard SQL.',
    skills: ['SQL', 'Relational Databases', 'Joins & Subqueries', 'Aggregations', 'Data Filtering'],
  },
  {
    id: 'd996235ec91b',
    title: 'Python Skill Certificate',
    issuer: 'HackerRank',
    image: pythonImg,
    issueDate: '12 Jul, 2023',
    verifyUrl: 'https://www.hackerrank.com/certificates/d996235ec91b',
    description:
      'Assesses core Python 3 competencies including built-in data structures (dictionaries, lists, sets, tuples), algorithmic control flow, object-oriented programming, string parsing, and robust exception handling.',
    skills: ['Python 3', 'Data Structures', 'OOP', 'Control Flow', 'String Manipulation'],
  },
];

export default function CertificationsSection() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header Card */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-main)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--card-shadow)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <SectionTitle title="Certifications & Credentials" />
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '1.6em',
            color: 'var(--text-secondary)',
          }}
        >
          Official verified certifications and role credentials earned on HackerRank, validating competencies across full-stack software engineering, React.js frontend development, SQL database architecture, and Python programming.
        </p>
      </div>

      {/* Certifications Section Card */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-main)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          boxShadow: 'var(--card-shadow)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'var(--accent-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-primary)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>
          <SectionCardTitle title="Verified HackerRank Certifications" />
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificateCard({ certificate }: { certificate: CertificateItem }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card-subtle)',
        border: '1px solid var(--border-main)',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '18px',
        transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
      }}
      className="hover:border-[var(--accent-primary)] hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div className="flex flex-col gap-3.5">
        {/* Header: Issuer & ID */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <HackerRankIcon />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[var(--text-primary)]">
                {certificate.issuer}
              </span>
              <span className="text-[11px] text-[var(--accent-primary)] font-mono font-medium">
                ID: {certificate.id.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Certificate Title */}
        <h4
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: '1.35em',
          }}
        >
          {certificate.title}
        </h4>

        {/* Certificate Image with Hover "Verify" Overlay and Direct Redirect */}
        <a
          href={certificate.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/5 dark:bg-[rgb(21,21,22)] border border-[var(--border-main)] shadow-inner group block cursor-pointer"
        >
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />

          {/* Hover Overlay with Verify */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[rgb(28,28,30)]/90 text-white text-xs font-medium border border-white/20 shadow-lg backdrop-blur-sm group-hover:border-[var(--accent-primary)] transition-colors">
              <span>Verify</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </span>
          </div>
        </a>

        {/* Technical Description */}
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '13.5px',
            fontWeight: 300,
            lineHeight: '1.6em',
            color: 'var(--text-secondary)',
            marginTop: '2px',
          }}
        >
          {certificate.description}
        </p>
      </div>

      {/* Skills Verified Tags */}
      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-main)]">
        {certificate.skills.map((skill, sIdx) => (
          <span
            key={sIdx}
            style={{
              backgroundColor: 'var(--tag-bg)',
              border: '1px solid var(--tag-border)',
              borderRadius: '6px',
              padding: '2px 8px',
              fontSize: '11px',
              color: 'var(--tag-text)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

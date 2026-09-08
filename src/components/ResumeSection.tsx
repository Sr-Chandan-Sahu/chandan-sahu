import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import SectionCardTitle from '@/components/SectionCardTitle';

import suneLogo from '@/assets/logo/sune_solutions_india_logo.jfif';
import sticSoftLogo from '@/assets/logo/sticsoft_logo.jfif';
import kreativeTimeboxLogo from '@/assets/logo/kreativetimebox_logo.jfif';
import codeBeatLogo from '@/assets/logo/code-beat.jfif';

interface RoleItem {
  title: string;
  period: string;
  skills?: string[];
  description: string;
  highlights?: string[];
}

interface CompanyExperience {
  company: string;
  logo: string;
  employmentType: string;
  totalDuration?: string;
  location: string;
  workMode: 'On-site' | 'Remote' | 'Hybrid';
  roles: RoleItem[];
}

const companiesExperience: CompanyExperience[] = [
  {
    company: 'Sune Solutions',
    logo: suneLogo,
    employmentType: 'Full-time',
    totalDuration: '1 yr 8 mos',
    location: 'Hyderabad, Telangana, India',
    workMode: 'On-site',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Apr 2026 — Present · 6 mos',
        skills: ['Operating Systems', 'System Architecture', 'Full-Stack', 'AWS'],
        description:
          'Spearheading the design and delivery of responsive, secure full-stack web and enterprise mobile solutions. Collaborating with cross-functional teams to build high-performance microservices and intuitive user workflows.',
        highlights: [
          'Engineered scalable React & Next.js SPAs reducing page load times by 40%.',
          'Built and integrated REST & GraphQL APIs with Node.js, Express, and MongoDB.',
          'Implemented automated CI/CD deployment pipelines using Docker, GitHub Actions, and AWS Cloud.',
          'Integrated Stripe & PayPal payment gateways and OAuth2/JWT security workflows.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        period: 'Feb 2025 — Apr 2026 · 1 yr 3 mos',
        skills: ['Docker', 'Computer Networking', 'Microservices'],
        description:
          'Contributed to core product features, backend service reliability, containerized deployments, and network optimizations across production environments.',
        highlights: [
          'Containerized backend services with Docker and configured automated health check monitors.',
          'Streamlined API latency and optimized socket communication protocols for real-time dashboards.',
          'Collaborated on distributed microservices architecture and cloud-native scaling.',
        ],
      },
    ],
  },
  {
    company: 'STIC SOFT',
    logo: sticSoftLogo,
    employmentType: 'Full-time',
    totalDuration: '4 mos',
    location: 'Hyderabad, Telangana, India',
    workMode: 'On-site',
    roles: [
      {
        title: 'Associate Software Engineer',
        period: 'Oct 2024 — Jan 2025 · 4 mos',
        skills: ['React.js', 'Next.js', 'TypeScript', 'React Native', 'Expo'],
        description:
          'Developed modern single-page applications, interactive data dashboards, and reusable design systems utilizing React, TypeScript, Redux Toolkit, and Tailwind CSS.',
        highlights: [
          'Developed 10+ custom reusable UI components adhering to WCAG accessibility standards.',
          'Optimized client-side state management and REST API caching with Redux & React Query.',
          'Mentored junior developers on Git workflows, TypeScript best practices, and clean code principles.',
        ],
      },
    ],
  },
  {
    company: 'KreativeTimebox',
    logo: kreativeTimeboxLogo,
    employmentType: 'Full-time',
    totalDuration: '10 mos',
    location: 'Hyderabad, Telangana, India',
    workMode: 'Remote',
    roles: [
      {
        title: 'Software Developer',
        period: 'Jan 2024 — Oct 2024 · 10 mos',
        skills: ['Teamwork', 'Document Object Model (DOM)', 'JavaScript', 'MERN Stack'],
        description:
          'Engineered robust full-stack features, responsive interactive UI modules, and dynamic state workflows across client portals. Managed end-to-end component lifecycles and RESTful data pipelines.',
        highlights: [
          'Architected modular frontend components and custom hooks for dynamic DOM manipulation.',
          'Designed MongoDB schema pipelines and Express route controllers handling high-frequency user transactions.',
          'Collaborated remotely with agile cross-functional product squads across sprints.',
        ],
      },
    ],
  },
  {
    company: 'Code Beat',
    logo: codeBeatLogo,
    employmentType: 'Internship',
    totalDuration: '2 mos',
    location: 'Bhubaneswar, Odisha, India',
    workMode: 'On-site',
    roles: [
      {
        title: 'Intern',
        period: 'May 2023 — Jun 2023 · 2 mos',
        skills: ['Git', 'Python', 'Web Fundamentals', 'Data Structures'],
        description:
          'Contributed to full-stack feature development, relational database modeling with PostgreSQL/MySQL, automated unit testing, and responsive UI layout styling.',
        highlights: [
          'Created backend CRUD endpoints and database schema migrations with Node.js and SQL.',
          'Developed mobile-responsive client interfaces with React and CSS3 Flexbox/Grid.',
        ],
      },
    ],
  },
];

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights?: string[];
}

const educationData: TimelineItem[] = [
  {
    period: '2020 — 2024',
    title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    organization: 'Biju Patnaik University of Technology / Affiliated Institute',
    location: 'India',
    description: 'Rigorous 4-year curriculum covering Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Cloud Computing.',
    highlights: [
      'Graduated First Class with Distinction (CGPA 8.4/10.0)',
      'Lead Project: E-Commerce Web Ecosystem with Microservices Architecture',
      'Active participant in coding hackathons and technical symposiums',
    ],
  },
  {
    period: '2018 — 2020',
    title: 'Higher Secondary Certificate (Science Stream)',
    organization: 'Council of Higher Secondary Education',
    location: 'India',
    description: 'Core foundation in Mathematics, Physics, Chemistry, and Computer Science.',
    highlights: ['First Division Honors(82%)'],
  },
];

export default function ResumeSection() {
  const resumeDriveUrl =
    'https://drive.google.com/file/d/1UA7ehHV8f4MQxi_UeVORZBnDKvmFkvcn/view?usp=sharing';

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Resume Header & Download Banner */}
      <div
        style={{
          backgroundColor: 'rgb(30, 30, 31)',
          border: '1px solid rgb(43, 43, 44)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <SectionTitle title="Resume & Experience" />

          <a
            href={resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer shadow-lg hover:shadow-indigo-500/20 active:scale-95 text-white"
            style={{
              backgroundColor: 'rgb(133, 138, 227)',
              border: 'none',
              fontFamily: 'Poppins, sans-serif',
              textDecoration: 'none',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Resume / CV</span>
          </a>
        </div>

        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '1.6em',
            color: 'rgb(185, 185, 186)',
          }}
        >
          Comprehensive track record in software engineering, frontend state architecture, backend API design, scalable cloud deployments, and academic computer science foundations.
        </p>
      </div>

      {/* Professional Experience Section */}
      <div
        style={{
          backgroundColor: 'rgb(30, 30, 31)',
          border: '1px solid rgb(43, 43, 44)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(133, 138, 227, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgb(133, 138, 227)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <SectionCardTitle title="Work & Engineering Experience" />
        </div>

        <div className="flex flex-col gap-6">
          {companiesExperience.map((companyItem, cIdx) => (
            <div
              key={cIdx}
              style={{
                backgroundColor: 'rgb(34, 34, 36)',
                border: '1px solid rgb(43, 43, 44)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'border-color 0.25s ease, transform 0.25s ease',
              }}
              className="hover:border-[rgb(133,138,227)]/40 hover:-translate-y-0.5"
            >
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[rgb(43,43,44)]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 border border-[rgb(55,55,60)] shrink-0 flex items-center justify-center p-1 shadow-sm">
                    <img
                      src={companyItem.logo}
                      alt={`${companyItem.company} logo`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                          color: 'rgb(243, 243, 252)',
                        }}
                      >
                        {companyItem.company}
                      </h4>
                      <span
                        style={{
                          backgroundColor: 'rgba(133, 138, 227, 0.15)',
                          border: '1px solid rgba(133, 138, 227, 0.3)',
                          borderRadius: '6px',
                          padding: '2px 8px',
                          fontSize: '11px',
                          fontWeight: 500,
                          color: 'rgb(165, 170, 245)',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {companyItem.employmentType} {companyItem.totalDuration && `· ${companyItem.totalDuration}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5 font-light">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>
                        {companyItem.location} &bull; <span className="text-gray-300 font-normal">{companyItem.workMode}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles Under Company */}
              <div className={`flex flex-col gap-6 ${companyItem.roles.length > 1 ? 'pl-3 border-l-2 border-[rgb(55,55,60)] ml-2' : ''}`}>
                {companyItem.roles.map((role, rIdx) => (
                  <div key={rIdx} className={`relative ${companyItem.roles.length > 1 ? 'pl-5' : ''}`}>
                    {companyItem.roles.length > 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          left: '-19px',
                          top: '6px',
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: cIdx === 0 && rIdx === 0 ? 'rgb(133, 138, 227)' : 'rgb(94, 98, 161)',
                          boxShadow: cIdx === 0 && rIdx === 0 ? '0 0 8px rgb(133, 138, 227)' : 'none',
                        }}
                      />
                    )}

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h5
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: 'rgb(243, 243, 252)',
                          }}
                        >
                          {role.title}
                        </h5>
                        <span
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: 'rgb(133, 138, 227)',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {role.period}
                        </span>
                      </div>

                      {/* Skills Tags */}
                      {role.skills && role.skills.length > 0 && (
                        <div className="flex items-center gap-1.5 flex-wrap my-1">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(133, 138, 227)" strokeWidth="2" className="shrink-0">
                            <polygon points="6 3 18 3 22 9 12 22 2 9 6 3" />
                          </svg>
                          {role.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              style={{
                                backgroundColor: 'rgb(26, 26, 27)',
                                border: '1px solid rgb(48, 48, 52)',
                                borderRadius: '6px',
                                padding: '2px 8px',
                                fontSize: '11px',
                                color: 'rgb(200, 200, 210)',
                                fontFamily: 'Poppins, sans-serif',
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      <p
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '13.5px',
                          fontWeight: 300,
                          lineHeight: '1.6em',
                          color: 'rgb(175, 175, 180)',
                        }}
                      >
                        {role.description}
                      </p>

                      {role.highlights && (
                        <ul className="list-disc list-inside mt-1 space-y-1 text-[13px] text-[rgb(185,185,186)]">
                          {role.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="leading-relaxed font-light">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div
        style={{
          backgroundColor: 'rgb(30, 30, 31)',
          border: '1px solid rgb(43, 43, 44)',
          borderRadius: '24px',
          padding: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(133, 138, 227, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgb(133, 138, 227)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <SectionCardTitle title="Academic Education" />
        </div>

        <div className="flex flex-col gap-6 pl-2 border-l-2 border-[rgb(43,43,44)] ml-3">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative pl-6">
              <div
                style={{
                  position: 'absolute',
                  left: '-7px',
                  top: '6px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: 'rgb(133, 138, 227)',
                }}
              />

              <div className="flex flex-col gap-1.5">
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgb(133, 138, 227)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.period}
                </span>

                <h4
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'rgb(243, 243, 252)',
                    lineHeight: '1.3em',
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'rgb(185, 185, 186)',
                  }}
                >
                  {item.organization} &bull; <span className="text-gray-400">{item.location}</span>
                </p>

                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: '1.6em',
                    color: 'rgb(160, 160, 165)',
                    marginTop: '4px',
                  }}
                >
                  {item.description}
                </p>

                {item.highlights && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        style={{
                          backgroundColor: 'rgb(34, 34, 36)',
                          border: '1px solid rgb(43, 43, 44)',
                          borderRadius: '8px',
                          padding: '4px 10px',
                          fontSize: '12px',
                          color: 'rgb(185, 185, 186)',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

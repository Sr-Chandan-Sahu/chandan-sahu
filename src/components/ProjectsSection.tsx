import { useState, useMemo } from 'react';
import SectionTitle from '@/components/SectionTitle';

import devPulseImg1 from '@/assets/projects/devpulse_ai.jpg';
import devPulseImg2 from '@/assets/projects/devpulse_ai_2.jpg';
import collabSphereImg1 from '@/assets/projects/collabsphere.jpg';
import collabSphereImg2 from '@/assets/projects/collabsphere_2.jpg';
import ecommerceImg1 from '@/assets/projects/ecommerce.jpg';
import ecommerceImg2 from '@/assets/projects/ecommerce_2.jpg';
import cloudOpsImg1 from '@/assets/projects/cloudops_cicd.jpg';
import cloudOpsImg2 from '@/assets/projects/cloudops_cicd_2.jpg';
import microservicesImg from '@/assets/projects/microservices_hub.jpg';
import hackerRankReactImg from '@/assets/projects/hackerrank_react.jpg';

interface Project {
  id: string;
  title: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'devops' | 'opensource';
  categoryLabel: string;
  status: 'Live Production' | 'Open Source' | 'Full Stack' | 'Active';
  images: string[];
  description: string;
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'DevPulse AI — API Observability, Telemetry & Anomaly Detector',
    category: 'backend',
    categoryLabel: 'AI & Cloud Telemetry',
    status: 'Active',
    images: [devPulseImg1, devPulseImg2],
    description: 'Cloud-native API observability platform with real-time HTTP request tracing, distributed latency telemetry, error rate monitoring, and automated AI-driven root cause anomaly diagnosis powered by Google Gemini / OpenAI.',
    metrics: ['Real-Time Telemetry', 'AI Anomaly Analysis', 'Sub-50ms Log Ingestion'],
    techStack: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'Redis', 'Docker', 'Gemini API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sr-Chandan-Sahu/DevPulse-AI',
    demoUrl: 'https://chandansahu.netlify.app',
  },
  {
    id: 'proj-2',
    title: 'CollabSphere — Real-Time Collaborative Workspace & Document Engine',
    category: 'fullstack',
    categoryLabel: 'Real-Time & Full-Stack',
    status: 'Live Production',
    images: [collabSphereImg1, collabSphereImg2],
    description: 'High-concurrency collaborative document workspace featuring live multi-cursor presence, bidirectional WebSocket state synchronization, rich markdown editing, workspace RBAC permissions, and conflict-free data updates.',
    metrics: ['WebSockets & Socket.io', 'Redis Pub/Sub Sync', 'Multi-Cursor Presence'],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Prisma', 'Redis', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Sr-Chandan-Sahu/CollabSphere',
    demoUrl: 'https://chandansahu.netlify.app',
  },
  {
    id: 'proj-3',
    title: 'Enterprise E-Commerce Full-Stack Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack & MERN',
    status: 'Live Production',
    images: [ecommerceImg1, ecommerceImg2],
    description: 'A comprehensive, scalable multi-vendor E-Commerce web platform featuring product catalog search, user cart & wishlist, secure Stripe payment integration, admin inventory analytics, and order tracking.',
    metrics: ['Full Stack MERN', 'Stripe Payment Gateway', 'JWT Auth & Role Control'],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'Stripe API'],
    githubUrl: 'https://github.com/Sr-Chandan-Sahu/MERN-projects',
    demoUrl: 'https://chandansahu.netlify.app',
  },
  {
    id: 'proj-4',
    title: 'CloudOps CI/CD: Automated GitOps Pipeline on AWS with Jenkins & Docker',
    category: 'devops',
    categoryLabel: 'DevOps & Cloud Infra',
    status: 'Active',
    images: [cloudOpsImg1, cloudOpsImg2],
    description: 'Production-ready enterprise CI/CD automation suite deploying containerized microservices to AWS EC2 & S3 via Jenkins multibranch pipelines, Docker Compose, automated GitHub webhooks, SSL provisioning, and Nginx reverse proxy.',
    metrics: ['Zero-Downtime Releases', 'Multi-Stage Jenkins CI/CD', 'AWS EC2 & S3 Deployment'],
    techStack: ['Jenkins', 'AWS (EC2, S3, IAM)', 'Docker', 'GitHub Actions', 'Nginx', 'Linux', 'Shell Scripting'],
    githubUrl: 'https://github.com/Sr-Chandan-Sahu/CloudOps-AWS-Jenkins-CICD',
    demoUrl: 'https://chandansahu.netlify.app',
  },
  {
    id: 'proj-5',
    title: 'Node.js Microservices, REST & GraphQL Backend Hub',
    category: 'backend',
    categoryLabel: 'Backend & Cloud APIs',
    status: 'Open Source',
    images: [microservicesImg],
    description: 'Curated architectural blueprint of enterprise backend patterns in Node.js, Express, and GraphQL. Implements rate limiting, token rotation, Redis caching, structured logging, and Docker container deployment.',
    metrics: ['Dockerized Microservices', 'GraphQL + REST', 'Redis Cache Integration'],
    techStack: ['Node.js', 'Express.js', 'GraphQL', 'Redis', 'Docker', 'JWT', 'MongoDB'],
    githubUrl: 'https://github.com/Sr-Chandan-Sahu/NodeJS-tutorial',
  },
  {
    id: 'proj-6',
    title: 'HackerRank React Solutions & Technical Interview Suite',
    category: 'opensource',
    categoryLabel: 'Open Source & Algorithms',
    status: 'Open Source',
    images: [hackerRankReactImg],
    description: 'Comprehensive repository of tested, optimal algorithmic implementations, data structures, and advanced React frontend problem solutions used by engineering candidates.',
    metrics: ['5-Star Problem Solving', 'React Best Practices', 'Comprehensive Unit Tests'],
    techStack: ['JavaScript (ES6+)', 'React.js', 'Jest', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/Sr-Chandan-Sahu/Hackerrank-React-Interiview',
  },
];

function ProjectImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white border border-[var(--border-main)] shadow-inner group/slider">
      <img
        src={images[currentIndex]}
        alt={`${title} - View ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 cursor-pointer shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 z-10 cursor-pointer shadow-md"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  idx === currentIndex ? 'bg-white w-3.5' : 'bg-white/50 w-1.5 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Count Badge */}
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-medium backdrop-blur-sm z-10 font-mono shadow-sm">
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      return selectedCategory === 'all' || proj.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header & Filter Card */}
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <SectionTitle title="Featured Projects" />
          <span className="text-xs text-[var(--text-secondary)] font-light">
            Full-Stack Applications &bull; Cloud Systems &bull; DevOps Pipelines
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {[
            { label: 'All', value: 'all' },
            { label: 'Full-Stack & Real-Time', value: 'fullstack' },
            { label: 'Backend & AI Telemetry', value: 'backend' },
            { label: 'DevOps & Cloud', value: 'devops' },
            { label: 'Open Source', value: 'opensource' },
          ].map((cat) => {
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
                style={{
                  backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-card-subtle)',
                  color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                  border: '1px solid',
                  borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-main)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {filteredProjects.length === 0 ? (
          <div
            className="col-span-full p-8 text-center rounded-2xl border"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-main)',
              color: 'var(--text-secondary)',
            }}
          >
            No projects found matching the selected filter or search term.
          </div>
        ) : (
          filteredProjects.map((proj) => (
            <div
              key={proj.id}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-main)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                boxShadow: 'var(--card-shadow)',
                transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease',
              }}
              className="group hover:border-[var(--accent-primary)] hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="flex flex-col gap-3">
                {/* Project Image Carousel */}
                <ProjectImageCarousel images={proj.images} title={proj.title} />

                {/* Top metadata */}
                <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                  <span
                    style={{
                      backgroundColor: 'var(--accent-subtle)',
                      color: 'var(--accent-primary)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 500,
                    }}
                  >
                    {proj.categoryLabel}
                  </span>

                  <span
                    style={{
                      backgroundColor:
                        proj.status === 'Live Production'
                          ? 'rgba(74, 222, 128, 0.12)'
                          : proj.status === 'Full Stack'
                          ? 'rgba(96, 165, 250, 0.12)'
                          : 'rgba(251, 191, 36, 0.12)',
                      color:
                        proj.status === 'Live Production'
                          ? 'rgb(34, 197, 94)'
                          : proj.status === 'Full Stack'
                          ? 'rgb(59, 130, 246)'
                          : 'rgb(217, 119, 6)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 500,
                    }}
                  >
                    {proj.status}
                  </span>
                </div>

                {/* Title */}
                <h4
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: '1.3em',
                  }}
                  className="transition-colors group-hover:text-[var(--accent-primary)]"
                >
                  {proj.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  {proj.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 py-1">
                  {proj.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--text-primary)] border px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderColor: 'var(--border-main)',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] text-[var(--tag-text)] border px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: 'var(--tag-bg)',
                        borderColor: 'var(--tag-border)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-main)]">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-primary)] border transition-colors hover:border-[var(--accent-primary)]"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-main)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub Code
                  </a>
                )}

                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--accent-primary)] border transition-colors hover:border-[var(--accent-primary)]"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-main)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

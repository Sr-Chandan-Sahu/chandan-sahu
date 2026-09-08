import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const DEVICON_BASE_URL = 'https://raw.githubusercontent.com/devicons/devicon/master/icons';

interface SkillItem {
  name: string;
  iconPath: string;
  invertOnDark?: boolean;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategoriesData: SkillCategory[] = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React JS', iconPath: 'react/react-original.svg' },
      { name: 'Next JS', iconPath: 'nextjs/nextjs-original.svg' },
      { name: 'React Native', iconPath: 'react/react-original.svg' },
      { name: 'Expo', iconPath: 'expo/expo-original.svg', invertOnDark: true },
      { name: 'ElectronJS', iconPath: 'electron/electron-original.svg' },
      { name: 'TypeScript', iconPath: 'typescript/typescript-original.svg' },
      { name: 'JavaScript', iconPath: 'javascript/javascript-original.svg' },
      { name: 'Redux', iconPath: 'redux/redux-original.svg' },
      { name: 'Zustand', iconPath: 'zustand/zustand-original.svg' },
      { name: 'Tailwind CSS', iconPath: 'tailwindcss/tailwindcss-original.svg' },
      { name: 'Material UI', iconPath: 'materialui/materialui-original.svg' },
      { name: 'HTML5', iconPath: 'html5/html5-original.svg' },
      { name: 'CSS3', iconPath: 'css3/css3-original.svg' },
      { name: 'Vite', iconPath: 'vitejs/vitejs-original.svg' },
      { name: 'Bootstrap', iconPath: 'bootstrap/bootstrap-original.svg' },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node JS', iconPath: 'nodejs/nodejs-original.svg' },
      { name: 'Express JS', iconPath: 'express/express-original.svg', invertOnDark: true },
      { name: 'NestJS', iconPath: 'nestjs/nestjs-original.svg' },
      { name: 'FastAPI', iconPath: 'fastapi/fastapi-original.svg' },
      { name: 'Python', iconPath: 'python/python-original.svg' },
      { name: 'Django', iconPath: 'django/django-plain.svg' },
      { name: 'GraphQL', iconPath: 'graphql/graphql-plain.svg' },
      { name: 'WebSockets / Socket.io', iconPath: 'socketio/socketio-original.svg', invertOnDark: true },
      { name: 'PostgreSQL', iconPath: 'postgresql/postgresql-original.svg' },
      { name: 'MongoDB', iconPath: 'mongodb/mongodb-original.svg' },
      { name: 'MySQL', iconPath: 'mysql/mysql-original.svg' },
      { name: 'Redis', iconPath: 'redis/redis-original.svg' },
      { name: 'Supabase', iconPath: 'supabase/supabase-original.svg' },
      { name: 'Appwrite', iconPath: 'appwrite/appwrite-original.svg' },
      { name: 'Firebase', iconPath: 'firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', iconPath: 'docker/docker-original.svg' },
      { name: 'Jenkins', iconPath: 'jenkins/jenkins-original.svg' },
      { name: 'GitHub Actions', iconPath: 'githubactions/githubactions-original.svg' },
      { name: 'AWS', iconPath: 'amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Google Cloud', iconPath: 'googlecloud/googlecloud-original.svg' },
      { name: 'Azure DevOps', iconPath: 'azure/azure-original.svg' },
      { name: 'Nginx', iconPath: 'nginx/nginx-original.svg' },
      { name: 'Apache', iconPath: 'apache/apache-original.svg' },
      { name: 'Vercel', iconPath: 'vercel/vercel-original.svg', invertOnDark: true },
      { name: 'Netlify', iconPath: 'netlify/netlify-original.svg' },
    ],
  },
  {
    title: 'Testing & Monitoring',
    skills: [
      { name: 'Jest', iconPath: 'jest/jest-plain.svg' },
      { name: 'Playwright', iconPath: 'playwright/playwright-original.svg' },
      { name: 'Selenium', iconPath: 'selenium/selenium-original.svg' },
      { name: 'Grafana', iconPath: 'grafana/grafana-original.svg' },
      { name: 'Sentry', iconPath: 'sentry/sentry-original.svg' },
      { name: 'Swagger', iconPath: 'swagger/swagger-original.svg' },
      { name: 'Postman', iconPath: 'postman/postman-original.svg' },
    ],
  },
  {
    title: 'Core & Tools',
    skills: [
      { name: 'DSA', iconPath: 'cplusplus/cplusplus-original.svg' },
      { name: 'System Design', iconPath: 'unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg' },
      { name: 'Operating Systems', iconPath: 'linux/linux-original.svg' },
      { name: 'Computer Networks', iconPath: 'networkx/networkx-original.svg' },
      { name: 'DBMS', iconPath: 'azuresqldatabase/azuresqldatabase-original.svg' },
      { name: 'Git', iconPath: 'git/git-original.svg' },
      { name: 'GitHub', iconPath: 'github/github-original.svg', invertOnDark: true },
      { name: 'VS Code', iconPath: 'vscode/vscode-original.svg' },
      { name: 'Jira', iconPath: 'jira/jira-original.svg' },
      { name: 'Notion', iconPath: 'notion/notion-original.svg', invertOnDark: true },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header Card */}
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
        <SectionTitle title="Technical Skills" />
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '1.6em',
            color: 'rgb(185, 185, 186)',
          }}
        >
          A comprehensive overview of my technical proficiencies across Frontend, Mobile, Backend, Databases, Cloud & DevOps, Testing, and Core Computer Science fundamentals.
        </p>
      </div>

      {/* Grid of Skill Cards (2 on top row, 2 on middle row, 1 centered on bottom row) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Card 1: Frontend & Mobile */}
        <SkillCard category={skillCategoriesData[0]} />

        {/* Card 2: Backend & Databases */}
        <SkillCard category={skillCategoriesData[1]} />

        {/* Card 3: DevOps & Cloud */}
        <SkillCard category={skillCategoriesData[2]} />

        {/* Card 4: Testing & Monitoring */}
        <SkillCard category={skillCategoriesData[3]} />

        {/* Card 5: Core & Tools (Spans 2 columns on desktop) */}
        <div className="lg:col-span-2 flex justify-center w-full">
          <div className="w-full max-w-[680px]">
            <SkillCard category={skillCategoriesData[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div
      style={{
        backgroundColor: 'rgb(30, 30, 31)',
        border: '1.5px solid rgba(133, 138, 227, 0.35)',
        borderRadius: '24px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '22px',
      }}
      className="group hover:border-[rgb(133,138,227)] transition-all duration-300 shadow-md hover:shadow-indigo-500/10 h-full"
    >
      {/* Centered Category Title with Animated Underline */}
      <div className="relative flex flex-col items-center pb-1">
        <h3
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            color: 'rgb(243, 243, 252)',
            textAlign: 'center',
            letterSpacing: '-0.01em',
          }}
          className="transition-colors duration-300 group-hover:text-white"
        >
          {category.title}
        </h3>
        <span className="h-[2.5px] rounded-full bg-gradient-to-r from-[#38BDF8] via-[#858AE3] to-[#C084FC] w-0 group-hover:w-full transition-all duration-300 ease-out mt-1.5 shadow-[0_0_8px_rgba(133,138,227,0.7)]" />
      </div>

      {/* Pill Badges Container */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
        {category.skills.map((skill, sIdx) => {
          const iconUrl = `${DEVICON_BASE_URL}/${skill.iconPath}`;

          return (
            <div
              key={sIdx}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl transition-all duration-200 hover:scale-105 cursor-default group"
              style={{
                backgroundColor: 'rgb(21, 21, 22)',
                border: '1px solid rgb(48, 48, 52)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
              }}
            >
              <div className="flex items-center justify-center flex-shrink-0 w-[18px] h-[18px]">
                <img
                  src={iconUrl}
                  alt={skill.name}
                  className={`w-[18px] h-[18px] object-contain flex-shrink-0 ${
                    skill.invertOnDark ? 'brightness-0 invert' : ''
                  }`}
                  loading="lazy"
                />
              </div>
              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'rgb(225, 225, 235)',
                  whiteSpace: 'nowrap',
                }}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}


import { Code, FileCode, Globe, Server, Terminal, Database, Cpu, Smartphone, Lock, Scan, Eye, ShieldCheck } from "lucide-react";

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", icon: Code, level: 95 },
      { name: "JavaScript", icon: FileCode, level: 95 },
      { name: "React", icon: Globe, level: 92 },
      { name: "TypeScript", icon: Code, level: 88 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: Server, level: 93 },
      { name: "API Design", icon: Terminal, level: 90 },
      { name: "Databases", icon: Database, level: 90 },
      { name: "Deployment & Docker", icon: Cpu, level: 85 },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native", icon: Smartphone, level: 88 },
    ],
  },
  {
    category: "Cyber Security",
    items: [
      { name: "Penetration Testing", icon: Lock, level: 85 },
      { name: "Vulnerability Assessment", icon: Scan, level: 82 },
      { name: "Security Monitoring", icon: Eye, level: 78 },
      { name: "Network Security", icon: ShieldCheck, level: 86 },
    ],
  },
];

export const projects = [
  {
    title: "ShopSmart",
    description: "A simple, hosted full-stack Retail trading platform showcasing management of stock, management of suppliers and tracking debt purchases and sales. All made easy for shop owners",
    tags: ["React", "Node.js", "Postgres"],
    image: "image-s.png",
    github: "https://github.com/amani-patrick/shopsmart",
    demo: "https://shop-smart-smoky.vercel.app",
    status: "Hosted",
    featured: true,
    order: 1,
  },
  {
    title: "An Trading bot",
    description: "A trading bot that uses algorithmic trading strategies to analyze market data and make informed trading decisions.",
    tags: ["React", "Django", "Security", "JWT","TensorFlow"],
    image: "amnii-trade.png",
    github: "https://github.com/amani-patrick/AMNII-BT-FRONTEND",
    demo: "https://amnii-bt-frontend.vercel.app",
    status: "Hosted",
    featured: false,
  },
  {
    title: "Team-Collab Backend",
    description: "A backend system for team collaboration: REST API, authentication, RBAC, and worker queues. Frontend in progress.",
    tags: ["Nestjs", "Postgres", "Prisma","RBAC"],
    image: "image-t.png",
    github: "https://github.com/amani-patrick/team-collab-backend",
    docs: "https://github.com/amani-patrick/team-collab-backend#readme",
    status: "Backend only",
    featured: false,
  },
  {
    title: "EduSubmit",
    description: "A java based web application that allows students to submit assignments and receive feedback from their professors.",
    tags: ["JSP", "Servlets", "Java", "Html","Css","JavaScript"],
    image: "edusubmit.png",
    github: "https://github.com/amani-patrick/Assignment-MIS",
    status: "Not Hosted-fullstack",
    featured: false,
  },
  {
    title: "SmartHome",
    description: "An all in one functional web app to controll you home online without reaching there.",
    tags: ["React","Tailwind","Typescript"],
    image: "SmartHome.png",
    github: "https://github.com/amani-patrick/SmartHome",
    status: "Not Hosted-frontend",
    featured: false,
  }
];

export const certificates = [
  {
    title: "Certified Penetration tester",
    issuer: "Think Cyber Institute",
    date: "2025",
    image: "penetester.png",
    credential: "Credential ID: 40E2909C58",
  },
  {
    title: "Certified Network Researcher",
    issuer: "Think Cyber Institute",
    date: "2024",
    image: "network-researcher.png",
    credential: "Credential ID: 7FFCB55FD6",
  },
  {
    title: "Python fundamentals Certificate",
    issuer: "Think Cyber Institute",
    date: "2024",
    image: "python-fundamentals.png",
    credential: "Credential ID: 1E98921B4A",
  },
  {
    title: "Linux fundamentals Certificate",
    issuer: "Think Cyber Institute",
    date: "2024",
    image: "linux-fundamentals.png",
    credential: "Credential ID: 772C9F0BC9",
  },
  {
    title: "OSCTF Participation Certificate",
    issuer: "OSCTF",
    date: "2023",
    image: "OSCTF.png",
  }
];

export const education = [
  {
    degree: "Advanced Secondary Education (Software Engineering)",
    institution: "Rwanda Coding Academy (RCA)",
    year: "Final Year",
    description:
      "Specialized program with an intensive focus on software engineering and embedded systems. Coursework includes system design, backend development, networking, cybersecurity fundamentals, low-level programming, and hardware–software integration, with a strong emphasis on practical, project-based learning."
  }
];

export const teamCollabSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 48" role="img" aria-labelledby="teamTitle teamDesc">
  <title id="teamTitle">Team collab</title>
  <desc id="teamDesc">Text-only SVG reading Team collab</desc>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="700" fill="#0F172A">Team collab</text>
</svg>
`;



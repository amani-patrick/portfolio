
import { 
  GraduationCap, Code, ShieldCheck, BrainCircuit, 
  Globe, Server, Database, FileCode, Lock, Eye, Scan, 
  Bot, Terminal, Network, Activity, Cpu
} from "lucide-react";

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
    category: "Web Development",
    items: [
      { name: "HTML/CSS", icon: Code, level: 97 },
      { name: "JavaScript", icon: FileCode, level: 95 },
      { name: "React", icon: Globe, level: 90 },
      { name: "Node.js", icon: Server, level: 95 },
      { name: "Databases", icon: Database, level: 90 },
    ],
  },
  {
    category: "Penetration Testing",
    items: [
      { name: "Network Security", icon: ShieldCheck, level: 85 },
      { name: "Vulnerability Assessment", icon: Scan, level: 80 },
      { name: "Ethical Hacking", icon: Lock, level: 75 },
      { name: "Security Monitoring", icon: Eye, level: 70 },
      {name:"Penetration testing",level:60}
    ],
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Natural Language Processing", icon: BrainCircuit, level: 75 },
      { name: "Machine Learning", icon: Bot, level: 70 },
      { name: "Data Analysis", icon: Activity, level: 80 },
      { name: "Neural Networks", icon: Network, level: 65 },
      { name: "Computer Vision", icon: Cpu, level: 60 },
    ],
  },
];

export const projects = [
  {
    title: "An Trading bot",
    description: "A trading bot that uses algorithmic trading strategies to analyze market data and make informed trading decisions.",
    tags: ["React", "Django", "Security", "JWT"],
    image: "/amnii-trade.png",
    github: "https://github.com/amani-patrick/AMNII-BT-FRONTEND",
    demo: "https://amnii-bt-frontend.vercel.app",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered tool that creates engaging content based on simple user prompts.",
    tags: ["Python", "NLP", "Machine Learning", "API"],
    image: "https://images.unsplash.com/photo-1677442135137-18bea0830f8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/amani-patrick/ai-content-gen",
    demo: "https://ai-content-generator-demo.com",
  },
  {
    title: "Vulnerability Scanner",
    description: "A comprehensive tool to identify and categorize security vulnerabilities in web applications.",
    tags: ["Python", "Security", "Penetration Testing"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/amani-patrick/vuln-scanner",
    demo: "https://vuln-scanner-demo.com",
  },
  {
    title: "EduSubmit",
    description: "A java based web application that allows students to submit assignments and receive feedback from their professors.",
    tags: ["JSP", "Servlets", "Java", "Html","Css","JavaScript"],
    image: "edusubmit.png",
    github: "https://github.com/amani-patrick/Assignment-MIS",
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
    degree: "Master of Computer Science",
    institution: "Stanford University",
    year: "2020-2022",
    description: "Specialized in Cybersecurity and Artificial Intelligence"
  },
  {
    degree: "Bachelor of Technology",
    institution: "MIT",
    year: "2016-2020",
    description: "Computer Science and Engineering"
  }
];

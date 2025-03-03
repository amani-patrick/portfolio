
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
      { name: "HTML/CSS", icon: Code, level: 90 },
      { name: "JavaScript", icon: FileCode, level: 85 },
      { name: "React", icon: Globe, level: 80 },
      { name: "Node.js", icon: Server, level: 75 },
      { name: "Databases", icon: Database, level: 70 },
    ],
  },
  {
    category: "Penetration Testing",
    items: [
      { name: "Network Security", icon: ShieldCheck, level: 85 },
      { name: "Vulnerability Assessment", icon: Scan, level: 80 },
      { name: "Ethical Hacking", icon: Lock, level: 75 },
      { name: "Security Monitoring", icon: Eye, level: 70 },
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
    title: "Secure Banking Portal",
    description: "A secure banking platform with advanced authentication and real-time transaction monitoring.",
    tags: ["React", "Node.js", "Security", "JWT"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/yourusername/secure-banking",
    demo: "https://secure-banking-demo.com",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered tool that creates engaging content based on simple user prompts.",
    tags: ["Python", "NLP", "Machine Learning", "API"],
    image: "https://images.unsplash.com/photo-1677442135137-18bea0830f8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/yourusername/ai-content-gen",
    demo: "https://ai-content-generator-demo.com",
  },
  {
    title: "Vulnerability Scanner",
    description: "A comprehensive tool to identify and categorize security vulnerabilities in web applications.",
    tags: ["Python", "Security", "Penetration Testing"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/yourusername/vuln-scanner",
    demo: "https://vuln-scanner-demo.com",
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio website showcasing skills and projects.",
    tags: ["React", "Tailwind CSS", "Animation"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com",
  }
];

export const certificates = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    credential: "Credential ID: 12345678",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    credential: "Credential ID: AWS-ASA-12345",
  },
  {
    title: "Full Stack Web Developer",
    issuer: "Udacity",
    date: "2022",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    credential: "Credential ID: UD-FSWD-67890",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021",
    image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    credential: "Credential ID: TF-DEV-54321",
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

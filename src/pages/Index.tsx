import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Github, Mail, Search, ChevronRight, BookOpen, ChevronLeft } from "lucide-react";
import { Toolkit } from "@/components/Toolkit";
import { ProjectCard } from "@/components/ProjectCard";
import { EACard } from "@/components/EACard";
import { DetailModal } from "@/components/DetailModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const allProjects = [
  {
    name: "Email Service",
    desc: "A custom Email service where you can send and receive emails securely through the cryptographich signings and you can do it anonymously,This project is for Finacial Sector, Anonymous Email Service, Sharing sensitive info and even on our side it shows nothing",
    category: "Web Apps",
    tags: ["React", "Cryptography", "FastAPI", "SQLite", "JWT","rsa"],
    image: "SES.png",
    details: "A privacy-first communication platform utilizing end-to-end encryption and cryptographic signings to ensure message integrity. Built for the financial sector where anonymity and security are paramount, the system ensures that even at the database level, sensitive information remains inaccessible to unauthorized parties. It leverages JWT for secure sessions and SQLite for lightweight, encrypted data storage."
  },
  {
    name: "ShopSmart",
    desc: "This is a website is for helping retail traders and shop owners to manage their daily sales and expenses and also track Debts and Credits and most importantly it helps them to track their profit and loss.",
    category: "Web Apps",
    tags: ["React", "Java", "Spring Boot", "TypeScript", "PostgreSQL"],
    image: "ShopSmart.png",
    details: "A comprehensive inventory and finance management tool designed specifically for small to medium retail businesses. It streamlines the tracking of daily sales, expenses, and credit/debt cycles, providing shop owners with real-time profit and loss visualizations. The backend, built with Spring Boot and PostgreSQL, ensures data consistency and high availability for critical business operations."
  },
  {
    name: "MCP Hub",
    desc: "A custom collection of my own custom made MCP servers that can be used to enhance the productivity of your AI Agents as a Serious Developer",
    category: "Web Apps",
    tags: ["React", "HealthTech", "AI"],
    image: "mcp.png",
    details: "A centralized repository of specialized Model Context Protocol (MCP) servers tailored for modern AI agent development. This collection enables developers to extend their LLM capabilities with tools for local filesystem access, database interaction, and custom API integrations. It focuses on reducing friction in the 'vibecoding' era by providing robust, well-documented building blocks for intelligent agents."
  },
  {
    name: "File Upload Vulnerability Scanner",
    desc: "In this Era of vibecoding, Often LLMs mimick or simplify upload service for fast delivery, This tools helps check you upload endpoints and attempts to exploit them",
    category: "Cyber Security",
    tags: ["Security", "Python", "Pentesting", "Docker"],
    image: "vibecheck.png",
    details: "A specialized cybersecurity tool designed to identify and exploit common misconfigurations in web upload endpoints. In an era of rapid development, security gaps often emerge in simplified upload services; this tool automates the process of testing for vulnerability to malicious file execution. Built with Python and containerized with Docker, it serves as a critical asset for penetration testers and researchers."
  },
  {
    name: "EduSumit Mobile",
    desc: "Native mobile application for the EduSumit educational platform.",
    category: "Mobile",
    tags: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
    details: "A native mobile experience for the EduSumit educational ecosystem, providing students with seamless access to course materials and real-time collaboration tools. Utilizing React Native for cross-platform efficiency and Firebase for real-time data syncing and authentication, the app delivers a responsive and reliable learning environment tailored for mobile users."
  },
];

const allEas = [
  {
    name: "HFT_pro",
    desc: "High-frequency trading Expert Advisor optimized for low latency execution and scalp setups.",
    metrics: {
      profitFactor: "35.75",
      recoveryFactor: "1879.34",
      lastTested: "Feb 2026",
      testedPeriod: "1 month",
      winrate:"94.13%"
    },
    image: "HFT_pro.png",
    isLive: true,
    details: "A professional-grade high-frequency trading algorithm meticulously engineered for low-latency execution on major currency pairs. It utilizes a sophisticated scalp setup logic that capitalizes on michrough dynamic stop-loss adjustments. Optimized for ECN environments, it minimizes slippage and maximizes execution speed."
  },
  {
    name: "Gold Beast V4",
    desc: "Sophisticated gold trading algorithm using multi-timeframe analysis and dynamic risk management.",
    metrics: {
      profitFactor: "2.10",
      recoveryFactor: "5.8",
      lastTested: "Jan 2024",
      testedPeriod: "4 Years"
    },
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&auto=format&fit=crop&q=60",
    isLive: false,
    details: "A flagship trading system specializing in XAUUSD (Gold) markets, employing a multi-timeframe analysis engine to identify high-probability trend reversals. By integrating dynamic risk management and volatility-adjusted position sizing, the algorithm maintains a high recovery factor even during erratic market phases. It is the result of four years of iterative backtesting and live optimization."
  },
  {
    name: "The Flipper",
    desc: "Momentum-based trend following strategy designed for major currency pairs.",
    metrics: {
      profitFactor: "1.65",
      recoveryFactor: "3.5",
      lastTested: "Mar 2024",
      testedPeriod: "1.5 Years"
    },
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&auto=format&fit=crop&q=60",
    isLive: false,
    details: "A momentum-centric trend following strategy designed to capture large swings in the Forex market. It filters out market noise using custom volatility indicators, ensuring that entries are only triggered during confirmed trend accelerations. The strategy is built for longevity, focusing on steady equity growth across 1.5+ years of verified performance history."
  },
];

const certifications = [
  "Network Researcher(Think Cyber)",
  "Penetration Tester(Think Cyber)",
  "Python Developer(Think Cyber)",
  "Intro to linux (Think Cyber)"
];

const Index = () => {
  const [projectSearch, setProjectSearch] = useState("");
  const [projectTab, setProjectTab] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(3);

  const [eaVisible, setEaVisible] = useState(3);

  const [modalData, setModalData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(projectSearch.toLowerCase()) ||
        p.desc.toLowerCase().includes(projectSearch.toLowerCase());
      const matchesTab = projectTab === "All" || p.category === projectTab;
      return matchesSearch && matchesTab;
    });
  }, [projectSearch, projectTab]);

  const openModal = (data: any) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-32">

        {/* Hero Section */}
        <section className="mb-24 flex flex-col items-center text-center">
          <div className="relative mb-10 group">
            {/* Animated Glow Effect */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/40 via-primary/10 to-primary/40 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>

            <div className="relative h-32 w-32 md:h-44 md:w-44 rounded-full p-1 bg-gradient-to-b from-border/50 to-transparent">
              <div className="h-full w-full rounded-full overflow-hidden border-2 border-background bg-secondary/30 backdrop-blur-sm">
                <img
                  src="/ee.jpg"
                  alt="Amani Patrick"
                  className="h-full w-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amani';
                  }}
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-2 -right-2 bg-background border border-border/50 px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">Available</span>
            </div>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-transparent leading-[1.1]">
              Amani Patrick
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-muted-foreground">
              <span className="text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-secondary/50 border border-border/30 text-foreground/80">
                Developer & Bounty Hunter
              </span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-30">•</span>
              <span className="text-sm md:text-base font-medium">
                {new Date().getFullYear() - 2022}+ Years Experience
              </span>
            </div>

            <p className="text-muted-foreground/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
  {new Date().getFullYear() - 2008} y/o Building <span className="text-foreground font-semibold">high-performance trading systems</span> and <span className="text-foreground font-semibold">secure web architectures</span>. Currently Building at <a href="https://echo-solution.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Echo Solution</a>
</p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/blogs"
                className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-semibold transition-all hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <BookOpen className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Read My Articles</span>
              </Link>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/amani-patrick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all border border-border/40 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:pazzoamani@gmail.com"
                  className="p-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-all border border-border/40 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Toolkit */}
        <Toolkit />

        {/* Certifications Section */}
        <section className="mb-24">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">certs</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm md:text-base font-medium text-foreground/70">
            {certifications.map((cert, index) => (
              <span key={cert} className="flex items-center gap-2">
                <span className="text-primary/60">✓</span>
                {cert}
                {index < certifications.length - 1 && <span className="ml-2 text-muted-foreground/30">|</span>}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Projects</h2>
                <p className="text-muted-foreground text-sm">A collection of things I've designed and built.</p>
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-9 bg-secondary/40 border-none h-10 rounded-xl text-sm"
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                />
              </div>
            </div>

            <Tabs defaultValue="All" className="w-full text-sm" onValueChange={setProjectTab}>
              <TabsList className="bg-secondary/40 p-1 h-11 rounded-xl w-full md:w-auto overflow-x-auto justify-start md:justify-center">
                {["All", "Web Apps", "Mobile", "Cyber Security"].map(tab => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="px-4 md:px-6 rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm whitespace-nowrap"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(0, visibleProjects).map((p) => (
              <ProjectCard key={p.name} {...p} onClick={() => openModal(p)} />
            ))}
          </div>

          {visibleProjects < filteredProjects.length && (
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleProjects(prev => prev + 3)}
                className="rounded-full px-8 hover:bg-secondary border-muted-foreground/20 h-11 text-sm"
              >
                Load More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
          {visibleProjects >= filteredProjects.length && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="text-muted-foreground text-sm italic">That's it for now!</p>
              <a
                href="https://github.com/amani-patrick"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary/50 border border-border/50 text-foreground/80 hover:text-foreground hover:bg-secondary transition-all hover:-translate-y-0.5"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm font-medium">Explore more on GitHub</span>
                <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          )}
        </section>

        {/* Expert Advisors Section */}
        <section id="eas" className="mb-32">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Expert Advisors</h2>
            <p className="text-muted-foreground text-sm">Automated trading solutions for modern markets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEas.slice(0, eaVisible).map((ea) => (
              <EACard key={ea.name} {...ea} onClick={() => openModal(ea)} />
            ))}
          </div>

          {eaVisible < allEas.length && (
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setEaVisible(prev => prev + 3)}
                className="rounded-full px-8 hover:bg-secondary border-muted-foreground/20 h-11 text-sm"
              >
                Load More
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </section>

        {/* Experience - Kept minimalist */}
        <section className="mb-32">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">experience</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/50 group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Full-stack Developer</h3>
                <p className="text-muted-foreground">Software Engineering & Freelance</p>
              </div>
              <span className="text-muted-foreground text-sm mt-1 md:mt-0">2021 — Present ({new Date().getFullYear() - 2022}+ years)</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/50 group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Forex EA Developer</h3>
                <p className="text-muted-foreground">MQL4/MQL5 Strategy Implementation</p>
              </div>
              <span className="text-muted-foreground text-sm mt-1 md:mt-0">2023 — Present ({new Date().getFullYear() - 2024}+ years)</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/50 group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Bug bounty Hunter</h3>
                <p className="text-muted-foreground">Vulnerability Assessment and Penetration Testing Specialist </p>
              </div>
              <span className="text-muted-foreground text-sm mt-1 md:mt-0">2024 — Present ({new Date().getFullYear() - 2025}+ years)</span>
            </div>
          </div>
        </section>

        {/* Footer/Connect */}
        <section className="pt-20 border-t border-border/50">
          <h2 className="text-2xl font-bold mb-8">Get in touch</h2>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <a
              href="mailto:pazzoamani@gmail.com"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="text-lg border-b border-transparent group-hover:border-foreground transition-all">pazzoamani@gmail.com</span>
            </a>
            <a
              href="https://github.com/amani-patrick"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="text-lg border-b border-transparent group-hover:border-foreground transition-all">github.com/amani-patrick</span>
            </a>
          </div>
          <p className="mt-20 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amani Patrick. Built with passion.
          </p>
        </section>

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={modalData}
        />
      </div>
    </div>
  );
};

export default Index;

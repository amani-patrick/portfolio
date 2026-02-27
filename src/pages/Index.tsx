import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Github, Mail, Search, ChevronRight, BookOpen } from "lucide-react";
import { Toolkit } from "@/components/Toolkit";
import { ProjectCard } from "@/components/ProjectCard";
import { EACard } from "@/components/EACard";
import { DetailModal } from "@/components/DetailModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const allProjects = [
  {
    name: "SmartSheet AI",
    desc: "AI-powered spreadsheet automation tailored to your needs — natural language processing for complex formulas and data analysis.",
    category: "Web Apps",
    tags: ["React", "AI", "Node.js"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "Prompt AI",
    desc: "This is a web app which enhances user prompt through using gpt 4 you can ask it anything and it will optimize it.",
    category: "Web Apps",
    tags: ["Next.js", "GPT-4", "TypeScript"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "NeuroLab Web",
    desc: "Web application for NeuroLab project which is mental health ai powered doctor that helps people with issues.",
    category: "Web Apps",
    tags: ["React", "HealthTech", "AI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "VulnScanner Pro",
    desc: "Automated web application vulnerability scanner for identifying common security flaws like XSS and SQLi.",
    category: "Cyber Security",
    tags: ["Security", "Python", "Pentesting"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60"
  },
  {
    name: "EduSumit Mobile",
    desc: "Native mobile application for the EduSumit educational platform.",
    category: "Mobile",
    tags: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60"
  },
];

const allEas = [
  {
    name: "HFT_EA Pro",
    desc: "High-frequency trading Expert Advisor optimized for low latency execution and scalp setups.",
    metrics: {
      profitFactor: "1.85",
      recoveryFactor: "4.2",
      lastTested: "Feb 2024",
      testedPeriod: "2 Years"
    },
    image: "https://images.unsplash.com/photo-1611974717483-36009a30931d?w=800&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&auto=format&fit=crop&q=60"
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
    image: "https://images.unsplash.com/photo-1518186239751-f717f1efd8a8?w=800&auto=format&fit=crop&q=60"
  },
];

const certifications = [
  "CompTIA Security+",
  "eJPT (eLearnSecurity Junior Penetration Tester)",
  "Junior Penetration Tester (TryHackMe)",
  "Foundations of Cyber Security"
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

        {/* Hero */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="md:text-3xl font-semibold tracking-tight mb-3 p-3">Amani Patrick</h1>
              <p className="text-lg md:text-xl text-foreground font-medium flex flex-wrap items-center gap-2">
                Developer & Forex EA Developer
                <span className="text-muted-foreground font-normal text-sm md:text-base">• {new Date().getFullYear()-2022}+ years experience</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/blogs"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all text-sm font-medium mr-2"
              >
                <BookOpen className="h-4 w-4" />
                Blogs
              </Link>
              <a
                href="https://github.com/amani-patrick"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:pazzoamani@gmail.com"
                className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <p className="text-muted-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl">
            Full-stack developer passionate about building scalable applications and automated trading solutions.
            Specialized in backend development, inventory systems, and quantitative trading algorithms.
            Proficient in <span className="text-foreground">Cyber Security</span>, especially <span className="text-foreground">Web App Pentesting</span>.
          </p>
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
                <p className="text-muted-foreground text-sm">A collection of things I've built and designed.</p>
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
              <span className="text-muted-foreground text-sm mt-1 md:mt-0">2021 — Present (3+ years)</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border/50 group">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Forex EA Developer</h3>
                <p className="text-muted-foreground">MQL4/MQL5 Strategy Implementation</p>
              </div>
              <span className="text-muted-foreground text-sm mt-1 md:mt-0">2019 — Present (5+ years)</span>
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

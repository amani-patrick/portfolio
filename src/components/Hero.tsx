
import { useEffect, useState } from "react";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ["Web Developer", "Penetration Tester", "AI Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState(roles[0]);
  const [isTyping, setIsTyping] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);

    const typingInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % roles.length;
        setIsTyping(true);
        setDisplayedRole(roles[newIndex]);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      <div
        className={`max-w-3xl text-center transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="mb-6 inline-block">
          <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            Hello, I'm
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-text">
          <span>AMANI</span> <span>PATRICK</span>
        </h1>

        <div className="h-14 mb-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
            I'm a{" "}
            <span className="text-primary relative inline-block min-w-[180px] sm:min-w-[220px]">
              {displayedRole}
              {isTyping && <span className="cursor-typing"></span>}
            </span>
          </h2>
        </div>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I craft elegant, secure solutions at the intersection of web development, cybersecurity, and artificial intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="btn-primary group"
          >
            View My Work
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/CV-AMANI-PATRICK.pdf"
            download
            className="btn-secondary group"
          >
            Download CV
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-float">
        <a
          href="#about"
          className="btn-icon hover:translate-y-1"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

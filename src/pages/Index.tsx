
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  useEffect(() => {
    // Add animation to skill bars on scroll
    const handleScroll = () => {
      document.querySelectorAll(".bg-primary").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const width = el.getAttribute("data-width") || "0%";
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          (el as HTMLElement).style.width = width;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
        <AudioPlayer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;

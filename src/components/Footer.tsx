
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-secondary/70 dark:bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">AMANI PATRICK</h2>
            <p className="text-muted-foreground mt-2">
              Web Developer · Penetration Tester · AI Enthusiast
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/amani-patrick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://twitter.com/amani_patrick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com/in/amani-patrick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pazzoamani@gmail.com"
              className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:pazzoamani@gmail.com" className="hover:text-primary transition-colors">
                  pazzoamani@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+250790174377" className="hover:text-primary transition-colors">
                  +250 790 174 377
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">Projects</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <div className="space-y-2">
              <a href="#certificates" className="block text-muted-foreground hover:text-primary transition-colors">Certificates</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="/CV-AMANI-PATRICK.pdf" download className="block text-muted-foreground hover:text-primary transition-colors">Download CV</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} AMANI PATRICK. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

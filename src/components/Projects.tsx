
import { useState, useEffect } from "react";
import { projects } from "@/utils/data";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(projects.length).fill(false));

  const handleImageLoad = (index: number) => {
    const newIsLoaded = [...isLoaded];
    newIsLoaded[index] = true;
    setIsLoaded(newIsLoaded);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-24"
                }`}
              >
                <div
                  className={`blur-load ${isLoaded[index] ? "loaded" : ""}`}
                  style={{ backgroundImage: `url(${project.image}?blur=200&w=100)` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-4 right-4 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div
              className="animate-fade-in transition-all duration-500"
              key={activeIndex}
            >
              <h3 className="text-2xl font-bold mb-4">{projects[activeIndex].title}</h3>
              <p className="text-muted-foreground mb-6">
                {projects[activeIndex].description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {projects[activeIndex].tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-primary/10 text-primary text-sm px-4 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={projects[activeIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href={projects[activeIndex].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md glass-card hover:bg-white/30 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 stagger-animate">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden shadow-lg animated-card animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div
                className={`blur-load h-48 ${isLoaded[index] ? "loaded" : ""}`}
                style={{ backgroundImage: `url(${project.image}?blur=200&w=100)` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary text-xs px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium inline-flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium inline-flex items-center gap-1 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

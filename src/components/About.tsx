
import { GraduationCap } from "lucide-react";
import { education } from "@/utils/data";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-ratio-1/1 w-full h-full relative">
                <img
                  src="/ee.jpg"
                  alt="AMANI Patrick"
                  className="object-cover w-full h-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-3">
                  <div className="glass-card px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">2+ Years Experience</span>
                  </div>
                  <div className="glass-card px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">7+ Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4">
              I'm a passionate technologist focused on creating secure, intelligent solutions
            </h3>
            <p className="text-muted-foreground mb-6">
              Based in Kigali, Rwanda, I bring expertise spanning web development, cybersecurity, and artificial intelligence
              to every project. My approach combines creative problem-solving with a deep commitment to security and performance.
            </p>
            <p className="text-muted-foreground mb-8">
              I'm constantly exploring the latest technologies and methodologies, driven by a 
              curiosity to understand how things work and how they can be improved. Whether it's 
              building intuitive web interfaces, conducting thorough security assessments, or 
              implementing AI solutions, I strive for excellence in everything I do.
            </p>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Education</h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <GraduationCap size={20} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium">{edu.degree}</h5>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution} | {edu.year}
                      </p>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

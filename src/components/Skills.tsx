
import { useState } from "react";
import { skills } from "@/utils/data";
import { cn } from "@/lib/utils";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skills[0].category);

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {skills.map((skillCategory) => (
            <button
              key={skillCategory.category}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300",
                activeCategory === skillCategory.category
                  ? "bg-primary text-white shadow-lg"
                  : "glass-card hover:bg-white/30"
              )}
              onClick={() => setActiveCategory(skillCategory.category)}
            >
              {skillCategory.category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animate">
          {skills
            .find((s) => s.category === activeCategory)
            ?.items.map((skill, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl animated-card skill-card animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <skill.icon size={24} className="text-primary skill-icon" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary rounded-full h-2.5 mb-2">
                  <div
                    className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                    style={{
                      width: `0%`,
                      animation: `growWidth 1.5s ease-out forwards ${0.2 + index * 0.1}s`,
                    }}
                    data-width={`${skill.level}%`}
                  ></div>
                </div>
                <p className="text-right text-sm text-muted-foreground">
                  {skill.level}%
                </p>
              </div>
            ))}
        </div>
      </div>

      <style>
        {`
          @keyframes growWidth {
            from { width: 0%; }
            to { width: var(--width); }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;

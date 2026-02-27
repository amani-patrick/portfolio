import React from 'react';

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Figma",
    "React Native", "Supabase", "PostgreSQL", "Python", "Spring Boot", "Java", "NestJS", "MongoDB",
    "FastApi", "Docker", "Git", "Github","MQL5/MQL4"
];

export const Toolkit = () => {
    return (
        <section className="mb-20">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">toolkit</h2>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-base md:text-lg font-medium text-foreground/80">
                {skills.map((skill, index) => (
                    <React.Fragment key={skill}>
                        <span className="hover:text-foreground transition-colors cursor-default">{skill}</span>
                        {index < skills.length - 1 && (
                            <span className="text-muted-foreground/40 font-normal">·</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Toolkit;

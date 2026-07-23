import { skills } from "@/lib/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Skills &amp;{" "}
            <span className="text-primary-600 dark:text-primary-400">Technologies</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={(index % 6) * 50}>
              <div className="glass-light rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-12 h-12 transition-all duration-300"
                    style={{ filter: `drop-shadow(0 0 8px ${skill.color}20)` }}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  {skill.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

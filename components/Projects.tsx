import { ExternalLink, Github, Lightbulb, Lock, Star } from "lucide-react";
import { getSortedProjects } from "@/lib/projects";
import ProjectCover from "./ProjectCover";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = getSortedProjects();

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured{" "}
            <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and the real-world
            problems each one solves
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 100}>
              <div className="project-card group glass-light rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                {/* Cover: logos of the languages/technologies used */}
                <div className="relative">
                  <ProjectCover title={project.title} coverTech={project.coverTech} />

                  {project.priority ? (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-accent-500 to-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg inline-flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Latest Project
                      </span>
                    </div>
                  ) : project.featured ? (
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold mb-3 text-neutral-800 dark:text-neutral-200">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem it solves */}
                  <div className="mb-4 p-4 rounded-xl bg-primary-50 dark:bg-primary-950/40 border border-primary-100 dark:border-primary-900">
                    <div className="flex items-center gap-2 mb-2 text-primary-700 dark:text-primary-300 font-semibold text-sm">
                      <Lightbulb className="w-4 h-4" />
                      Problem it solves
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Site
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <span className="flex-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 cursor-default">
                        <Lock className="w-4 h-4" />
                        Private Project
                      </span>
                    )}
                    {project.secondaryGithubUrl && (
                      <a
                        href={project.secondaryGithubUrl.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-neutral-800 hover:bg-neutral-900 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        {project.secondaryGithubUrl.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

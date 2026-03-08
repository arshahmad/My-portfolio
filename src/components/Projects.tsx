import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "EaseOnTap",
    subtitle: "Attendance & Student Management Dashboard",
    description:
      "A role-based administrative dashboard designed for educational institutions to manage attendance tracking, student records, and academic data workflows.",
    points: [
      "Built interactive dashboards for teachers and administrators to manage student data, attendance records, and project activities.",
      "Implemented REST API integrations for real-time data updates across multiple modules including attendance tracking and student management.",
      "Designed modular and reusable UI components to support scalable dashboard development and consistent user experience.",
      "Optimized data handling and UI rendering for efficient management of large student datasets.",
    ],
    tech: ["React", "TypeScript", "REST APIs", "Redux", "Tailwind CSS"],
  },
  {
    title: "Personal Portfolio",
    subtitle: "Developer Portfolio Website",
    description:
      "A responsive developer portfolio showcasing projects, technical expertise, and professional experience built with modern frontend technologies and a focus on performance.",
    points: [
      "Designed with a component-driven architecture for clean maintainability and scalability.",
      "Implemented dark/light mode with persistent preferences and smooth transitions.",
      "Built with accessibility best practices and responsive design for all screen sizes.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "React Icons"],
    link: "https://www.btw-itsarsh.in",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-14 scroll-mt-16">
      <ScrollReveal>
        <SectionTitle
          title="Projects"
          subtitle="A selection of projects I've built and contributed to."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 150}>
            <div className="group p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all card-hover flex flex-col h-full">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all flex-shrink-0 hover:scale-110"
                    aria-label={`Visit ${project.title}`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <ul className="space-y-2 mb-4 flex-grow">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed"
                  >
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">
                      &#9656;
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-teal-500/10 text-teal-600 dark:text-teal-400 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;

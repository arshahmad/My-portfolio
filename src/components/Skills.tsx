import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Next.js",
      "Angular",
    ],
  },
  {
    title: "State Management & Architecture",
    skills: [
      "Redux",
      "Redux-Saga",
      "Context API",
      "Component-Driven Development",
      "Scalable UI Architecture",
      "Reusable Component Libraries",
    ],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "APIs & Data",
    skills: [
      "REST APIs",
      "WebSockets",
      "Async Data Handling",
      "Data Visualization",
    ],
  },
  {
    title: "Web Fundamentals",
    skills: [
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Accessibility (WCAG)",
      "Progressive Enhancement",
    ],
  },
  {
    title: "Testing",
    skills: ["Unit Testing", "Integration Testing", "Stress Testing"],
  },
  {
    title: "Performance & Tools",
    skills: [
      "Code Splitting",
      "Lazy Loading",
      "AWS (S3, Amplify)",
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "Postman",
      "Figma",
      "JIRA",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-14 scroll-mt-16">
      <ScrollReveal>
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I work with to build exceptional web experiences."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((category, index) => (
          <ScrollReveal key={category.title} delay={index * 100}>
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all card-hover h-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:scale-105 cursor-default"
                  >
                    {skill}
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

export default Skills;

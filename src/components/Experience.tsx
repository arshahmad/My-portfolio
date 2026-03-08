import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import { FaBriefcase } from "react-icons/fa";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Devslane (Escecion Technologies Pvt. Ltd.)",
    location: "Noida, India",
    period: "Aug 2021 - Present",
    current: true,
    points: [
      "Architected and maintained scalable React-based frontend applications supporting platforms used by 2M+ users, improving modularity and reducing feature delivery time by 25%.",
      "Built data-driven dashboards integrating multiple REST APIs to visualize financial and operational metrics across large datasets, enabling faster decision-making for platform users.",
      "Designed and implemented complex UI systems including calendar scheduling interfaces, financial analytics views, and content management dashboards supporting asynchronous workflows.",
      "Optimized API data fetching and frontend rendering strategies, reducing page load times by up to 40% and significantly improving application responsiveness.",
      "Developed reusable UI components and shared utilities, reducing duplicated code by 30% and improving development efficiency across applications.",
      "Integrated third-party services for secure payment processing and transactional notifications, enabling automated workflows for platform operations.",
      "Designed frontend systems capable of handling large datasets and multiple platform integrations, improving scalability and maintainability.",
      "Collaborated with backend engineers, designers, and product stakeholders to own end-to-end feature delivery, reducing post-release issues by 30%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Devslane (Escecion Technologies Pvt. Ltd.)",
    location: "Noida, India",
    period: "Feb 2019 - Jul 2021",
    points: [
      "Developed responsive frontend modules using Angular and Angular Material for enterprise operational platforms.",
      "Built reusable UI components and modular frontend structures, reducing feature development time by 20% across multiple modules.",
      "Implemented real-time interactions using WebSockets, enabling collaborative features and dynamic activity updates.",
      "Collaborated with backend engineers to integrate frontend modules with REST APIs and microservices, improving system reliability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-14 scroll-mt-16">
      <ScrollReveal>
        <SectionTitle title="Experience" />
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-500 via-cyan-500 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="relative pl-12 md:pl-14">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-3 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 border-[3px] border-white dark:border-gray-900 z-10 shadow-sm shadow-teal-500/50" />

                <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-colors card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <FaBriefcase className="text-teal-500 text-sm" />
                        {exp.title}
                      </h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mt-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {exp.location}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        exp.current
                          ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                        <span className="text-teal-500 mt-1.5 flex-shrink-0 text-xs">
                          &#9670;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

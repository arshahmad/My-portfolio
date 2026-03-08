import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-14 scroll-mt-16">
      <ScrollReveal>
        <SectionTitle title="Education" />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-2xl">
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-colors card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-teal-500/10 text-teal-500 flex-shrink-0">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Bachelor of Technology
                </h3>
                <p className="text-teal-600 dark:text-teal-400 font-medium mt-1">
                  Information Technology
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Ajay Kumar Garg Engineering College, Ghaziabad
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    2017 - 2021
                  </span>
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20">
                    CGPA: 8.3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Education;

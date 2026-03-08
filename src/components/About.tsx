import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import useCountUp from "../hooks/useCountUp";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "M+", label: "Users Impacted" },
  { value: 40, suffix: "%", label: "Performance Boost" },
];

const StatCard = ({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, 1500, isVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-colors card-hover"
      >
        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          {count}
          {suffix}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium">
          {label}
        </p>
      </div>
    </ScrollReveal>
  );
};

const About = () => {
  return (
    <section id="about" className="py-14 scroll-mt-16">
      <ScrollReveal>
        <SectionTitle title="About Me" />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="max-w-4xl">
          <p className="text-md md:text-lg leading-8 text-gray-700 dark:text-gray-300">
            Frontend Engineer with{" "}
            <span className="text-teal-500 font-medium">
              5+ years of experience
            </span>{" "}
            building scalable web applications used by millions of users,
            specializing in React, TypeScript, and modern JavaScript frameworks.
            I design{" "}
            <span className="text-teal-500 font-medium">
              modular frontend architectures
            </span>
            , build analytics dashboards, and integrate complex REST APIs for
            SaaS platforms and data-driven applications.
          </p>
          <p className="text-md md:text-lg leading-8 text-gray-700 dark:text-gray-300 mt-4">
            I thrive on owning{" "}
            <span className="text-teal-500 font-medium">
              end-to-end feature delivery
            </span>
            , optimizing application performance, and collaborating with
            cross-functional teams to ship intuitive, high-quality user
            experiences that make a real difference.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={i * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default About;

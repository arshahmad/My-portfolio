interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
      {title}
      <span className="text-teal-500">.</span>
    </h2>
    <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mt-3 rounded-full" />
    {subtitle && (
      <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl text-md md:text-lg leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;

import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const navigate = (link: string) => window.open(link, "_blank");
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-gray-200 dark:border-gray-800 mt-10 scroll-mt-16"
    >
      <div className="px-6 md:px-16 lg:px-24 py-12">
        <ScrollReveal>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Let's Connect<span className="text-teal-500">.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-md mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a friendly chat.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="mailto:arshahmadhdi@gmail.com"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all text-sm hover:scale-105"
            >
              <HiOutlineMail className="text-lg" />
              arshahmadhdi@gmail.com
            </a>
            <a
              href="tel:+918448214808"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all text-sm hover:scale-105"
            >
              <HiOutlinePhone className="text-lg" />
              +91-8448214808
            </a>
            <a
              href="https://www.btw-itsarsh.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all text-sm hover:scale-105"
            >
              <FaGlobe className="text-lg" />
              btw-itsarsh.in
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() =>
                navigate("https://www.linkedin.com/in/btwitsarsh/")
              }
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] hover:bg-blue-50 dark:hover:bg-gray-700 transition-all hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="text-xl" />
            </button>
            <button
              onClick={() => navigate("https://twitter.com/btw_itsarsh")}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110 active:scale-95"
              aria-label="Twitter"
            >
              <RiTwitterXFill className="text-xl" />
            </button>
          </div>

          <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              &copy; {currentYear} Arsh Ahmad. Crafted with care.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;

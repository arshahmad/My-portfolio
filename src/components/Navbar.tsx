import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "/Arsh_resume.pdf";
    link.download = "Arsh_resume.pdf";
    link.click();
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="px-6 md:px-16 lg:px-24 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-burtons dark:text-white">
          developedByArsh
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <BsFillSunFill className="text-xl text-yellow-400" />
            ) : (
              <BsFillMoonStarsFill className="text-xl text-gray-700" />
            )}
          </button>
          <button
            onClick={downloadPdf}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all hover:scale-105 active:scale-95"
          >
            Resume
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <HiX className="text-xl dark:text-white" />
            ) : (
              <HiMenu className="text-xl dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors text-sm font-medium py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

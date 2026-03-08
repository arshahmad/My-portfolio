import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300 cursor-none">
        <CustomCursor />
        <Navbar />
        <main className="px-6 md:px-16 lg:px-24">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

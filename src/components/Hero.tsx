import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import Typist from "react-typist-component";
import { Tilt } from "react-tilt";

const Hero = () => {
  const navigate = (link: string) => window.open(link, "_blank");

  const tiltOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative py-10">
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-float-1" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float-2" />
      </div>

      <div className="text-center relative z-10">
        {/* Profile picture with entrance + pulse ring */}
        <div className="hero-enter-scale">
          <Tilt
            options={tiltOptions}
            className="relative bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full w-36 h-36 md:w-44 md:h-44 mx-auto mb-6 overflow-hidden ring-4 ring-teal-500/20 animate-pulse-ring"
          >
            <img
              className="object-cover w-full h-full"
              src="/profile-transparent.png"
              alt="Arsh Ahmad"
            />
          </Tilt>
        </div>

        {/* Animated gradient name */}
        <h1 className="hero-enter hero-delay-1 text-5xl md:text-7xl font-bold">
          <span className="animate-gradient bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500 bg-clip-text text-transparent">
            Arsh Ahmad
          </span>
        </h1>

        <h2 className="hero-enter hero-delay-2 text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-3 font-medium tracking-wide">
          Software Engineer
        </h2>

        <div className="hero-enter hero-delay-3 max-w-2xl mx-auto mt-6 px-4">
          <p className="text-md md:text-lg leading-8 text-gray-600 dark:text-gray-400">
            <Typist>
              Building scalable web applications for{" "}
              <span className="text-teal-500 font-medium">
                millions of users
              </span>{" "}
              with{" "}
              <span className="text-teal-500 font-medium">
                React, TypeScript & modern JavaScript
              </span>
              . Turning complex problems into elegant, performant interfaces.
            </Typist>
          </p>
        </div>

        <div className="hero-enter hero-delay-4 flex justify-center gap-4 mt-6">
          <button
            onClick={() =>
              navigate("https://www.linkedin.com/in/btwitsarsh/")
            }
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] hover:bg-blue-50 dark:hover:bg-gray-700 transition-all text-xl hover:scale-110 active:scale-95"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />
          </button>
          <button
            onClick={() => navigate("https://twitter.com/btw_itsarsh")}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-xl hover:scale-110 active:scale-95"
            aria-label="Twitter"
          >
            <RiTwitterXFill />
          </button>
          <button
            onClick={() => navigate("mailto:arshahmadhdi@gmail.com")}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-gray-700 transition-all text-xl hover:scale-110 active:scale-95"
            aria-label="Email"
          >
            <HiOutlineMail />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-teal-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

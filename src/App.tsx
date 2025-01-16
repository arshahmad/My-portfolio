import { useState } from "react";
import "../src/index.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import "./App.css";
import Typist from "react-typist-component";
import { Tilt } from "react-tilt";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const downloadPdf = () => {
    const link = document.createElement("a");

    link.href = "/Arsh_resume.pdf";

    link.download = "Arsh_resume.pdf";

    link.click();
  };

  const navigate = (link: string) => {
    window.open(link, "_blank");
  };
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className={darkMode ? "dark" : ""} data-cursor-color="#61dbfb">
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">developedByArsh</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
                  onClick={downloadPdf}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white">
              Arsh Ahmad
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Engineer
            </h3>
            <div>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-200">
                <Typist>
                  Working professional providing services for Frontend
                  development and other UI needs. I have completed my bachelor's
                  degree in{" "}
                  <span className="text-teal-600">Information Technology</span>{" "}
                  from{" "}
                  <span className="text-teal-600">
                    Dr. A.P.J. Abdul Kalam Technical University
                  </span>{" "}
                  with a <span className="text-teal-600">CGPA of 8.3.</span>{" "}
                  Join me down below, and let's get cracking.
                </Typist>
              </p>
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillLinkedin
              className="cursor-pointer hover:text-[#0A66C2] "
              onClick={() =>
                navigate("https://www.linkedin.com/in/btwitsarsh/")
              }
            />
            <RiTwitterXFill
              className="cursor-pointer hover:text-[#000000] "
              onClick={() => navigate("https://twitter.com/btw_itsarsh")}
            />
          </div>
          <Tilt
            options={defaultOptions}
            className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:w-96 md:h-96 mt-20 mx-auto overflow-hidden"
          >
            <img
              className="object-cover w-full h-full"
              src={"/profile-transparent.png"}
              alt="Img"
            />
          </Tilt>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">About </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Experienced and forward-thinking Software Engineer with over 3.5
              years of expertise in a diverse array of front-end
              technologies,including
              <span className="text-teal-500">
                {" "}
                ReactJS, Angular, NextJS, JavaScript, TypeScript, HTML5, CSS,
                Redux, Bootstrap, and TailwindCSS.
              </span>
              <br />
              With a robust foundation in web development and an unwavering
              commitment to staying at the forefront of
              <span className="text-teal-500"> technology trends </span>, I am
              deeply committed to delivering innovative solutions and fostering
              technical excellence within a collaborative team environment. My
              track record extends beyond developing meticulously well-tested
              software solutions
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I also take pride in mentoring junior developers, helping them
              realize their full potential, all while maintaining a cohesive and
              high-performing team dynamic.
            </p>{" "}
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a software development
              engineer, I've done work for
              <span className="text-teal-500"> devslane </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <br />
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              NOTE: "Most of my projects are on{" "}
              <b className="text-teal-500">React.js</b> but could not display
              those here due to privacy policy"
            </p>
          </div>
          <div className="lg:flex gap-10">
            <Tilt
              options={defaultOptions}
              data-cursor-magnetic
              className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1"
            >
              <img src={"/design.png"} width={100} height={100} alt="img" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">BusinessOnBot</h3>
              <p className="py-2">
                Developed a comprehensive project demonstrating CRUD operations
                in Angular, seamlessly integrating with APIs, and efficiently
                utilizing the Redux store.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Used</h4>
              <p className="text-gray-800 py-1">Angular</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Redux</p>
              <p className="text-gray-800 py-1">Html/Css</p>
            </Tilt>
            <Tilt
              options={defaultOptions}
              data-cursor-magnetic
              className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
            >
              <img src={"/code.png"} width={100} height={100} alt="img" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">PWA</h3>
              <p className="py-2">
                Designed and developed a Progressive Web Application in Angular,
                implementing advanced concepts of service workers to enhance
                performance and user experience.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Used</h4>
              <p className="text-gray-800 py-1">Angular</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Html/Css</p>
            </Tilt>
            <Tilt
              options={defaultOptions}
              data-cursor-magnetic
              className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
            >
              <img src={"/consulting.png"} width={100} height={100} alt="img" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Blog out</h3>
              <p className="py-2">
                Developed a minimalist blog website by leveraging Redwood JS and
                GraphQL technologies,.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Used</h4>
              <p className="text-gray-800 py-1">Redwood JS</p>
              <p className="text-gray-800 py-1">Typescript</p>
              <p className="text-gray-800 py-1">Html/Css</p>
            </Tilt>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills</h3>
            <div className="py-6 px-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="list-divide divide-teal-600 divide-y-2 text-teal-600">
                  <h2 className="text-xl font-semibold mb-4">Technologies:</h2>
                  <ul className="list-disc list-inside dark:text-white">
                    <li>ReactJs</li>
                    <li>NextJs</li>
                    <li>Angular</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>Redux</li>
                    <li>Akita</li>
                    <li>HTML</li>
                    <li>CSS/SASS</li>
                    <li>Tailwind</li>
                    <li>Angular Material / MaterialUI</li>
                    <li>MySql (Basic)</li>
                  </ul>
                </div>
                <div className="list-divide divide-teal-600 divide-y-2 text-teal-600">
                  <h2 className="text-xl font-semibold mb-4">
                    Project Management:
                  </h2>
                  <ul className="list-disc list-inside dark:text-white">
                    <li>JIRA</li>
                    <li>Agile</li>
                    <li>UI</li>
                    <li>Systems Analysis</li>
                    <li>Decision Making</li>
                    <li>Test</li>
                  </ul>
                </div>
                <div className="list-divide divide-teal-600 divide-y-2 text-teal-600">
                  <h2 className="text-xl font-semibold mb-4">Other:</h2>
                  <ul className="list-disc list-inside dark:text-white">
                    <li>REST API</li>
                    <li>JEST</li>
                    <li>Problem Solving</li>
                    <li>Postman</li>
                    <li>Git</li>
                    <li>Github/Bitbucket</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-8 dark:text-white">Work experience </h3>
            <div className="p-6 rounded-lg text-white shadow-lg">
              <div className="mb-6">
                <p className="text-lg font-semibold text-teal-600">
                  Software Engineer - Devslane
                </p>
                <p className="text-md text-teal-600 py-2 leading-8 ">
                  July 2021 - Present
                </p>
              </div>
              <div className="mb-4">
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  3.5+ years of hands-on experience in{" "}
                  <span className="text-teal-600">
                    ReactJS, Angular, NextJS, JavaScript, TypeScript, HTML5,
                    CSS, Redux, Bootstrap, and TailwindCSS
                  </span>
                  .
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Proficiency in{" "}
                  <span className="text-teal-600">
                    JavaScript MVC, SASS/Less, and DOM manipulation
                  </span>
                  .
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Solid experience with popular React.js workflows (redux-saga).
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Expertise in UI Build Frameworks{" "}
                  <span className="text-teal-600">(NPM)</span> and JS Testing
                  Frameworks.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Known for engineering cross-browser and cross-device compliant
                  code for user interface development.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Familiarity with newer specifications of{" "}
                  <span className="text-teal-600">EcmaScript</span>.
                </p>
              </div>
              <div className="mb-4">
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Proficient in analyzing and reviewing project requirements and
                  delivering design documents within schedule.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Demonstrated ability in developing, modifying, and reviewing
                  code, ensuring alignment with design specifications.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Experienced in crafting unit test plans, test cases, and test
                  data, and conducting thorough unit testing while meticulously
                  documenting results.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Provided invaluable support for testing efforts, ensuring the
                  quality of deliverables.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Cultivated a congenial work environment and actively engaged
                  in technical mentoring.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Made significant contributions to knowledge management
                  initiatives.
                </p>
              </div>
            </div>
            {/* <div className="p-6 rounded-lg text-white shadow-lg">
              <div className="mb-6">
                <p className="text-lg font-semibold text-teal-600">
                  Frontend Engineer Intern - Devslane
                </p>
                <p className="text-md text-teal-600 py-2 leading-8 ">
                  Feb 2019 - July 2021
                </p>
              </div>
              <div className="mb-4">
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Played a key role in building E2E frontend applications.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Integrated multiple APIs and third-party APIs in frontend
                  applications .
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Made UI that matched to the given mockups exactly{" "}
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Worked on an Erosion control system, which records multiple
                  type of inspections and made the application PWA using service
                  workers.
                </p>
                <p className="text-md leading-8 text-gray-800 dark:text-gray-200">
                  Worked on ERP project of the company, added features such as
                  adding removing and updating of employed, projects etc.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

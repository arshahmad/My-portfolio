import React, {useState} from 'react';
import "../src/index.css"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import logo from './logo.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
      <div className={darkMode ? "dark" : ""}>
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
                      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                      href="#"
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
                Frontend Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
                Working professionsal providing services for Frontend development
                and other UI needs. Join me down below and let's get cracking.
              </p>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
            </div>
            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:w-96 md:h-96 mt-20 mx-auto overflow-hidden">
              <img src={"/dev-ed-wave.png"} alt="Img"/>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white">Services I offer </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>{" "}
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <img src={"/design.png"} width={100} height={100} alt="img" />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <img src={"/code.png"} width={100} height={100} alt="img" />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let's make it a
                  reality.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <img src={"/consulting.png"} width={100} height={100} alt="img" />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <img
                    className="rounded-lg object-cover"
                    src={"/web1.png"}
                    width={"100"}
                    height={"100"}
                    alt="img"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                    className="rounded-lg object-cover"
                    width={"100"}
                    height={"100"}
                    alt="img"
                    src={"/web2.png"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                    className="rounded-lg object-cover"
                    width={"100"}
                    height={"100"}
                    alt="img"
                    src={"/web3.png"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                    className="rounded-lg object-cover"
                    width={"100"}
                    height={"100"}
                    alt="img"
                    src={"/web4.png"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                    className="rounded-lg object-cover"
                    width={"100"}
                    height={"100"}
                    alt="img"
                    src={"/web5.png"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                    className="rounded-lg object-cover"
                    width={"100"}
                    height={"100"}
                    alt="img"
                    src={"/web6.png"}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}

export default App;

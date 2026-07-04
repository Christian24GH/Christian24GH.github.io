

import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Skills from "./Skills.tsx";

function App() {
    return(
      <>
        <div id="home" className="">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center p-4 lg:p-8 gap-8 sm:ms-32 min-h-screen">
            {/**
             <div
              className="
                aspect-square
                border
                rounded-2xl
                w-64
                sm:w-80
                lg:w-auto
                lg:h-[calc(100vh-5rem)]
                shrink-0
              "
            />
             */}
            <div className="text-center lg:text-left flex flex-col items-center justify-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Hi, Christian A. Bola
              </h1>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-6">
                Fullstack Web Developer
              </h2>
            </div>

          </div>
        </div>

        <div id="skills" className="w-full min-h-48 h-auto bg-black p-4">
          <Skills />
        </div>

        <div  id="projects" className="w-full min-h-48 h-fit p-8 bg-white pt-16">
          <Projects />
        </div>

        <div  id="about" className="w-full min-h-48 h-fit p-8 bg-white pt-16">
          <About />
        </div>
      </>
    )
}

export default App

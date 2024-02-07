import Hero from "./component/Hero";
import Contact from "./component/Contact";
import ProjectCard from "./component/ProjectCard";
import WhatKnow from "./component/WhatKnow";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="bg-[#14131A] overflow-hidden font-serif">
      <Contact />
      <Hero />
      <div className="text-white">
        <h1 className="text-3xl font-bold m-4">Project</h1>
        <div className="flex flex-wrap justify-center lg:justify-self-center md:justify-center">
        <a href="https://abhaynegi001.github.io/Calculator.github.io/" target="_blank">
        <ProjectCard
            title="Calculater"
            description="calculater is made using Html , css and javascript and That is my self update project. I added a history Features and more on."
            images="src/images/calculater.jpg"
          />
        </a>
        <a href="https://abhaynegi001.github.io/stone_paper_scissors/" target="_blank">
        <ProjectCard
            title="Stone,Paper & Scissors"
            description="Stone,Paper and Scissor game is made up on Html,Css and javascript and it has a new features"
            images="src/images/rock-paper-scissors.jpg"
          />
        </a>
          <ProjectCard
            title="calculater"
            description="calculater is made using Html , css and javascript"
            images="src/images/calculater.jpg"
          />
          <ProjectCard
            title="calculater"
            description="calculater is made using Html , css and javascript"
            images="src/images/calculater.jpg"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold m-4 text-white">What I Know</h1>
        <div>
          <WhatKnow/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

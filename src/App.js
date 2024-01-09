import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills";
import About from "./components/about/About"
import Social from "./components/social/Social";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Skills/>
      <About/>
      <Social/>
    </div>
  );
}

export default App;

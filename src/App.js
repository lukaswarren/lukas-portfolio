import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;

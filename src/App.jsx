import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Documents from "./components/documents/Documents";
import BackgroundSkills from "./components/background/BackgroundSkills";

function App() {
  return (
    <>
      <BackgroundSkills />
      <Nav />
      <Home />

      <About />
      <Skills />
      <Projects />
      <Documents />

      <Footer />
    </>
  );
}

export default App;

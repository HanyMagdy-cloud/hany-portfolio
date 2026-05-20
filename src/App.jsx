import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Documents from "./components/documents/Documents";
import FloatingSkillsBackground from "./components/home/FloatingSkillsBackground";

function App() {
  return (
    <>
      {/* <FloatingSkillsBackground /> */}
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

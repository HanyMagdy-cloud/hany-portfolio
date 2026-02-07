import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Nav />
      <Home />

      <About />
      <Skills />
      <Projects />

      <Footer />
    </>
  );
}

export default App;

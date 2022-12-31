import "./App.css";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <Projects />
        <section id="about-section">
          <Skills />
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;

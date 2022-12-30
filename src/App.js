import './App.css';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;

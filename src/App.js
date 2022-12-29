import './App.css';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <Contact />
      </main>
    </>
  );
}

export default App;

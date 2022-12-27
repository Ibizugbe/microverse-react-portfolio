import './App.css';
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
      </main>
    </>
  );
}

export default App;

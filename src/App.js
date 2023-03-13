import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;

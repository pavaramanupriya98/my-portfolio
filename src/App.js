import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
    return (
        <div className="App">
            <Header/>
            <main className="pt-5 pb-3">
                <Hero/>
                <About/>
                <Projects/>
                <Skills/>
                <Experience/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;

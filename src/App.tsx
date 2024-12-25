import Header from "./components/shared/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import "./App.scss";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import About from "./components/Container/About";
import Contact from "./components/Container/Contact";
import Footer from "./components/Container/Footer";
import HardSkills from "./components/Container/HardSkills/index";
import Home from "./components/Container/Home";
import Navbar from "./components/Container/Navbar";
import Projects from "./components/Container/Projects";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <HardSkills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

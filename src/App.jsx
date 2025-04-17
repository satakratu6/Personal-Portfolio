import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./pages/Navigation";
import Header from "./pages/Header";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

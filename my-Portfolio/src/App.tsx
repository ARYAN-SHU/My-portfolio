import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/project";
import Certifications from "./components/certification";
import OrganizationProjects from "./components/organizationProjects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OrganizationProjects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="about">
        <Services />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
      
    </div>
  );
};

export default App;

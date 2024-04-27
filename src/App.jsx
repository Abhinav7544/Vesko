import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Portfolio2 from "./components/portfolio2/Portfolio2";
import Portfolio3 from "./components/portfolio3/Portfolio3";
import Portfolio4 from "./components/portfolio4/Portfolio4";
import Services from "./components/services/Services";
import Sidebar from "./components/sidebar/Sidebar";

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
      <Portfolio2 />
      <Portfolio3 />
      <Portfolio4 />
      <section id="contact">
        <Contact />
      </section>
      
    </div>
  );
};

export default App;

import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Process from "./Process";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const PortfolioWebsite = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <Process />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default PortfolioWebsite;
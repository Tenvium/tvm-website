import React from "react";
import About from "./components/about.component";
import AllInOne from "./components/allInOne.components";
import Footer from "./components/footer.component";
import Hero from "./components/hero.component";
import Navbar from "./components/navbar.component";
import Validator from "./components/validator.component";
import Support from "./components/support.component";
import Roadmap from "./components/roadmap.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Roadmap />
      <Validator />
      <Footer />
    </>
  );
};

export default App;

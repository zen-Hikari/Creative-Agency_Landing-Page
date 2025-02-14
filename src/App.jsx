import { useEffect } from "react";
import luxy from "luxy.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import About from "./components/About";
import Collab from "./components/Collab";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Service from "./components/Service";
import Testi from "./components/Testimonial";

function App() {
  useEffect(() => {
    // Inisialisasi Luxy.js hanya untuk layar besar
    luxy.init({
      wrapper: "#luxy",
      wrapperSpeed: 0.08,
    });

    // Inisialisasi AOS
    AOS.init({
      duration: 700,
      offset: 100,
    });

    // Memastikan AOS tetap mendeteksi scroll dalam Luxy.js
    const handleScroll = () => {
      AOS.refresh();
    };

    document.querySelector("#luxy")?.addEventListener("scroll", handleScroll);

    return () => {
      document
        .querySelector("#luxy")
        ?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="luxy">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Testi />
      <Collab />
      <Footer />
    </main>
  );
}

export default App;

import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="">
      <Navbar />
      <div className="hero-background">
        <Hero />
      </div>
      <Trusted />
      <Features />
      <Footer />
    </main>
  );
}

export default App;

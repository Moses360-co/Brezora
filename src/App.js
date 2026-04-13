import React, { useState } from "react";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";


function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {/* Navbar ALWAYS visible */}
      <NavBar setPage={setPage} />

      {/* Page content ONLY changes */}
      <main>
        {page === "home" && <Home/>}
        {page === "about" && <About />}
        {page === "services" && <Services />}
        {page === "contact" && <Contact />}
      </main>

      {/* Footer ALWAYS visible */}
      <Footer />
    </>
  );
}

export default App;

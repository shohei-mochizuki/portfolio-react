import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation"; // SHOULD BE IN HEADER
import Project from "./components/Project";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;

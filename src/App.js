import React from "react";
import NavbarComponent from "./Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Home />
    </div>
  );
};

export default App;

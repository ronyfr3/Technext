import React from "react";
import NavbarComponent from "./navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./cards/Cards";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Cards />
    </div>
  );
};

export default App;

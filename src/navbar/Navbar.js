import React from "react";
import { Navbar } from "reactstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="d-flex bg-dark bg-gradient">
        <h4 className="mx-auto text-info">SpaceX</h4>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

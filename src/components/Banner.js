import React from "react";
import { Navbar } from "reactstrap";
import { RiSpaceShipFill } from "react-icons/ri";

const Banner = () => (
    <div>
      <Navbar className="d-flex align-items-center justify-content-center bg-dark bg-gradient">
        <RiSpaceShipFill className="text-primary display-5" />
        <h4 className=" text-primary">SpaceX Evolution</h4>
      </Navbar>
    </div>
);

export default Banner;

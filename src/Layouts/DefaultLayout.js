import React from "react";

//components
import Navbar from "../components/Navbar/navbar.component";
//import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    {props.children}
    </>
  );
};

export default DefaultLayout;
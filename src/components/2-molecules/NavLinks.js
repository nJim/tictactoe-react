import React from "react";
import NavLink from "../1-atoms/NavLink";

const NavLinks = ({menuState, handleClose}) => {
  const animation = () => (menuState ? "fadeIn" : "fadeOut");
  return (
    <ul className={`nav__links ${animation()}`} onClick={handleClose}>
      <NavLink url="/" label="Home" />
      <NavLink url="/play" label="Play" />
      <NavLink url="/about" label="About" />
      <NavLink url="/users" label="Settings" />
    </ul>
  );
}

export default NavLinks;

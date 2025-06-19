import React from "react";
import "../CSS/Header.css"
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">GOLAZO</h1>
      <div className="nav-links">
        <button onClick={() => console.log("News Clicked")}>News</button>
        <button onClick={() => console.log("Matches Clicked")}>Matches</button>
        <button onClick={() => console.log("Stats Clicked")}>Stats</button>
        <button onClick={() => console.log("Standings Clicked")}>Standings</button>
      </div>
      <button className="contact-btn">Contact us</button>
    </nav>
  );
}

export default Navbar;

import React, { useState } from 'react';
import "../CSS/Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
    // const [color, setColor] = useState('Black');
    // const [buttonText, setButtonText] = useState('Bright');

    // const changingColor = () => {
    //     setColor(prevColor => prevColor === 'Black' ? 'White' : 'Green');
    //     setButtonText(prevText => prevText === 'Bright' ? 'Dark' : 'Bright');
    // };
    return (
            <div className="Nav-Bar">
            <div className="Left-Nav-Bar">
              <h1><span className="Golazo">GOLAZO</span></h1>
            </div>
            <div className="Right-Nav-Bar">
              <nav>
                <ul type="none">
                  <li><Link to="/Home">Home</Link></li>
                  <li><Link to="/Series">Series</Link></li>
                  <li><Link to="Fixtures">Fixtures</Link></li>
                  <li><Link to="/StatsCorner">Stats Corner</Link></li>
                  <li><Link to="/Rankings">Rankings</Link></li>
                  <li><Link to="/">Profile</Link></li>
                </ul>
              </nav>    
            </div>
          </div>
    );
  }
  
  export default Navbar;
  
  {/* <a href="#Home.js">Home</a>
  <a href="#Series.js">Series</a>
  <a href="#Fixtures.js">Fixtures</a>
  <a href="#Stats.js">Stats Corner</a>
  <a href="#Rankings.js">Rankings</a> */}
  {/* <button className="Bright-Button" onClick={changingColor} style={{ backgroundColor: color}}>
      {buttonText}
  </button> */}
  {/* <button className="Bright-Button">Dark</button> */}
import React, { useState } from "react";
import "../CSS/Stats-Corner.css";

function StatsCorner() {
  const [iframeSrc, setIframeSrc] = useState("");

  return (
    <div className="Stats-Corner">
      <div className="Side-Bar">
        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Goals.html")}>
          Goal Scorers
        </a>
        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Assists.html")}>Assists</a>

        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Defence.html")}>
          Defender
        </a>
         <a href="#" onClick={() => setIframeSrc("/PLAYERS/Goals.html")}>
          Penalty Takers
        </a>
        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Assists.html")}>Penalty Stoppers</a>

        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Defence.html")}>
          FreeKick Takers
        </a>
         <a href="#" onClick={() => setIframeSrc("/PLAYERS/Goals.html")}>
          Most Offsides
        </a>
        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Assists.html")}>
          Most Fouls
        </a>

        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Defence.html")}>
          Most Yellow Cards
        </a>
       
      </div>
      <iframe src={iframeSrc} className="Points-Table"></iframe>
    </div>
  );
}

export default StatsCorner;

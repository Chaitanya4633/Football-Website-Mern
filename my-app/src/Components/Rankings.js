import React, { useState } from "react";
import "../CSS/Stats-Corner.css";

function StatsCorner() {
  const [iframeSrc, setIframeSrc] = useState("");

  return (
    <div className="Stats-Corner">
      <div className="Side-Bar">
        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Goals.html")}>
          Goaler ⚽
        </a>
        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Defence.html")}>Best Defender 👦</a>
        <a href="#" onClick={() => setIframeSrc("/PLAYERS/Assists.html")}>
          Assists 🆘
        </a>
        <a href="#" onClick={() => setIframeSrc("/HTML/Bundesliga.html")}>
          Bundesliga
        </a>
        <a href="#" onClick={() => setIframeSrc("/HTML/Eredivisie (Dutch League).html")}>
          Eredivisie (Dutch League)
        </a>
        <a href="#" onClick={() => setIframeSrc("/HTML/Ligue-1.html")}>
          Ligue 1
        </a>
        <a href="#" onClick={() => setIframeSrc("/HTML/ISL.html")}>
         ISL
        </a>
        <a
          href="#"
          onClick={() => setIframeSrc("/HTML/Scottish-Premiership.html")}
        >
          Scottish Premiership
        </a>
        <a
          href="#"
          onClick={() => setIframeSrc("/HTML/Belgian-Pro-League.html")}
        >
          Belgian Pro League
        </a>
      </div>
      <iframe src={iframeSrc} className="Points-Table"></iframe>
    </div>
  );
}

export default StatsCorner;

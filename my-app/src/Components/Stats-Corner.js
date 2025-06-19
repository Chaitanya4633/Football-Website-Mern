import React, { useState } from "react";
import "../CSS/Stats-Corner.css";

function StatsCorner() {
  const [iframeSrc, setIframeSrc] = useState("");

  return (
    <div className="Stats-Corner">
      <div className="Side-Bar">
        <a href="#" onClick={() => setIframeSrc("/HTML/Premier-League.html")}>Premier League</a>
        <a href="#" onClick={() => setIframeSrc("/HTML/La-Liga.html")}>
          La Liga
        </a>
        <a href="#" onClick={() => setIframeSrc("/HTML/Serie-A.html")}>
          Serie A
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

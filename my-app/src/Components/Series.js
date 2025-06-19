import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Series.css";

const footballData = [
  { id: 1, name: "Lionel Messi", image: "/images/Messie.png", link: "/player/messi" },
  { id: 2, name: "Cristiano Ronaldo", image: "/images/CR.png", link: "/player/ronaldo" },
  { id: 3, name: "Neymar Jr", image: "/images/neymar.png", link: "/player/neymar" },
  { id: 4, name: "Kylian Mbappe", image: "/images/mbappe.jpg", link: "/player/mbappe" },
  { id: 5, name: "Kevin De Bruyne", image: "/images/debruyne.jpg", link: "/player/debruyne" },
  { id: 6, name: "Robert Lewandowski", image: "/images/lewandowski.jpg", link: "/player/lewandowski" },
  { id: 7, name: "Mohamed Salah", image: "/images/salah.jpg", link: "/player/salah" },
  { id: 8, name: "Virgil van Dijk", image: "/images/vanDijk.jpg", link: "/player/vanDijk" },
  { id: 9, name: "Erling Haaland", image: "/images/haaland.jpg", link: "/player/haaland" },
  { id: 10, name: "Sadio Mane", image: "/images/mane.jpg", link: "/player/mane" },
  // { id: 11, name: "Luka Modric", image: "/images/modric.jpg", link: "/player/modric" },
  // { id: 12, name: "Karim Benzema", image: "/images/benzema.jpg", link: "/player/benzema" },
  // { id: 13, name: "Gavi", image: "/images/gavi.jpg", link: "/player/gavi" },
  // { id: 14, name: "Pedri", image: "/images/pedri.jpg", link: "/player/pedri" },
  // { id: 15, name: "Bruno Fernandes", image: "/images/bruno.jpg", link: "/player/bruno" },
  // { id: 16, name: "Jude Bellingham", image: "/images/bellingham.jpg", link: "/player/bellingham" },
  // { id: 17, name: "Vinicius Jr", image: "/images/vinicius.jpg", link: "/player/vinicius" },
  // { id: 18, name: "Casemiro", image: "/images/casemiro.jpg", link: "/player/casemiro" },
  // { id: 19, name: "Harry Kane", image: "/images/kane.jpg", link: "/player/kane" },
  // { id: 20, name: "Son Heung-min", image: "/images/son.jpg", link: "/player/son" },
];

const FootballCards = () => {
  const navigate = useNavigate();

  return (
    <div className="football-container">
      {footballData.map((player) => (
        <div key={player.id} className="football-card" onClick={() => navigate(player.link)}>
          <img src={player.image} alt={player.name} />
          <div className="overlay">{player.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FootballCards;

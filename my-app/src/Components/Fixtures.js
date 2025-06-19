import React, { useState, useEffect } from 'react';
import '../CSS/Fixtures.css';
import ArgentinaImage from "../images/Argentina.png";
import FranceImage from "../images/France.png";
import GermanyImage from "../images/Germany.png";
import ItalyImage from "../images/Italy.png";
import ManchesterImage from "../images/Manchester.png";
import ScotlandImage from "../images/Scotland.png";
import UsaImage from "../images/Usa.png";
import BrazilImage from "../images/Brazil.png";
import ParisImage from "../images/Paris.png";
import PolandImage from "../images/Poland.png";
import UruguayImage from "../images/Uruguay.png";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mockFixtures = [
      {
        date: 'Mon, 17 Mar 2025',
        matches: [
          {
            team1: { name: 'Argentina', score: '2-0', logo: ArgentinaImage },
            team2: { name: 'France', score: '0-2', logo: FranceImage },
            status: 'Argentina Won',
            time: '',
            details: '21st Match, Premier League 2025',
          },
          {
            team1: { name: 'Germany', score: '', logo: GermanyImage },
            team2: { name: 'Italy', score: '', logo: ItalyImage },
            status: '',
            time: '3:00 PM',
            details: '2nd Match, La Liga 2025',
          },
          {
            team1: { name: 'Manchester', score: '', logo: ManchesterImage },
            team2: { name: 'Scotland', score: '', logo: ScotlandImage },
            status: 'Match Abandoned',
            time: '',
            details: '15th Match, Bundesliga 2025',
          },
        ],
      },
    ];

    setFixtures(mockFixtures);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="fixtures-container">Loading fixtures...</div>;
  }

  if (error) {
    return <div className="fixtures-container">Error: {error}</div>;
  }

  return (
    <div className="fixtures-container">
      {fixtures.map((day, index) => (
        <div key={index} className="fixtures-day">
          <h2>{day.date}</h2>
          {day.matches.map((match, matchIndex) => (
            <div key={matchIndex} className="match-card">
              <div className="team-section">
                <img src={match.team1.logo} alt={`${match.team1.name} logo`} className="team-logo" />
                <div className="team-details">
                  <span className="team-name">{match.team1.name}</span>
                  {match.team1.score && <span className="team-score">{match.team1.score}</span>}
                </div>
              </div>
              <div className="match-status">
                <span>{match.status || match.time}</span>
                <p className="match-details">{match.details}</p>
              </div>
              <div className="team-section">
                <div className="team-details">
                  {match.team2.score && <span className="team-score">{match.team2.score}</span>}
                  <span className="team-name">{match.team2.name}</span>
                </div>
                <img src={match.team2.logo} alt={`${match.team2.name} logo`} className="team-logo" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fixtures;
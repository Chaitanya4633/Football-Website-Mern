import React, { useState, useEffect } from 'react';
import '../CSS/LiveScores.css';

const LiveScores = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLiveScores = async () => {
      try {
        const response = await fetch(
          'https://api.cricapi.com/v1/cricScore?apikey=7c500ba9-b15f-416b-b983-efcc3e855fae'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch live scores');
        }
        const data = await response.json();
        console.log('API Response:', data); // Debug the response
        setScores(data.data ? data.data.slice(0, 200) : []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLiveScores();
  }, []);

  if (loading) {
    return <div className="live-scores-container">Loading live scores...</div>;
  }

  if (error) {
    return <div className="live-scores-container">Error: {error}</div>;
  }

  return (
    <div className="live-scores-container">
      <h1>Live Cricket Scores</h1>
      <div className="scores">
        {scores.length === 0 ? (
          <p>No live matches available</p>
        ) : (
          scores.map((match) => (
            <div key={match.id} className="score-card">
              <h2>
                {match.t1?.name || 'Unknown Team'} vs {match.t2?.name || 'Unknown Team'}
              </h2>
              <p><strong>Series:</strong> {match.series || 'N/A'}</p>
              <p><strong>Type:</strong> {match.matchType?.toUpperCase() || 'N/A'}</p>
              <p><strong>Status:</strong> {match.status || 'N/A'}</p>
              <p><strong>Date:</strong> {match.dateTimeGMT ? new Date(match.dateTimeGMT).toLocaleString() : 'N/A'}</p>
              <div className="team-scores">
                <p>
                  {match.t1?.name || 'Unknown Team'}: {match.t1?.s || '0/0'} ({match.t1?.o || '0'} overs)
                </p>
                <p>
                  {match.t2?.name || 'Unknown Team'}: {match.t2?.s || '0/0'} ({match.t2?.o || '0'} overs)
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LiveScores;
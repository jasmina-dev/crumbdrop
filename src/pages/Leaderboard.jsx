import React from "react";
import "./leaderboard.css";

const Leaderboard = () => {
  const schools = [
    { name: "Lafayette College", points: 100 },
    { name: "University of Washington", points: 80 },
    { name: "Lehigh University", points: 120 },
  ];

  return (
    <div>
      <h2 className="leaderboard-head">leaderboard</h2>
      <Link to="/">back home 🏡</Link>
      <table>
        <thead>
          <tr>
            <th>School</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school, index) => (
            <tr key={index}>
              <td>{school.name}</td>
              <td>{school.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

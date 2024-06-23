import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./leaderboard.css";

const Leaderboard = () => {
  const schools = [
    { name: "Lafayette College", points: 100 },
    { name: "University of Washington", points: 80 },
    { name: "Lehigh University", points: 120 },
  ];

  return (
    <div className="leaderboard">
      <div className="leaderboard-hero">
        <h2>leaderboard</h2>
        <Link to="/">back home 🏡</Link>
      </div>
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
      <Footer />
    </div>
  );
};

export default Leaderboard;

import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { fetchLeaderboard } from "../api/api";
import React, { useState, useEffect } from "react";
import "./leaderboard.css";

const Leaderboard = () => {
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const schoolsData = await fetchLeaderboard();
        console.log('Fetched schools data:', schoolsData); // Log fetched data
        if (Array.isArray(schoolsData)) {
          setSchools(schoolsData);
        } else {
          console.error("Expected an array but got:", schoolsData);
          setError("Failed to fetch data: unexpected format");
        }
      } catch (err) {
        console.error("Error fetching leaderboard data:", err);
        setError("Failed to fetch data");
      }
    };
    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

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

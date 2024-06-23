import React, { useEffect } from "react";
import Card from "../Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { fetchData } from "../api/api";
import "../App.css";

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setPosts(result);
    };

    getData();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredPosts = filter
    ? posts.filter((post) => post.school === filter)
    : posts;

  const cards = filteredPosts.map((post) => {
    console.log(post);
    return (
      <Card
        key={post.id}
        id={post.id}
        title={post.title}
        school={post.school}
        description={post.description}
        location={post.location}
        claimed={post.claimed}
        imageurl={post.imgurl}
      />
    );
  });

  const schools = [
    "Lafayette College",
    "University of Washington",
    "Lehigh University",
  ];

  return (
    <div className="hero">
      <div className="nav-head">
        <h2>crumbdrop</h2>

        <Link to="/leaderboard">see the community leaderboard 🏆</Link>
      </div>

      <div className="slogan">
        <h4>no crumbs left behind.</h4>
        <h4>don't let your leftovers go to waste 👇</h4>
      </div>

      <div className="sign-up-div">
        <Link to="/form">post ur food 🍰</Link>
      </div>

      <div className="filter">
        <h4>or just see what's posted near you</h4>
        <div className="dropdown">
          <select onChange={handleFilterChange}>
            <option value="">choose school</option>
            {schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="cards">{cards}</div>

      <Footer />
    </div>
  );
}

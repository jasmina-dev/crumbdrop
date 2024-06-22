import React from "react";
import Card from "../Card";
import posts from "../posts";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const cards = posts.map((post) => {
    return (
      <Card
        key={post.id}
        imageUrl={post.imageUrl}
        title={post.title}
        school={post.school}
        description={post.description}
      />
    );
  });

  return (
    <div className="hero">
      <h2>crumbdrop</h2>

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
          <a href="">choose school</a>
        </div>
      </div>

      <div className="cards">{cards}</div>

      <Footer />
    </div>
  );
}

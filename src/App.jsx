import "./App.css";
import Card from "./Card";
import posts from "./posts";

function App() {
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
        <h4>join the movement 👇</h4>
      </div>

      <div className="sign-up-div">
        <a href="">sign up 🍰</a>
      </div>

      <div className="filter">
        <h4>or just see what's posted near you</h4>
        <div className="dropdown">
          <a href="">choose school</a>
        </div>
      </div>

      <div className="cards">{cards}</div>

      <div className="footer">
        <h4>© 2021 crumbdrop</h4>
      </div>
    </div>
  );
}

export default App;

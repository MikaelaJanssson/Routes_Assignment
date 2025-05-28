import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>👋 Welcome!</h1>
        <p>
          Explore our platform – connect with users or read the latest posts.
        </p>
        <div className="hero-buttons">
          <Link to="/userlist">
            <button className="cta">View Users</button>
          </Link>
          <Link to="/postlist">
            <button className="cta secondary">Browse Posts</button>
          </Link>
        </div>
      </div>

      <div className="tips">
        <h2>Psst..</h2>
        <ul>
          <li>Click on a user to view their full profile.</li>
          <li>Browse posts to see project ideas and articles.</li>
          <li>Use the navigation bar at any time!</li>
        </ul>
      </div>
    </div>
  );
}

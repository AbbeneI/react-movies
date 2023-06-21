import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar({ user }) {
  return (
    <nav>
      <span className="left">
        <span>Welcome, </span>
        {user.toString().toUpperCase()}
      </span>
      <div className="nav-links">
        <Link to="/">Movies</Link>
        <Link to="/actors">Actors</Link>
      </div>
    </nav>
  );
}

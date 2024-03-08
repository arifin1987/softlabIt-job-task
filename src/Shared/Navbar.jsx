import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h2 className="nav-title">SoftlabIt</h2>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="/fruits">Fruits</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

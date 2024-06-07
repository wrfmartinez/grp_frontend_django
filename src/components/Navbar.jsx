import "./css/Navbar.css";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <nav>
      <div id="navbar">
        <div className="nav-container">
          <div className="nav-brand-container">
            <Link to="/">
              <img
                className="nav-logo"
                src="/totalhome.svg"
                alt="totalhome logo"
              />
            </Link>
            <h1 className="nav-brand">Total Home</h1>
            <Link to="/shop-products">Shop Products</Link>
          </div>
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

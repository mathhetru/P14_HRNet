import { Link } from "react-router-dom";
import logo from "../assets/HRNet_logo.png";

function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={logo} alt="hrnet-logo" className="header__logo" />
        </Link>
        <p>HR Net</p>
      </div>
      <button className="header-nav">
        <Link className="header-nav__link" to="/create-employee">
          Create new employee
        </Link>
      </button>
    </header>
  );
}

export default Header;

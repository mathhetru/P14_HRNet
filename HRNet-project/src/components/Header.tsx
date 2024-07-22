import { Link } from "react-router-dom";
import logo from "../assets/HRNet_logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="hrnet-logo" className="header-logo__img" />
        </Link>
        <p className="header-logo__text">HR Net</p>
      </div>
      <button className="header-button">
        <Link className="header-button__link" to="/create-employee">
          Create new employee
        </Link>
      </button>
    </header>
  );
}

export default Header;

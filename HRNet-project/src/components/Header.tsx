import { Link } from "react-router-dom";
import logo from "../assets/HRNet_logo.png";

function Header() {
  return (
    <header className="bg-green w-full h-3/6">
      <div className="mt-10">
        <Link to="/">
          <img src={logo} alt="hrnet-logo" className="header-logo__img" />
        </Link>
        <p className="kalnia text-white">HR Net</p>
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

import { Link, useLocation } from "react-router-dom";
import HRNetLogo from "../assets/HRNet_white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const location = useLocation();
  const isUserOnEmployeeListPage = location.pathname !== "/employee-list";
  const isUserOnCreateEmployee =
    location.pathname !== "/create-employee" && location.pathname !== "/";

  const employeeListBtn = () => {
    if (isUserOnEmployeeListPage) {
      return (
        <button className="button">
          <Link className="button__link" to="/employee-list">
            <p className="button__text">Current employees</p>
          </Link>
        </button>
      );
    }
  };

  const createEmployeeBtn = () => {
    if (isUserOnCreateEmployee) {
      return (
        <button className="button">
          <Link className="button__link" to="/create-employee">
            <p className="button__text">Create new employee</p>
            <FontAwesomeIcon
              className="button__text ml-5 text-xl"
              icon={faArrowRight}
            />
          </Link>
        </button>
      );
    }
  };

  return (
    <header className="w-full pt-20 pb-10">
      <div className="flex items-center w-3/4 mx-auto justify-between">
        <Link className="flex items-center" to="/">
          <img src={HRNetLogo} alt="hrnet-logo" className="header__img" />
          <p className="kalnia text-white ml-4 text-2xl tracking-wide">
            HR Net
          </p>
        </Link>
        <div className="flex flex-col items-end lg:flex-row items-start">
          {employeeListBtn()}
          {createEmployeeBtn()}
        </div>
      </div>
    </header>
  );
}

export default Header;

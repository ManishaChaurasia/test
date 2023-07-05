import "./NavbarComponent.scss";
import logo from "./../../assets/images/logo.png";
import { useState } from "react";
import PopupComponent from "../popupComponent/PopupComponent";

const NavbarComponent = () => {
  const [popup, setPopup] = useState(false);
  const myPopup = () => {
    setPopup(true);
  };
  return (
    <>
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <nav className=" container">
          <a className="navbar-brand" href="#">
            <img src={logo} width={300} height={70} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Sports We Cover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Claims
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Give Back
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Broker
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-link">
                <button
                  onClick={myPopup}

                  type="submit"
                  class="bg-primary text-white p-2 text-decoration-none"
                  href="#"
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {popup && <PopupComponent></PopupComponent>}
    </>
  );
};

export default NavbarComponent;

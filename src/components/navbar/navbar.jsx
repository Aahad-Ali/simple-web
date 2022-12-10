import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="page sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-#fff">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand " href="#">
              <img
                className="my-5"
                src="https://www.oliverwyman.com/etc.clientlibs/oliverwymanv2/clientlibs/generic/resources/images/logo.png"
                alt="..."
                width="100%"
                height="30"
              />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  href="https://www.oliverwyman.com/our-expertise.html"
                  target={"_Blank"}
                >
                  Our Experties
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  href="https://www.oliverwyman.com/our-expertise/insights.html"
                  target={"_Blank"}
                >
                  Our Insights
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  href="https://www.oliverwyman.com/our-culture.html"
                  target={"_Blank"}
                >
                  Our Culture
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  href="https://www.oliverwyman.com/careers.html"
                  target={"_Blank"}
                >
                  Careers
                </a>
              </li>
              <li className="nav-item mx-2">
                <a
                  className="nav-link active"
                  href="https://www.oliverwyman.com/careers.html"
                  target={"_Blank"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

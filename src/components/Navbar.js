import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <input type="radio" className="btn-check" name="options-base" onClick={props.toggleTheme} value="Green" id="option5" autoComplete="off"/>
          <label className="btn" htmlFor="option5">Green</label>

          <input type="radio" className="btn-check" name="options-base" onClick={props.toggleTheme} value="Red" id="option6" autoComplete="off"/>
          <label className="btn" htmlFor="option6">Red</label>

          <input type="radio" className="btn-check" name="options-base" onClick={props.toggleTheme} value="Blue" id="option7" autoComplete="off"/>
          <label className="btn" htmlFor="option7">Blue</label>

          <input type="radio" className="btn-check" name="options-base"  onClick={props.toggleTheme} value="Yellow" id="option8" autoComplete="off"/>
          <label className="btn" htmlFor="option8">Yellow</label>
          <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "Blogger", aboutText: "About Text Here" };

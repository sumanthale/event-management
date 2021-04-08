import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ admin }) => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link active" to="/events">
            Events
          </Link>
          <Link className="nav-link active" to="/admin">
            Admin
          </Link>
          {admin && (
            <Link className="nav-link active" to="/events/edit">
              Add Event
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

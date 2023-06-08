import React from "react";
import {
  Link,
} from "react-router-dom";

const NavBar =()=>{
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/General" className="navbar-brand mx-4">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/General" className="nav-link" >
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/Business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Entertariment" className="nav-link " >
                    Entertariment
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/Health" className="nav-link " >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Technology" className="nav-link " >
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Science" className="nav-link " >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Sports" className="nav-link " >
                    Sports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
    }

export default NavBar;

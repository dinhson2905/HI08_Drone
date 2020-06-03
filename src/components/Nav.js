import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark default-color header" >
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333" aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">HI_08
              </Link>
              <div className="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                <Link className="dropdown-item" to="/hi08">DashBoard</Link>
                <Link className="dropdown-item" to="/hi08/location">Location</Link>
                <Link className="dropdown-item" to="/hi08/drones">Drones</Link>
                <Link className="dropdown-item" to="/hi08/projects">Projects</Link>
                <Link className="dropdown-item" to="/hi08/members">Members</Link>
              </div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">HI_01
                <span className="sr-only">(current)</span>
              </Link>
            </li><li className="nav-item active">
              <Link className="nav-link" to="/">HI_02
                <span className="sr-only">(current)</span>
              </Link>
            </li><li className="nav-item active">
              <Link className="nav-link" to="/">HI_03
                <span className="sr-only">(current)</span>
              </Link>
            </li><li className="nav-item active">
              <Link className="nav-link" to="/">HI_04
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">HI_05
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">HI_06
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">HI_07
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">HI_09
                <span className="sr-only">(current)</span>
              </Link>
            </li><li className="nav-item active">
              <Link className="nav-link" to="/">HI_10
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link waves-effect waves-light">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user" />
              </a>
              <div className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
		);
	}
}

export default Nav;
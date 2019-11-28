import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        {/* <Link to="/" className="navbar-brand">ExcerTracker</Link> */}
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Guest</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/host" className="nav-link">Host</Link>
          </li> */}
        </ul>
        </div>
      </nav>
    );
  }
}
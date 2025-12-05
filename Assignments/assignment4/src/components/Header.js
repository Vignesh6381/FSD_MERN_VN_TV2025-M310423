import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const getLinkClass = ({ isActive }) =>
    `nav-link px-3 py-2 rounded-pill ${isActive ? 'active-nav-link' : 'inactive-nav-link'}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom sticky-top">
      <div className="container">

        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: 38, height: 38, backgroundColor: '#0d6efd', color: 'white', fontWeight: 'bold' }}
          >
            SA
          </div>
          <div className="d-flex flex-column lh-1">
            <span className="fw-bold">SA Engineering College</span>
            <small className="text-muted" style={{ fontSize: '0.75rem' }}>
              Learn • Innovate • Lead
            </small>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <NavLink to="/" className={getLinkClass}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={getLinkClass}>
                About
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link px-3 py-2 rounded-pill dropdown-toggle inactive-nav-link"
                to="/departments"
                role="button"
                data-bs-toggle="dropdown"
              >
                Departments
              </NavLink>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><NavLink className="dropdown-item" to="/departments/cse">CSE</NavLink></li>
                <li><NavLink className="dropdown-item" to="/departments/ece">ECE</NavLink></li>
                <li><NavLink className="dropdown-item" to="/departments/eee">EEE</NavLink></li>
                <li><NavLink className="dropdown-item" to="/departments/mba">MBA</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/departments">View All</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/facilities" className={getLinkClass}>
                Facilities
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/admissions" className={getLinkClass}>
                Admissions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className={getLinkClass}>
                Contact
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

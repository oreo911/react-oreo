import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
    const state = useSelector((state) => state.handleCart) 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            Oreo's Online Shop
          </NavLink>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-light btn-sm">
                    <i className="fa fa-sign-in me-1"></i>
                    Masuk
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-light ms-2 btn-sm">
                    <i className="fa fa-user-plus me-1"></i>
                    Daftar
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-light ms-2 btn-sm">
                    <i className="fa fa-shopping-cart me-1"></i>
                    Keranjang ({state.length})
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

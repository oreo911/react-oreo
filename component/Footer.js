import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark">
            
  <footer >
  <div class="container md-5 py-5">
      <hr className="text-muted" />
    <ul class="nav justify-content-center  pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><NavLink className="nav-link px-2 text-muted" to="/products">
                  Products
                </NavLink></li>
      <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted">About</a></li>
      <li class="nav-item"><a href="/contact" class="nav-link px-2 text-muted">Contact</a></li>
    </ul>
    <p class="text-center text-muted">&copy; 2022 Project Oreo, Inc</p>
    </div>
  </footer>
</div>
        
    )
}

export default Footer;
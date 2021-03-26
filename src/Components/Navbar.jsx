import React from 'react'
import './Navbar.css'
import { SiConfluence } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    return (
        <div className="Navbar">
            <nav class="navbar fixed-top navbar-expand-lg">
              <div class="container-fluid">
                <a href="/" class="navbar-brand"><SiConfluence /> Abhedya</a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"><GiHamburgerMenu /></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul>
                  <div class="d-flex">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/ServicePage">Services</a>
                      </li>
                      {/* <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li> */}
                      <li class="nav-item">
                        <a class="nav-link" href="/NewsPage">News</a>
                      </li>
                      {/* <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                      </li> */}
                      <li class="nav-item">
                        <a class="nav-link" href="/BlogPage">Blogs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar

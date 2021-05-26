import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark bgcolor">
        <div className="container">
  <a class="navbar-brand logo text-uppercase" href="#">Treasure minds</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav navbar-center">
    <li className="nav-item active">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Objectives" className="nav-link">Objectives</a>
                        </li>
                       
                        <li className="nav-item">
                            <a href="#programmes" className="nav-link">Programmes</a>
                        </li>
                        <li className="nav-item">
                            <a href="#team" className="nav-link">Learning Kit</a>
                        </li>

                        <li className="nav-item">
                            <a href="#team" className="nav-link">Parent Info</a>
                        </li>
                        <li className="nav-item">
                            <a href="#blog" className="nav-link">Team</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li> 
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Register</a>
                        </li> 
    </ul>
    
  </div>  
  </div>
</nav>

    )
}

export default Navbar
// navbar navbar-expand-md bg-dark navbar-custom navbar-dark fixed-top  sticky sticky-dark
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                
                <img src={ `${process.env.PUBLIC_URL}/assets/logo.png` } alt="Pokemon" width="200" />

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                
                    <ul className="navbar-nav">
                        <li className="ml-2 nav-item">
                            <a target="_blank" href="https://github.com/alexanyernas" className="nav-link bi bi-github "></a>
                        </li>
                        
                        <li className="ml-2 nav-item">
                            <a target="_blank" href="https://instagram.com/alexanyernas" className="nav-link bi bi-instagram"></a>
                        </li>
                        
                        <li className="ml-2 nav-item">
                            <a target="_blank" href="https://twitter.com/alexanyernas" className="nav-link bi bi-twitter"></a>
                        </li>
                        
                        <li className="ml-2 nav-item">
                            <a target="_blank" href="https://linkedin.com/in/alexanyernas" className="nav-link bi bi-linkedin"></a>
                        </li>
                    
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

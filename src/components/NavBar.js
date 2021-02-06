import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {

    const urlLogo = process.env.PUBLIC_URL + '/assets/logo.png';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                
                <img src={ urlLogo } alt="Logo" width="200" />

                <div className="collapse navbar-collapse" id="navbarNav">
                
                    <ul className="navbar-nav">
                        <li className="ml-3 nav-item">
                            <span className="nav-link">GitHub</span>
                        </li>
                        
                        <li className="ml-3 nav-item">
                            <span className="nav-link">Instagram</span>
                        </li>
                        
                        <li className="ml-3 nav-item">
                            <span className="nav-link">Twitter</span>
                        </li>
                    
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

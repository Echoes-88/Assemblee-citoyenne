import React from 'react';
import { Link } from 'react-router-dom';

import '../style.scss';

const Navbar = ({isLogged}) => {


    return (
        <nav>
            <ul>
            <Link to="/" className="nav-link">
                <li> Home </li>
            </Link>
            <Link to="/projets-loi" className="nav-link">
                <li> Projets de loi </li>
            </Link>
            <Link to="/projets-loi" className="nav-link">
                <li> Propositions de loi </li>
            </Link>
            <Link to="/about" className="nav-link">
                <li> A propos </li>
            </Link>
            {!isLogged && 
            <Link to="/login" className="nav-link">
                <li> Se connecter </li>
            </Link>
            }
            {isLogged &&
            <>
            <Link to="/account" className="nav-link">
                <li> Mon compte </li>
            </Link>
            <Link to="/login" className="nav-link">
                <li> Déconnexion </li>
            </Link>
            </>
            }
            </ul>
        </nav>
    )
}

  // == Export
  export default Navbar;
  
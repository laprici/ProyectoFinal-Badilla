
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="../../logo.png" id="logo"/>
                </a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Matemática</a></li>
                                <li><a className="dropdown-item" href="#">Psicología</a></li>
                                <li><a className="dropdown-item" href="#">Historia</a></li>
                                <li><a className="dropdown-item" href="#">Sociología</a></li>
                                <li><a className="dropdown-item" href="#">Literatura</a></li>
                                <li><a className="dropdown-item" href="#">Astrología</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contacto</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;

import React from 'react';
import { useEffect } from 'react';
import CartWidget from './CartWidget';
// import ItemListContainer from './ItemListContainer';
import ItemCategoryContainer from './ItemCategoryContainer';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="../../logo.png" id="logo" />
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
                            <ItemCategoryContainer
                                category1='Matemática'
                                category2='Psicología'
                                category3='Historia'
                                category4='Sociología'
                                category5='Literatura'
                            />
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
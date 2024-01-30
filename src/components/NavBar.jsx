
import { useEffect } from 'react';
import CartWidget from './CartWidget';
import CardItem from './cardProducts/CardItem';

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
                                Idiomas
                            </a>
                            <ItemCategoryContainer
                                category1 = "English"
                                category2 = "Danish"
                                category3 = "Italian"
                                category4 = "Akkadian"
                                category5 = "Hebrew"
                                category6 = "Arabic"
                                category7 = "Old Norse"
                                category8 = "French"
                                category9 = "French, English"
                                category10 = "Spanish"
                                category11 = "German"
                                category12 = "Russian"
                                category13 = "Greek"
                                category14 = "Portuguese"
                                category15 = "Norwegian"
                                category16 = "Sanskrit"
                                category17 = "Japanese"
                                category18 = "Icelandic"
                                category19 = "Swedish"
                                category20 = "Chinese"
                                category21 = "Classical Latin"
                                category22 = "Persian"
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
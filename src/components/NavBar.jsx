import React, { useState } from "react";
import CartWidget from "./CartWidget";
import CardItem from "./cardProducts/CardItem";

import ItemCategoryContainer from "./ItemCategoryContainer";

const CATEGORIES = [
  "Open Source",
  "Mobile",
  "Java",
  "Software Engineering",
  "Internet",
  "Web Development",
  "Miscellaneous",
  "Microsoft .NET",
  "Microsoft",
  "Next Generation Databases",
  "PowerBuilder",
  "Client-Server",
  "Computer Graphics",
  "Object-Oriented Programming",
  "S",
  "Networking",
  "Theory",
  "Programming",
  "Python",
  "Mobile Technology",
  "Business",
  "P",
  "XML",
  "Perl",
  "java",
  "Microsoft/.NET",
  "Miscella",
  "Object-Technology Programming",
  "internet",
  ".NET",
  "Algorithmic Art",
  "PHP",
  "SOA",
  "Computer Graph",
  "Client Server",
  "In Action",
  "Software Development",
];

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="../../logo.png" id="logo" />
        </a>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className={`dropdown-menu${isDropdownOpen ? " show" : ""}`}>
                <li>
                  {CATEGORIES.map((category, index) => (
                    <ItemCategoryContainer key={index} category={category} />
                  ))}
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

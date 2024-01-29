import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCategoryContainer = (props) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}>
            <li>
                <Link className="dropdown-item" to='/category/matematica'>
                    {props.category1}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/psicologia'>
                    {props.category2}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/historia'>
                    {props.category3}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/sociologia'>
                    {props.category4}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/literatura'>
                    {props.category5}
                </Link>
            </li>
        </ul>
    );
}

export default ItemCategoryContainer;

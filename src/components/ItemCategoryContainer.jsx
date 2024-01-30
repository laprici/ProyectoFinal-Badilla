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
                <Link className="dropdown-item" to='/category/english'>
                    {props.category1}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/danish'>
                    {props.category2}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/italian'>
                    {props.category3}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/akkadian'>
                    {props.category4}
                </Link>
            </li>
            <li>
                <Link className="dropdown-item" to='/category/hebrew'>
                    {props.category5}
                </Link>
            </li>
        </ul>
    );
}

export default ItemCategoryContainer;

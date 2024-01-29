import React from 'react';
import { Link } from 'react-router-dom';

const ItemCategoryContainer = (props) => {
    return (
        <ul className="dropdown-menu">
            <li>
                <a className="dropdown-item" href="#">
                    <Link to='category/matematica'>
                        {props.category1}
                    </Link>
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    <Link to='category/psicologia'>
                        {props.category2}
                    </Link>
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    <Link to='category/historia'>
                        {props.category3}
                    </Link>
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    <Link to='category/sociologia'>
                        {props.category4}
                    </Link>
                </a>
            </li>
            <li>
                <a className="dropdown-item" href="#">
                    <Link to='category/literatura'>
                        {props.categoty5}
                    </Link>
                </a>
            </li>
        </ul>
    );
}

export default ItemCategoryContainer;
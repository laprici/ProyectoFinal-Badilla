import React from 'react';
import { Link } from 'react-router-dom';

const ItemCategoryContainer = (props) => {

    return (
        <Link className="dropdown-item" to={`/category/${props.category}`}>
            {props.category}
        </Link>
    );
}

export default ItemCategoryContainer;

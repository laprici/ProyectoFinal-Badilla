import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/cardItem.css';
import { useCartContext  } from '../../context/CartContext';

const CardItem = (props) => {
    return (
        <div className="card-item container justify-content-between justify-content">
            <Link to={`/product-detail/${props.id}`} id="link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={props.image} height="200px" alt="" />
                <h5 className="text-title">{props.name}</h5>
            </Link>
            <div className="align-selft-end">
                <p>${props.price}</p>
                <Link to={`/product-detail/${props.id}`}>
                    <button className="btn btn-primary">Ver detalles</button>
                </Link>
            </div>
        </div>
    )
}

export default CardItem;
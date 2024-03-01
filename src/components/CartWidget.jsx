import React from 'react';
import { Link } from 'react-router-dom';
import cartImage from '../../public/img/shopping-cart.png';
import { useCartContext } from '../context/CartContext';


const CartWidget = () => {
    const { totalProducts } = useCartContext();
    return (
        <div>
            <Link to="./cart">
                <button>
                    <i className="bi bi-cart" alt="" />
                    <span>{totalProducts() || ''}</span>
                </button>
            </Link>
        </div>
    );
};

export default CartWidget;
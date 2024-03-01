
import React from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CheckoutButton = () => {
    const { cart } = useCartContext();

    return (
        <>
            {cart.length > 0 && (
                <div>
                    <p className='text-secondary'>Producto agregado</p>
                    <Link to="../cart">
                        <button className="mt-2 btn btn-success">Terminar Compra</button>
                    </Link>
                </div>
            )}
        </>
    );
};

export default CheckoutButton;
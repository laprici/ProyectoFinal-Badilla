import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCart from './ItemCart'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if(cart.length === 0) {
        return (
           <div className="m-5">
            <p className="h5">Tu carro está vacío</p>
            <p className="">Agrega productos a tu carro y realiza tu compra</p>
            <Link to="/">
                <button className="btn btn-primary">Ir a comprar</button>
            </Link>
           </div>
        );
    };


    return (
        <div className="cart">
            <table className="table table-bordered mt-5 mb-5 align-items-center">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <ItemCart key={item._id} item={item} />
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-end me-5">
                <p className="h5">Total: {totalPrice().toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cart;
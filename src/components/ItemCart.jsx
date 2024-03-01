import React from "react";
import { useCartContext } from "../context/CartContext";


const ItemCart = ({ item }) => {
    const { removeProduct } = useCartContext();
    return (
        <>
            <tr>
                <td>
                    <p className="mb-0">{item.title}</p>
                </td>
                <td>
                    <p className="mb-0">{item.cant}</p>
                </td>
                <td>
                    <p className="mb-0">{item.price}</p>
                </td>
                <td>
                    <p className="mb-0">{(item.cant * item.price).toFixed(2)}</p>
                </td>
                <td>
                    <i className="bi bi-trash-fill" style={{cursor: 'pointer'}} onClick={() => removeProduct(item._id)}></i>
                </td>
            </tr>
        </>
    );
};
export default ItemCart;
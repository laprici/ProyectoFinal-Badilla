import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addProduct = (item, cant) => {
        if(inCart(item._id)){
            setCart(cart.map(p => {
                return p.id == item._id
                    ? { ...p, cant : p.item.cant + cant }
                    : p;
            }))
        } else {
            setCart([...cart, { ...item, cant }]);
        }

    }
    const clear = () => setCart([]);
    const inCart = (id) => cart.find(product => product._id == id);
    const removeProduct = (id) => setCart(cart.filter(product => product._id != id))
    const totalPrice = () => cart.reduce( (prev, act) => prev + (act.cant * act.price), 0);
    const totalProducts = () => cart.reduce( (acc, act) => acc + act.cant, 0);

    return(
        <CartContext.Provider value={{
            clear, inCart, removeProduct, addProduct, totalPrice, totalProducts, cart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
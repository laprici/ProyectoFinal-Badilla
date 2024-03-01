import React, { useState } from "react";
import '../style/itemCount.css'


const ItemCount = ({ initialValue = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prevCount => (count < stock) ? prevCount + 1 : count);
    const decrement = () => setCount(prevCount => prevCount > 1 ? prevCount - 1 : 1);

    return (
        <>
        <div className="item-counter">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
        <div>
            <button className='mt-2 btn btn-primary' disabled={stock == 0 } onClick={() => onAdd(count)}>Agregar  <i className="bi bi-bag-plus"></i></button>
        </div>
        </>
    );
};

export default ItemCount;
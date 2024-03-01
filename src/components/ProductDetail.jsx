import React, { useEffect, useState } from 'react';
import fetchData from "../utils/fetchData";
import books from  '../database/booksStoreDB.json';
import { useParams } from 'react-router-dom';
import '../style/productDetail.css';
import ItemCount from './ItemCount';
import { useCartContext } from '../context/CartContext';
import CheckoutButton from './CheckoutButton';

const ProductDetail = () => {
    const [ product, setProduct ] = useState([]);
    let { id } = useParams();

    useEffect( () => {
        const bookFilter = books.find(book => book._id == id);
        if(bookFilter)
            fetchData(bookFilter)
            .then(response => setProduct(response))
            .catch(error => console.error(error))
    }, [id]);

    const [goToCart, setGoCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoCart(true);
        addProduct(product, quantity)
    }

    return (
        <div className="container product-details">
            <div className="row gx-5">
                <div className="col m-3 p-5 border rounded-1 text-center d-flex justify-content-center align-items-center">
                    <img className="img-details" src={product.thumbnailUrl} alt={product.title} />
                </div>
                <div className="col p-5 d-flex rounded-1 flex-column text-start border m-3 justify-content-between">
                    <div className="">
                        <h2>{product.title}</h2>
                        <p>{product.shortDescription ?? 'Sin descripción'}</p>
                    </div>
                    <div className="row text-center">
                        <p className='text-secondary'>Stock: {product.stock}</p>
                        <p className='h4'>Precio: <span className='price'>${product.price}</span></p>
                        {
                            (goToCart)
                                ? <CheckoutButton></CheckoutButton>
                                : <ItemCount stock={product.stock} onAdd={onAdd}></ItemCount>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
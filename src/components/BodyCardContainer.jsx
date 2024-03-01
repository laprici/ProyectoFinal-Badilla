import CardItem from "./cardProducts/CardItem";
import fetchData from "../utils/fetchData";
import books from  '../database/booksStoreDB';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const BodyCardContainer = () => {
    // const [ data, dataBase ] = useState([]);
    let { idCategory } = useParams();
    const [ productos, setProductos ]= useState([]);

    // useEffect( () => {
    //     if(!idCategory){
    //         fetchData(books)
    //         .then(response => dataBase(response))
    //         .catch(error => console.error(error))
    //     }else {
    //         const booksFilter = books.filter(book =>
    //             book.categories.some(category =>
    //               category.toUpperCase().includes(idCategory.toUpperCase())
    //             )
    //         );
    //         fetchData(booksFilter)
    //         .then(response => dataBase(response))
    //         .catch(error => console.error(error))
    //     }
    // }, [idCategory]);


    useEffect( () => {
        if(!idCategory){
            const productRef = collection(db, 'productos');
            getDocs(productRef)
            .then(resp => {
                setProductos(
                    resp.docs.map(doc => doc.data())
                )
            });
        }else {
            const productsRef = collection(db, "productos");
            const q = query(productsRef, where("categories", "array-contains", idCategory));
            getDocs(q)
            .then(resp => {
                setProductos(
                    resp.docs.map(doc => doc.data())
                )
            });
        }
    }, [idCategory]);

    return (
        <div className="container-card justify-content-center">
            {
                productos.map( book => (
                    <CardItem
                        image = {book.thumbnailUrl}
                        author = {book.author}
                        name = {book.title}
                        price = {book.price}
                        id = {book._id}
                        key={book._id}
                    />
                ))
            }
        </div>
    )
}

export default BodyCardContainer;
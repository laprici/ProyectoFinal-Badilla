import CardItem from "./cardProducts/CardItem";
import fetchData from "../utils/fetchData";
import books from  '../database/booksStoreDB';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BodyCardContainer = () => {
    const [ data, dataBase ] = useState([]);
    let { idCatLanguage } = useParams();

    useEffect( () => {
        if(!idCatLanguage){
            fetchData(books)
            .then(response => dataBase(response))
            .catch(error => console.error(error))
        }else {
            const booksFilter = books.filter( book => (book.language).toUpperCase() === idCatLanguage.toUpperCase() );
            fetchData(booksFilter)
            .then(response => dataBase(response))
            .catch(error => console.error(error))
        }
        
    }, [idCatLanguage]);


    return (
        <div className="container-card">
            {
                data.map( book => (
                    <CardItem
                        url = {book.imageLink}
                        author = {book.author}
                        country = {book.country}
                        name = {book.title}
                        price = {book.price}
                        key = {book.id}
                    />
                ))
            }
        </div>
    )
}

export default BodyCardContainer;
import CardItem from "./cardProducts/CardItem";
import fetchData from "../utils/fetchData";
import books from  '../database/booksStoreDB';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BodyCardContainer = () => {
    const [ data, dataBase ] = useState([]);
    let { idCategory } = useParams();

    useEffect( () => {
        if(!idCategory){
            fetchData(books)
            .then(response => dataBase(response))
            .catch(error => console.error(error))
        }else {
            const booksFilter = books.filter(book => 
                book.categories.some(category => 
                  category.toUpperCase().includes(idCategory.toUpperCase())
                )
            );
            fetchData(booksFilter)
            .then(response => dataBase(response))
            .catch(error => console.error(error))
        }
        
    }, [idCategory]);


    return (
        <div className="container-card justify-content-center">
            {
                data.map( book => (
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
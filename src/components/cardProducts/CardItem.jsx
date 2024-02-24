import React, { useState } from 'react';
import '../../style/cardItem.css';
import CardImage from './CardImage';
import CardDescription from './CardDescription';
import CardButtonDetails from './CardButtonDetails';
import CardButtonAdd from './CardButtonAdd';

const CardItem = (props) => {
    return (
        <div className="card-item">
            {/* <CardImage url={props.url}/>
            <CardDescription
                name={props.name}
                description={props.description}
                price={props.price}
            />
            <CardButtonDetails />
            <CardButtonAdd /> */}
            <img src={props.image} height="200px" alt="" />
            <h5 className="text-title">{props.name}</h5>
            <p>${props.price}</p>
            <button className="btn btn-primary">Agregar</button>
        </div>
    )
}

export default CardItem;
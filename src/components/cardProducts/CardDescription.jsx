import React from "react";

const CardDescription = (props) => {
    <>
        <h3 className="text-title">{props.name}</h3>
        <p className="text-description">{props.description}</p>
        <p className="text-price">{props.price}</p>
    </>
}

export default CardDescription;
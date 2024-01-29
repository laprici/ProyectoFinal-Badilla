import React, { useState } from 'react';
import CardImage from './CardImage';
import CardDescription from './CardDescription';
import CardButtonDetails from './CardButtonDetails';
import CardButtonAdd from './CardButtonAdd';

const CardItem = () => {
    return (
        <div className="card-item">
            <CardImage />
            <CardDescription />
            <CardButtonDetails />
            <CardButtonAdd />
        </div>
    )
}

export default CardItem;
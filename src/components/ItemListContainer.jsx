import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className="text-itemList">{props.message}</h2>
        </div>
    );
};
export default ItemListContainer;
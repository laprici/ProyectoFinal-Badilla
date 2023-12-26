import React from 'react';

const ItemListContainer = (props) => {
    return (
        <div>
            <h2 className="text-itemList">{props.message}</h2>
        </div>
    );
};
export default ItemListContainer;
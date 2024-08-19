import React from 'react';

const ProductCard = ({ products }) => {

    return (
        <div className="productCard">
            <img src={products.img} alt={products.title}/>
            {products.choice === true ? <p>customer choice</p> : <p>&nbsp;</p> }
            <h5>{products.title}</h5>
            <p>{products.price}</p>
            <p>{products.new === true ? "신제품" : ""}</p>
            <div>{products.size.map((item, index) => (
                <label key={index}>{item}&nbsp;</label>
            ))}
            </div>

        </div>
    );
};

export default ProductCard;
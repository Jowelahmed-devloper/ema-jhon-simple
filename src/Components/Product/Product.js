import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, img,price,key,category,seller,stock} = props.product;
    console.log(props);
    return (
        <div className="products">
            <div className="products-img">
                <img src={img} alt="" />
            </div>
            <div className="products-details">
                <h3>{name}</h3>
                <p>Price: $ {price}</p>
                <p>ID: {key}</p>
                <p>Category: {category}</p>
                <p>By: {seller}</p>
                <p>Available: {stock}only. Order Soon</p>
                <button className="main-btn" onClick={()=>props.handleAddProduct(props.product)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
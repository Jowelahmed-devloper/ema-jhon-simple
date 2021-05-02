import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);

    let shipping =0 ;

    if(total>35){
        shipping =0;
    }
    else if(total> 15){
        shipping = 4.99
    }
    else if(total>0){
        shipping =12.99
    }
    const tax = (total/10).toFixed(3)

    const formatNumber = num=> {
        const precision = num.toFixed(2)
        return Number(precision);
    }
    const grandTotal = (total +shipping+ Number(tax)).toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Total Ordered :{cart.length}</h3>
            <p>Price: ${formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total Amount: {grandTotal}</p>
            <button className='main-btn'>Check Out</button>
        </div>
    );
};

export default Cart;
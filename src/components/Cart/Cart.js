import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    let items = [];
    let sum = 0;
    for (let item of cart) {
        
        if(!items.includes(item.name)){
            items.push(item.name);
        }
       

        
        sum = sum + item.price;
    }
    return (
        <div>
            <h3 className='text-center bg-dark text-white '>Cart</h3>
            <div className='d-flex justify-content-center'>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ojsixzna.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px'}}  loop  autoplay></lottie-player>
            </div>
            <div className='cartItmes '>
            <div className="row">
                <div className="col-4 py-2 text-center"><h5>Items</h5></div>
                <div className="col-8 py-2 "><span className='cart-item-name d-flex justify-content-center'>{items.join(', ')}</span></div>
            </div>
            <hr />
            <div className="row">
                <div className="col-4 py-2 text-center"><h5>Total Items</h5></div>
                <div className="col-8 py-2 d-flex align-items-center justify-content-center">{ cart.length}</div>
            </div>
            <hr />
            <div className="row">
                <div className="col-4 py-2 text-center"><h5>Bill</h5></div>
                <div className="col-8 py-2 text-center">{sum} Taka</div>
            </div>
            </div>



        </div>
    );
};

export default Cart;
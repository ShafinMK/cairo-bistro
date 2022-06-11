import React from 'react';
import './Item.css';
const Item = (props) => {
    const { name, foodImage, price, rating, orderedTotal, quantity } = props.item;
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={foodImage} className="card-img-top p-3" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title text-center mb-3 item-name">{name}</h4>

                        <div className="row">
                            <div className="col-6 ">Quantity: {quantity}</div>
                            <div className="col-6 text-center"><h6>Price: <span>{price} Taka</span></h6></div>

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-5">
                                Rating: {rating}/5
                            </div>
                            <div className="col-7 text-center ">
                                <span className='small-txt'> Ordered: {orderedTotal} Times</span>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between mt-2'>
                            <button onClick={() => { handleAddtoCart(props.item) }} type="button" className="btn btn-dark px-2"><i className="fa-solid fa-cart-arrow-down me-2"></i>Add to Cart</button>
                            <button type="button" className="btn btn-dark px-2" data-bs-toggle="modal" data-bs-target="#orderPlaced"><i className="fa-solid fa-utensils me-2"></i>Place Order</button>
                            {/* Modal start  */}
                            <div className="modal fade" id="orderPlaced" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        
                                            <h5 className="modal-title" id="exampleModalLabel">Your Order is Placed! Thank you 😊</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src="https://img.freepik.com/free-vector/ready-fast-food-meal-ordering-home-using-mobile-app-food-delivery-takeaway-flat-cartoon-vector-illustration-isolated-white-background_605858-660.jpg?w=826" className='img-fluid' alt="" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* modal end */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
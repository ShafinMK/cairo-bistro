import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header-section'>
            <nav className="navbar navbar-expand-lg nav-bar-style fixed-top navbar-dark stroke ">
                <div className="container d-flex justify-content-between">
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src={require("./cairo-bistro-logo.png")} alt="" width="70" height="70" />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-item-style">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item nav-item-style">
                                <a className="nav-link" href="#">Menu</a>
                            </li>
                            <li className="nav-item nav-item-style">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item nav-item-style">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        
                    </div>
                    <div className=''>
                            <button type="button" class="button nav-bar-btn">Log in</button>
                        </div>
                    



                </div>
            </nav>

         <div className="container">
         <div className="row p-3">
             <div className="col-lg-6 text-white d-flex align-items-center banner-text">
                 <div>
                 <h1 className='restaurant-title '><span id='restaurant-title-1st'>Cairo</span> <span style={{color:'orange'}}>Bistro</span></h1>
                 {/* <hr  className='devider-style'/> */}
                 <h4 className='text-uppercase mt-4'>Pure <span className='bright-orange-txt'>Bengali </span>Restaurant</h4>
                 {/* <h4 className='text-capitalize'>A place where we create your Emotions!</h4> */}
                 <p className='fst-italic'>A place where we create your Emotions! We are Happy to Announce that the Number of Our happy Customers Reached <span className=''>100000+</span></p>
                 <a href="#menu"><button type="button" class="button banner-button mt-3">Check Our Menu <i class="fa-solid fa-arrow-right ms-2"></i></button></a>
                 </div>
             </div>
         </div>
         </div>


        </div>
    );
};

export default Header;
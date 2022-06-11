import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='mt-5 footer-container' >
          <h4 className='text-center p-3' style={{color:'#2a4d69'}}>Upcoming Dishes</h4>
          <footer className='container'>
          
            <div className="row">
                <div className="col-lg-2 col-md-4 col-sm-12 mb-1"> <img src="https://cdn.pixabay.com/photo/2015/05/18/09/28/shashlik-772020_960_720.jpg" className='img-fluid' alt="" /></div>
                <div className="col-lg-2 col-md-4 col-sm-12 mb-1"> <img src="https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482_960_720.jpg" alt="" /></div>
                <div className="col-lg-2 col-md-4 col-sm-12 mb-1"> <img src="https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_960_720.jpg" className='img-fluid' alt="" /></div>
                <div className="col-lg-2 col-md-4 col-sm-12 mb-1"> <img src="https://cdn.pixabay.com/photo/2012/03/02/00/29/beef-20678_960_720.jpg" className='img-fluid' alt="" /></div>
                <div className="col-lg-2 col-md-4 col-sm-12 mb-1"> <img src="https://cdn.pixabay.com/photo/2021/06/25/22/33/rice-6364832_960_720.jpg" className='img-fluid' alt="" /></div>
                <div className="col-lg-2 col-md-4 col-sm-12 mb-1"> <img src="https://cdn.pixabay.com/photo/2021/06/13/09/16/burger-6332697_960_720.jpg" className='img-fluid' alt="" /></div>
            </div>
          </footer>
          <p className='text-center copy-right p-2'><small>All rights reserved by &copy; Shafin</small></p>
        </div>
    );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Menu.css';
const Menu = () => {
    const [items, setItems] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{

        fetch('https://shafinmk.github.io/resources-api/cairo-bistro-api-updated-1.json')
        .then(res => res.json())
        .then(data => {
            setItems(data);
            setDisplayItems(data);
        })
    }, []);

    const handleAddtoCart =(item) =>{
        // console.log(item.name);
        const newCart = [...cart, item];
        setCart(newCart);
    }

    const handleSearch = (event)=>{
        console.log(event.target.value);
        const searchText = event.target.value;
        let matchedItems = items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayItems(matchedItems);
        console.log(matchedItems.length);
    }

    return (
        <div className='container'>
            <input onChange={handleSearch} type="text" className='form-control mx-auto my-4 w-75' name="" id="" placeholder='Search here' />
            <div className='row'>
                
                <div className="col-lg-9 menu-container mb-5">
                    <div id='menu' className='row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4 '>
                        {
                           displayItems.map(item => <Item item ={item} handleAddtoCart ={handleAddtoCart}></Item>)
                        }
                    </div>
                </div>
                
                <div className="col-lg-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Menu;
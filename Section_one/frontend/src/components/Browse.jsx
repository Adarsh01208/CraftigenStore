import React, { useState } from 'react';
import ItemsData from './dummyData';
import Slide from 'react-reveal/Slide';
import { useCart } from '../contexts/CartContext'; // Import useCart to interact with the CartContext

const Browse = () => {
    const [itemList, setItemList] = useState(ItemsData);
    const { addToCart } = useCart(); // Access addToCart from CartContext

    const displayData = () => {
        if (itemList.length === 0) return <h1 className='text-center'>No Data Found</h1>
        return itemList.map((items) => (
            <div className='col-md-4 p-5 my-5 justify-content-center justify-content-evenly' key={items._id}> {/* Use _id here */}
                <div className='card shadow-lg rounded-5'>
                    <img className='img-fluid rounded-5 ' src={items.image} alt="" />
                    <div className='card-body'>
                        <h4 className='text-muted'>{items.title}</h4>
                        <p className='mt-3'> 
                            <i className="fa-solid fa-star text-warning"></i> {items.rating} Stars & 
                            <i className="fa-solid fa-user"></i> {items.reviews} Reviews 
                        </p>
                        <h2 className="float-end mt-0"> ₹{items.price} </h2>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary float-end" onClick={() => addToCart(items)}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        ));
    };

    const filterLaptop = (e) => {
        const value = e.target.value;
        setItemList(ItemsData.filter((laptop) => {
            return laptop.title.toLowerCase().includes(value.toLowerCase())
        }));
    };

    return (
        <div className='loginbg'>
            <header className='bg-body-tertiory'>
                <div className='container py-5'>
                    <Slide left>
                        <p className='display-2 text-center mb-5 fw-bold'>All Collections</p>
                    </Slide>
                    <Slide right>
                        <input type="text" placeholder='Search Items' className='form-control w-75 m-auto' onChange={filterLaptop} />
                    </Slide>
                </div>
            </header>
            <div className='container mt-5'>
                <Slide left>
                    <div className='row mt-5 p-5'> 
                        {displayData()} 
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Browse;
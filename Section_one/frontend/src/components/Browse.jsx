import React, { useState } from 'react'
import laptopData from './dummyData';
import Slide from 'react-reveal/Slide';

const Browse = () => {


    const [laptopList, setLaptopList] = useState(laptopData);

    const displayLaptopData = () => {
        if (laptopList.length === 0) return <h1 className='text-center'>No Data Found</h1>
        return laptopList.map((laptop) => (
            <div className='col-md-4 p-5   my-5 justify-content-center justify-content-evenly'>
                <div className='card shadow-lg rounded-5'>
                    <img className='img-fluid rounded-5 ' src={laptop.image} alt="" />
                    <div className='card-body'>
                        <h4 className='text-muted'>{laptop.title}</h4>
                        <p className='mt-3'> <i class="fa-solid fa-star text-warning"></i>{laptop.rating} Stars & <i className="fa-solid fa-user"></i> 5069 Reviews </p>
                        <h2 className="float-end mt-0"> ₹{laptop.price} </h2>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-primary float-end">Buy Now</button>
                    </div>
                </div>
            </div>))
    }

    const filterLaptop = (e) => {
        const value = e.target.value;
        setLaptopList(laptopData.filter((laptop) => {
            return laptop.title.toLowerCase().includes(value.toLowerCase())
        })
        );
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
            <div className='container mt-5 '>
                <Slide left>
                    <div className='row mt-5 p-5'> {displayLaptopData()} </div>
                </Slide>

            </div>
        </div>
    )
}

export default Browse;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slide from 'react-reveal/Slide';


const ListProduct = () => {
    const [productList, setproductList] = useState([]);

    const { category } = useParams();

    const fetchProductList = async () => {
        const res = await fetch("http://localhost:5000/product/getall");

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        if (category) {
            setproductList(data.filter((prod) => prod.category === category));
        } else {
            setproductList(data);
        }
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    const displayProducts = () => {
        if (productList.length === 0) {
            return <h1>No Products Found</h1>
        }
        return productList.map((product) => (
            <div className='col-md-4 p-5   my-5 justify-content-center justify-content-evenly'>
                <div className='card shadow-lg rounded-5'>
                    <img
                        className="img-fluid rounded-5"
                        src={"http://localhost:5000/" + product.image}
                        alt=""
                    />
                    <div className='card-body'>
                        <h5>{product.name}</h5>
                        <p>₹{product.price}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn  float-end rounded-5 mx-2 px-3 " style={{ backgroundColor: 'orange' }}>Buy Now</button>
                        <button class="btn btn-warning float-start rounded-5 mx-2 px-3">Add To Cart</button>

                    </div>
                </div>
            </div>
        ));
    };


    const filterProducts = (e) => {
        const value = e.target.value;
        setproductList(productList.filter((laptop) => {
            return laptop.name.toLowerCase().includes(value.toLowerCase())
        })
        );
    };

    return (
        <div className='loginbg'>
            <header className='bg-body-tertiory'>
                <div className='container py-5'>
                    <Slide left>
                        <p className='display-2 text-center mb-5 fw-bold'>Festive Favourites</p>
                    </Slide>
                    <Slide right>
                        <input type="text" placeholder='Search Items' className='form-control w-75 m-auto' onChange={filterProducts} />
                    </Slide>
                </div>
            </header>
            <div className='container mt-5 '>
                <Slide left>
                    <div className='row mt-5 p-5'> {displayProducts()} </div>
                </Slide>
            </div>
        </div>
    );
};

export default ListProduct;
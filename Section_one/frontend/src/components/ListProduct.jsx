import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import Slide from "react-reveal/Slide";

const ListProduct = () => {
  const [productList, setProductList] = useState([]);
  const { category } = useParams();
  const { addToCart, cart } = useCart();
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const fetchProductList = async () => {
    try {
      const res = await fetch("http://localhost:5000/product/getall");
      const data = await res.json();
      setProductList(
        category ? data.filter((prod) => prod.category === category) : data
      );
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product);

    // Provide feedback to the user
    setFeedbackMessage(`${product.name} added to cart!`);
    setTimeout(() => setFeedbackMessage(""), 2000);
  };

  const displayProducts = () => {
    if (productList.length === 0) {
      return <h1>No Products Found</h1>;
    }

    return productList.map((product) => (
      <div className="col-md-4 p-5 my-5 justify-content-center">
        <div className="card shadow-lg rounded-5">
          <img
            className="img-fluid rounded-5"
            src={"http://localhost:5000/" + product.image}
            alt={product.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5>{product.name}</h5>
            <p>₹{product.price}</p>
            <p>Category: {product.category}</p>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-warning float-start rounded-5 mx-2 px-3"
              onClick={() => handleAddToCart(product)}
            >
              Add To Cart
            </button>
            <span className="float-end">
              {cart.some((item) => item._id === product._id) && (
                <span className="text-success fw-bold">In Cart</span>
              )}
            </span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="loginbg">
      <header className="bg-body-tertiary">
        <div className="container py-5">
          <Slide left>
            <p className="display-2 text-center mb-5 fw-bold">Festive Favourites</p>
          </Slide>
        </div>
      </header>
      <div className="container mt-5">
        {feedbackMessage && (
          <div className="alert alert-success text-center" role="alert">
            {feedbackMessage}
          </div>
        )}
        <Slide left>
          <div className="row mt-5 p-5">{displayProducts()}</div>
        </Slide>
      </div>
    </div>
  );
};

export default ListProduct;

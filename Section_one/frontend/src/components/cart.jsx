import React from "react";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h1 className="text-center">Your Cart is Empty!</h1>;
  }

  return (
    <div className="container my-5 p-5">
      <h1 className="mb-5" style={{ textAlign: "center", fontWeight: "bold" }}>Your Cart</h1>

      {/* Cart Items List */}
      <ul className="list-group">
        {cart.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item._id}
            style={{ borderRadius: "10px", marginBottom: "15px" }}
          >
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "10px",
                  borderRadius: "5px",
                }}
              />
              <div>
                <h5 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{item.title}</h5>
                <p style={{ margin: 0 }}>₹{item.price} x {item.quantity}</p>
              </div>
            </div>

            <div>
              <button
                className="btn btn-sm btn-warning"
                onClick={() => updateQuantity(item._id, "decrease")}
                style={{ marginLeft: "10px" }}
              >
                -
              </button>
              <button
                className="btn btn-sm btn-success mx-2"
                onClick={() => updateQuantity(item._id, "increase")}
              >
                +
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total Price Section */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <h3 style={{ fontWeight: "bold" }}>Total Price:</h3>
        <h3>₹{totalPrice}</h3>
      </div>

      {/* Payment Section */}
      <div className="text-center">
        <button
          className="btn btn-primary btn-lg float-end"
          onClick={() => alert('Proceeding to Payment')}
          style={{ width: "10%", padding: "5px" }}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Cart;

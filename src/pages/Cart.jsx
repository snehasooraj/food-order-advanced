import React from "react";
import { assets } from "../assets/images/assets";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "../redux/cartSlice";
import { food_list } from "../assets/images/assets";

function Cart() {
const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.items);
const storedProducts = JSON.parse(localStorage.getItem("customProducts")) || [];
const allFoods = [...food_list, ...storedProducts];
  const cartItems =allFoods.filter((item) => count[item._id] > 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * count[item._id],
    0
  );
  const shipping = subtotal > 0 ? 40 : 0;
  const tax = subtotal * 0.05;
  const grandTotal = subtotal + shipping + tax;


  return (
    <section className="container mx-auto px-4 py-10 mt-16">
      <h2 className="text-3xl font-bold text-center  mb-10">
        Your Orders 
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg ">
          Your cart is empty
        </p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
         
          <div className="flex-1 bg-white shadow-md rounded-xl p-5">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-4 gap-4"
              >
               
                <div className="flex items-center gap-4 sm:w-1/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-(--dark)">
                      {item.name}
                    </h3>
                    <p className="text-(--orange) font-medium">
                      ₹{item.price}.00
                    </p>
                  </div>
                </div>

              
                <div className="flex items-center justify-center gap-3 sm:w-1/3">
                  <button
                    onClick={() =>
                      dispatch(removeItem(item._id))
                    }
                    className=" flex items-center justify-center"
                  >
                    <img
                      src={assets.remove_icon_red}
                      alt="remove"
                      className="w-8 "
                    />
                  </button>

                  <span className="w-8 text-center font-semibold text-(--dark)">
                    {count[item._id]}
                  </span>

                  <button
                    onClick={() =>
                       dispatch(addItem(item._id))
                    }
                    className="flex items-center justify-center"
                  >
                    <img
                      src={assets.add_icon_green}
                      alt="add"
                      className="w-8"
                    />
                  </button>
                </div>


                <div className="flex items-center justify-end gap-4 sm:w-1/3">
                  <p className="text-lg font-bold text-(--dark)">
                    ₹{item.price * count[item._id]}.00
                  </p>
                  <button
                    onClick={() =>dispatch(deleteItem(item._id))}
                    
                  >
                    <img
                      src={assets.cross_icon}
                      alt="remove item"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>

         
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-xl p-5 h-fit">
            <h3 className="text-2xl font-semibold text-(--dark) mb-5">
              Order Summary
            </h3>
            <div className="space-y-3 text-(--dark)">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Grand Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-(--dark)  text-white py-3 rounded-md font-semibold ">
         <Link to="/checkout" state={{ grandTotal }} >  Proceed to Checkout</Link> 
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;

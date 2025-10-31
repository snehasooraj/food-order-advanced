import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import {assets, food_list} from '../assets/images/assets'
import { useSelector } from "react-redux";
import { Edit2 } from "lucide-react";


function Checkout() {
  const [address, setAddress] = useState("home");
  const [payment, setPayment] = useState("card");
  const [popup, setPopup] = useState(false);
  const location = useLocation();

  const grandTotal = location.state?.grandTotal || 0;
   const count = useSelector((state) => state.cart.items);
  const cartItems = food_list.filter((item) => count[item._id] > 0);
     const saveaddress=JSON.parse(localStorage.getItem("shippingAddress")) || {};
const selectedAddress =
  address === "home" ? saveaddress.home : saveaddress.office;

  const handlePlaceOrder = () => {
    const orderId = Date.now();
    const now = new Date();
    const formattedDate = now.toLocaleString();

    
    

    const newOrder = {
      orderId,
      date: formattedDate,
      address: selectedAddress,
      payment: payment,
      items: cartItems.map((item) => ({
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: count[item._id],
        subtotal: item.price * count[item._id],
      })),
      grandTotal,
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // Show success popup
    setPopup(true);
  };




  
  return (
    <div className="min-h-screen  flex justify-center py-12 px-4">
      <div className="w-full max-w-4xl flex flex-col gap-8 mt-16">
        <h2 className="text-3xl font-bold text-center">
          Checkout
        </h2>

        <div className="flex  flex-col md:flex-row gap-6">
          <div
            className={`flex-1 bg-white text-(--dark) rounded-2xl p-6 shadow-lg cursor-pointer transition-all ${
              address === "home"
                ? "border-3"
                : ""
            }`}
            onClick={() => setAddress("home")}
          >
           <div className="flex justify-between items-center mb-2 "> 
            <h3 className="text-lg font-semibold mb-2">Home Address</h3>
              <Link to="/shipaddress?type=home" >
               <Edit2 className="w-5 h-5 text-gray-600 hover:text-(--dark) transition" />
</Link>
            </div>
           <p className="leading-relaxed">
 { saveaddress?.home
    ? `${saveaddress.home.firstName} ${saveaddress.home.lastName}, ${saveaddress.home.address}, ${saveaddress.home.city}, ${saveaddress.home.state}, ${saveaddress.home.postalCode}`
    : "123, 788, MG Road, Palayam, Trivandrum"}
</p>

          </div>

          <div
            className={`flex-1 bg-white text-(--dark) rounded-2xl p-6 shadow-lg cursor-pointer transition-all ${
              address === "office"
                ? "border-3"
                : ""
            }`}
            onClick={() => setAddress("office")}
          >
           <div className="flex justify-between items-center mb-2 "> 
            <h3 className="text-lg font-semibold mb-2">Office Address</h3>
                <Link to="/shipaddress?type=office" >
             <Edit2 className="w-5 h-5 text-gray-600 hover:text-(--dark) transition" />
</Link>
            </div>
            { saveaddress?.office
    ? `${saveaddress.office.firstName} ${saveaddress.office.lastName}, ${saveaddress.office.address}, ${saveaddress.office.city}, ${saveaddress.office.state}, ${saveaddress.office.postalCode}`
    : "45, Tech Park, Whitefield, Chennai"}
          </div>
        </div>

        <div className="bg-white text-(--dark) rounded-2xl shadow-md p-6 flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Payment Methods</h3>
          <div className="flex flex-col gap-3">
            {["card", "cod", "gpay", "wallet"].map((method) => (
              <label key={method} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={payment === method}
                  onChange={() => setPayment(method)}
                  className="accent-(--dark)"
                />
                <span>{method === "cod" ? "Cash on Delivery" : method}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white text-(--dark) rounded-2xl shadow-md p-6 flex flex-col gap-4">
          <div className="flex font-semibold justify-between text-2xl">
            <span>Grand Total</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>
          <button onClick={handlePlaceOrder}  className="mt-4 w-full bg-(--dark) mb-1 text-white py-3 rounded-xl font-semibold cursor-pointer">
            Place Order
          </button>
        </div>
      </div>
       {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80">
          <div className="bg-white text-(--dark) rounded-2xl shadow-2xl p-8 w-80 text-center">
           <div className="flex justify-center"> 
            <img 
      src={assets.ordersuccess} 
      alt="Order Success" 
      className="object-contain w-30 h-30 "
    />
    </div>
            <h3 className="text-xl font-bold mb-3">
              Order Placed Successfully 
            </h3>
            <Link to ='/ordertrack'> <p className="underline mb-6">Track your order .</p></Link>
            <button
              onClick={() => setPopup(false)}
              className="bg-(--dark) text-white py-2 px-5 rounded-md "
            >
              <Link to ='/'>Continue shopping</Link>
            </button>
          </div>
        </div>
       )}
    </div>
  );
}

export default Checkout;

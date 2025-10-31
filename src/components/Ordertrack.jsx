import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OrderTrack() {
  const [order, setOrder] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Order Placed", "Preparing", "Out for Delivery", "Delivered"];

  useEffect(() => {
    // Load  order from localStorage
    const allOrders = JSON.parse(localStorage.getItem("orders")) || [];
    if (allOrders.length > 0) {
      const latestOrder = allOrders[allOrders.length - 1];
      setOrder(latestOrder);
    }

    // Simulate progress through steps
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-semibold mb-4">No Order Found</h2>
        <Link
          to="/"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  // Dummy delivery partner
  const deliveryPartner = {
    name: "Adithya",
    phone: "+91 900000000000s0",
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-12  mt-16">
      <div className=" rounded-2xl shadow-lg p-8 md:w-1/2 text-center">
        <h2 className="text-2xl font-semiboldmb-2">
          Order Tracking
        </h2>

        {/* Order Info */}
        <div className="text-left space-y-2  mt-6 ">
          <p>
            <strong>Order ID:</strong> {order.orderId}
          </p>
          <p>
            <strong>Payment Method:</strong> {order.payment}
          </p>
          <p>
            <strong>Date & Time:</strong> {order.date}
          </p>
        </div>

        
        <div className=" rounded-xl text-left mb-6">
          <h3 className="font-semibold mb-1">Delivery Address</h3>
          <p className="text-sm leading-relaxed">
            {order.address
              ? `${order.address.firstName} ${order.address.lastName}, ${order.address.address}, ${order.address.city}, ${order.address.state} - ${order.address.postalCode}`
              : "No address found"}
          </p>
        </div>

        <div className=" rounded-xl text-left mb-6">
          <h3 className="font-semibold mb-1 ">Delivery Partner</h3>
          <p className="text-sm ">
            {deliveryPartner.name} <br />
            📞 {deliveryPartner.phone}
          </p>
        </div>



      <div className="relative flex flex-col items-start ml-6 mb-8">

  <div className="absolute left-3 top-0 bottom-0 w-2 bg-gray-200 rounded-full">
    <div
      className="absolute left-0 top-0 w-1 bg-green-500 rounded-full transition-all duration-700"
      style={{
        height: `${(currentStep / (steps.length - 1)) * 100}%`,
      }}
    ></div>
  </div>


  {steps.map((step, index) => (
    <div key={index} className="flex items-center mb-8 relative z-10">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mr-6 ${
          index <= currentStep
            ? "bg-green-500 border-green-500 text-white"
            : "bg-gray-200 border-gray-300 text-gray-500"
        }`}
      >
        {index + 1}
      </div>
      <p
        className={`text-sm ${
          index <= currentStep ? "text-green-600 font-medium" : "text-gray-500"
        }`}
      >
        {step}
      </p>
    </div>
  ))}
</div>


        <div className="mb-4">
          <p className="text-lg">
            <strong>Status:</strong>{" "}
            <span className="text-green-600 font-semibold">
              {steps[currentStep]} 
            </span>
          </p>
        </div>

        <Link
          to="/"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

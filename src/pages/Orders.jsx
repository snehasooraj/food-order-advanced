import React, { useEffect, useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <section className="container mx-auto flex-col justify-center  px-4 py-10 mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-center text-lg">No orders found yet.</p>
      ) : (
        <div className=" md:w-1/2  md:mx-auto space-y-8 ">
          { [...orders].reverse().map((order, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg p-6 flex flex-col gap-4"
            >
           
              <div className="flex flex-col sm:flex-row justify-between  sm:items-center border-b pb-3">
                <div>
                  <h3 className="font-bold text-xl ">
                    Order ID: {order.orderId}
                  </h3>
                  <p className="text-gray-600 font-semibold text-xl">{order.date}</p>
                </div>
                <div >
                  <p className="text-sm text-gray-700">
                    Shipping to: <span className="font-medium">{order.address.address} {order.address.city} {order.address.state} {order.address.postalCode} </span>
                  </p>
                   <p className="text-gray-700 text-sm">Payment Method :{order.payment}</p>

                </div>
              </div>

           
              <div className="space-y-3">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-3 border-b pb-3 last:border-none"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-semibold ">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p >₹{item.subtotal}</p>
                  </div>
                ))}
              </div>

              <div className="text-right font-semibold text-lg ">
                Grand Total: ₹ {order.grandTotal.toFixed(2)}
              </div>
            </div>
          
          ))}
        </div>
        
      )}
    </section>
  );
}

export default MyOrders;

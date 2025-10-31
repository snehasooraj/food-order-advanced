import React ,{useState} from 'react'
import { assets } from "../assets/images/assets"
import { useSelector , useDispatch } from 'react-redux'
import { addItem, removeItem } from "../redux/cartSlice";

function Menu({ foodItems, category, search}) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.items);


  return (

    <section className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold text-center mb-7 '>{category ? category : search ? `Search Results` : "Menu"}</h2>

      {foodItems.length === 0 ? (
        <p className="text-center text-xl  py-10">
          No match found 
        </p>
      ) : (


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
          {foodItems.map((menu, index) => (

            <div key={index} className=' shadow-md rounded-2xl bg-white overflow-hidden transition-transform duration-300 hover:scale-105'>
              <img src={menu.image}
                alt={menu.name} className='w-full h-48 object-cover' />
              <div className='p-3 flex flex-col justify-between h-[110px]'>
                <div>
                   <div className='flex justify-between items-center mb-2'>
                  <h3 className="text-xl font-semibold text-(--dark) mb-2">
                    {menu.name} </h3>
                     <div className="flex items-center gap-2 overflow-hidden">
                  <button
                   onClick={()=>dispatch(removeItem(menu._id))}
                   className="w-7 h-10 flex items-center justify-center transition"
                  >
                   <img src={assets.remove_icon_red} alt="add icon"/>
                  </button>
                  <span className="w-6 h-8 flex items-center justify-center text-(--dark) font-semibold">
                  {count[menu._id] || 0}
                  </span>
                  <button
                   onClick={()=>dispatch(addItem(menu._id))}
                     className="w-7 h-10 flex items-center justify-center transition"
                  
                  >
                  <img src={assets.add_icon_green} alt="add icon"/>
 
                  </button>
                </div>
                </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-(--orange)">
                      ₹{menu.price}.00 </span>
                    <div className="flex items-center text-yellow-500">

                      <span className="ml-1 "><img src={assets.rating_starts}></img></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Menu
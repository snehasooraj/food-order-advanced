import React , {useState, useRef} from 'react'
import Hero from '../components/Hero'
import { menu_list } from "../assets/images/assets"
import Menu from '../components/Menu'
import { food_list } from "../assets/images/assets"

function Home() {
const [category , setCategory] = useState(null);
const [search , setSearch] =useState("");
const menuRef = useRef(null);

const storedProducts = JSON.parse(localStorage.getItem("customProducts")) || [];


const allFoods = [...food_list, ...storedProducts];
//category filter
const CategoryFoods= category ?allFoods.filter(food => food.category === category) :allFoods;
//search bar filter

const searchFilteredFoods = search ? CategoryFoods.filter(food=>food.name.toLowerCase().includes(search.toLowerCase())):CategoryFoods

//category click
const categoryClick =(menuname)=>{
setCategory(menuname);
setSearch("");

 setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

//searchbar onchange
const onsearchFood =(term)=>{
  setSearch(term);
  setCategory(null);
}


  return (
    <div>
       {/* Hero Section */}
      <Hero searchfood={onsearchFood} />

       {/* Category Section */}
       <section className='container mx-auto px-4 py-16'>
<h2 className='text-3xl font-bold text-center mb-10 '>
  Categories
</h2>
<div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 justify-center'>
  {menu_list.map((category,index) =>(


  
  <div key={index} onClick={() => categoryClick(category.menu_name)} className='flex flex-col items-center group cursor-pointer'>
<div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-4 border-(--accent) transition-transform duration-300 group-hover:scale-105">
                <img
                 src={category.menu_image} alt={category.menu_name}
                  className="w-full h-full object-cover"
                />
              </div> 
   <p className="mt-4 text-lg font-semibold  group-hover:text-(--accent) transition">
             {category.menu_name}
              </p>

</div>
 ))}

</div>
       </section>
       <div ref={menuRef} className="scroll-target">
       <Menu foodItems={searchFilteredFoods} category={category} search={search} 
        />
    </div>
    </div>
  )
}

export default Home
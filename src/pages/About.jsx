import React from 'react'
import {assets} from "../assets/images/assets"
function About() {
  return (
          <section className='w-full min-h-screen bg-cover bg-center relative flex flex-col items-center '>
         <div className="w-full h-[50vh] bg-cover bg-center relative flex items-center justify-center"
           style={{ backgroundImage: `url(${assets.header_img})` }}
         >
  
   </div>
   <div className="max-w-4xl mx-auto px-6 py-10 text-center">
      <h1 className="text-3xl font-bold  mb-6">
        About Food Paradise
      </h1>

      <p className="text-lg leading-relaxed">
  <strong>Food Paradise</strong> is your ultimate destination for delicious meals,
  delivered with ease. Our platform makes discovering and ordering your favorite
  dishes a delightful experience. With <strong>Food Paradise</strong>, you can
  explore a wide variety of cuisines, filter by category, search for specific
  items, and manage your cart — all in just a few clicks. Built using the{" "}
  <strong>React framework</strong> and <strong>Tailwind CSS</strong>, it offers a
  fast, smooth, and visually appealing interface that works beautifully on any
  device. Enjoy a seamless way to satisfy your cravings anytime, anywhere — with
  <strong> Food Paradise</strong>.
</p>


    </div>

   </section>
  )
}

export default About
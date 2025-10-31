import React from "react";

function Footer() {
  return (
    <footer className="bg-(--accent) text-(--light) text-center py-6 mt-16">
      <p className="text-sm md:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">FoodSphere</span>.  
        Crafted with care to make dining effortless.
      </p>
    </footer>
  );
}

export default Footer;

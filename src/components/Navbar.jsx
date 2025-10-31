import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { assets } from "../assets/images/assets";

function Navbar() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (isDark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [isDark]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/account");
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-[var(--dark)] text-[var(--light)] transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand */}
        <h1 className="text-3xl font-bold tracking-wide text-white !text-white">
  <Link to="/" className="hover:text-[var(--accent)] transition-colors duration-200">
    Food Paradise
  </Link>
</h1>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg items-center">
          <li><Link to="/" className="hover:text-[var(--accent)] transition">Home</Link></li>
          <li><Link to="/orders" className="hover:text-[var(--accent)] transition">Orders</Link></li>
          <li><Link to="/about" className="hover:text-[var(--accent)] transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-[var(--accent)] transition">Contact</Link></li>
          <li><Link to="/admin" className="hover:text-[var(--accent)] transition">Admin</Link></li>

          {/* Cart */}
          <li>
            <button
              onClick={() => navigate(user ? "/cart" : "/account")}
              className="relative group"
            >
              <img
                src={assets.basket_icon}
                alt="Cart"
                className="w-8 h-8 invert group-hover:opacity-80 transition"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </li>

          {/* Theme Toggle */}
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center p-2 hover:bg-[var(--accent)] rounded-full transition text-white hover:text-[var(--dark)]"
            >
              {isDark ? (
                <Sun className="w-7 h-7 text-yellow-400" />
              ) : (
                <Moon className="w-7 h-7" />
              )}
            </button>
          </li>

          {/* Profile or Login */}
          <li>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 cursor-pointer group hover:text-[var(--accent)]"
                >
                  <img
                    src={assets.profileicon}
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-[var(--accent)]"
                  />
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-44 bg-[var(--primary)] text-[var(--light)] rounded-md shadow-lg border border-[var(--accent)]">
                    <div className="px-4 py-2 border-b border-[var(--accent)] text-[var(--accent)] font-semibold">
                      {user.username}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-[var(--accent)] hover:text-[var(--dark)] rounded-b-md transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/account")}
                className="bg-[var(--secondary)] text-white px-5 py-2 rounded-md hover:bg-[var(--accent)] hover:text-[var(--dark)] transition"
              >
                Login
              </button>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--light)] text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[var(--dark)] text-[var(--light)] overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-lg">
          <li><Link to="/" className="hover:text-[var(--accent)]">Home</Link></li>
          <li><Link to="/orders" className="hover:text-[var(--accent)]">Orders</Link></li>
          <li><Link to="/about" className="hover:text-[var(--accent)]">About</Link></li>
          <li><Link to="/contact" className="hover:text-[var(--accent)]">Contact</Link></li>
          <li><Link to="/admin" className="hover:text-[var(--accent)]">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

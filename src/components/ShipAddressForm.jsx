import React, { useState ,useEffect} from "react";
import { useNavigate , useLocation} from "react-router-dom";

function ShipAddressForm() {
    const navigate = useNavigate();
    const location = useLocation();
  const params = new URLSearchParams(location.search);
  const addressType = params.get("type") || "home";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

 useEffect(() => {
    const saveaddress =
      JSON.parse(localStorage.getItem("shippingAddress")) || {};
    if (saveaddress[addressType]) {
      setForm(saveaddress[addressType]);
    }
  }, [addressType]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

const savaddress =
      JSON.parse(localStorage.getItem("shippingAddress")) || {};
    savaddress[addressType] = form; // Save under home or office
    localStorage.setItem("shippingAddress", JSON.stringify(savaddress));

    navigate("/checkout");
  };

  return (
<div className="min-h-screen flex justify-center items-center  py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className=" rounded-2xl shadow-lg p-8 w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
       {addressType === "home" ? "Home Address" : "Office Address"}
       
        </h2>

        <div className="flex gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
            required
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 rounded-md"
          rows="3"
          required
        />

        <div className="flex gap-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            className="w-1/2 border p-2 rounded-md"
            required
          />
           <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={form.postalCode}
          onChange={handleChange}
          className="w-1/2 border p-2 rounded-md"
          required
        />
        </div>

       

        <button
          type="submit"
          className="w-full bg-(--dark) text-white py-2 rounded-md font-semibold"
        >
           Save {addressType === "home" ? "Home" : "Office"} Address
        </button>
      </form>
    </div>
  );
}


export default ShipAddressForm
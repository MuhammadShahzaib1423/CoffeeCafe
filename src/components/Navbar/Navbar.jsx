import React, { useState } from "react";
import logo from "../../assets/coffee.png";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";

const Menus = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Services", link: "/#services" },
  { id: 3, name: "About", link: "/#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#4a1e1b] to-[#4a1e1b]/90 text-white">
      <div className="container py-3 px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a
            href="#"
            className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            <img src={logo} alt="logo" className="w-14" />
            Coffee Cafe
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {Menus.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="text-white/70 hover:text-white hover:underline text-lg"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Order Button */}
          <button className="hidden md:flex bg-[#854d3d]/70 px-4 py-2 rounded-full hover:scale-105 duration-200 items-center gap-3">
            Order Now <FaCoffee className="text-xl" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden mt-4 bg-[#4a1e1b]/90 rounded-lg p-4`}
        >
          <ul className="flex flex-col gap-3">
            {Menus.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="block text-white/70 hover:text-white hover:underline text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="w-full mt-3 bg-[#854d3d]/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center justify-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            Order Now <FaCoffee className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

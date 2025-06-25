import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Get started", path: "/" },
  { label: "Educators", path: "/educators" },
  { label: "Batch", path: "/batch" },
  { label: "Store", path: "/store" },
  { label: "Subscription plan", path: "/subscription" },
  { label: "Success stories", path: "/success" },
  { label: "About exam", path: "/exam" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="flex justify-between items-center flex-wrap gap-4 mb-10 mt-5 px-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold text-indigo-600">Medical</h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-3 text-gray-800 font-medium">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `font-semibold px-3 transition duration-300 ${
                  isActive ? "text-indigo-600" : "hover:text-black"
                }`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
     <div className="hidden md:flex space-x-3">
  {[{ btn: "Login", path: "/login" }, { btn: "Register", path: "/register" }].map((item, idx) => (
    <NavLink
      key={idx}
      to={item.path}
      className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
    >
      {item.btn}
    </NavLink>
  ))}
</div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-indigo-600 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full mt-4 md:hidden bg-white rounded-lg shadow-md p-4 space-y-4 z-50"
        >
          <ul className="space-y-3 text-gray-800 font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className="block hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-2 pt-2">
             {[{ btn: "Login", path: "/login" }, { btn: "Register", path: "/register" }].map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              {item.btn}
            </NavLink>
          ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

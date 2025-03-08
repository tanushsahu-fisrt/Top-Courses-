import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from './CartContext.js';

const Navbar = () => {
  const { cart } = useCart();

  return (
    <div>
      <nav className='bg-bgDark py-2 flex justify-center'>
        <h1 className='text-center text-3xl font-bold text-white'>Top Courses</h1>
        <Link to="/cart" className='text-3xl text-white absolute right-9 top-4'>
          <FaShoppingCart />
        </Link>
          {cart.length > 0 && <span className='text-sm absolute top-2 right-11 px-1 bg-red-500 rounded-full text-white'>{cart.length}</span>}
      </nav>
    </div>
  )
}

export default Navbar;
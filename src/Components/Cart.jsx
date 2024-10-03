import React from 'react';
import { useCart } from './CartContext.js';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="text-2xl font-bold mb-4 max-w-auto mx-auto md:flex-row justify-center overflow-hidden ">
      
      
      <h1 className="text-2xl font-bold mb-4 flex flex-col p-5 gap-5 my-14  h-[100%] justify-between ">Your Cart :</h1>
      {cart.length === 0 ? (
        <p className='flex flex-col p-5 gap-5 my-14  h-[100%] justify-between'>Your cart is empty</p>
      ) : (
        <ul className='flex flex-wrap justify-between gap-5 p-5 my-1'>
          {cart.map(item => (
            <li key={item.id} className="border rounded flex flex-col items-center p-4 w-auto h-auto">

              <img src={item.image.url} alt={item.image.alt} className= "w-full h-[200px] object-cover mb-4" />              
              <h3 className="font-semibold text-center">{item.title}</h3>
              <p className='text-center'>Quantity: {item.quantity}</p>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white px-2 py-1 rounded  "
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/" >
      <button className="uppercase bg-yellow-300 hover:bg-purple-50 rounded-lg
       text-white transition duration-300 ease-linear mt-5 border-2
        border-green-600 font-semibold
         hover:text-green-700 p-3 px-10 
         tracking-wider items-center justify-center ">
        Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Cart;
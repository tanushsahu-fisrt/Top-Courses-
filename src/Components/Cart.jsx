import React from 'react';
import { useCart } from './CartContext.js';
import { Link, useNavigate } from 'react-router-dom';
import { WiDirectionLeft } from "react-icons/wi";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const navigate = useNavigate();

  return (
    <>

      
      <button 
      className=" bg-yellow-300 mx-14 px-4 mt-5 p-2 text-2xl first-letter 
      rounded-full text-white items-center justify-center w-[5%]"
      onClick={() => navigate("/")}
      >
      <WiDirectionLeft className='text-2xl w-[100%]' />
      </button>
   

    <div className="text-xl  mb-4 max-w-auto mx-auto md:flex-row justify-center overflow-hidden ">
      { cart.length === 0 ? (
        <p className='flex flex-col p-5 gap-5 my-14  h-[100%] justify-between'>OOps!! Nothing In Cart</p>
      ) : (
        <ul className='flex flex-wrap justify-between gap-5 p-5 my-1'>
          {
          cart.map(item => (
            <li key={item.id} className="border shadow-2xl rounded flex flex-col items-center p-2 w-auto h-auto">
              <img src={item.image.url} alt={item.image.alt} className= "w-[150] h-[150px] object-cover mb-4" />              
              <h3 className="font-semibold text-center">{item.title}</h3>
              <p className='text-center'>Quantity: {item.quantity}</p>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white p-1 rounded-full  "
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>

     

    </>
  );
};

export default Cart;
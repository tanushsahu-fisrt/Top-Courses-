import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 const addToCart = (course) => {
    setCart((prevCart) => {
      const existingCourse = prevCart.find(item => item.id === course.id);
      if (existingCourse) {
        return prevCart.map(item => 
          item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart , { ...course, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== courseId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

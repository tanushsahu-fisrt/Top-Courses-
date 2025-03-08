import React, { useState } from "react";
import { useLocation } from "react-router";
import { toast } from 'react-toastify';
import { useCart } from './CartContext.js';

const CourseDetail = () => {
  const location = useLocation();
  const { course } = location.state || {};

  const { addToCart } = useCart();

  const[enroll,setEnroll] = useState(false);

   function handleAddToCart() {
          addToCart(course);
          toast.success("Added to cart successfully");
    }
    
    function handleEnroll() {
          setEnroll(true);
          toast.success("Enrolled successfully");
    }
  

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl font-semibold text-red-600">
        Course data not found.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h1 className="text-2xl text-center font-bold text-gray-800 mb-4">{course.title}</h1>

        <div className="relative">
          <img
            src={course.image.url}
            alt={course.image.alt}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-600 text-lg mt-4">{course.description}</p>

        <div className="mt-4">
          <p className="text-sm text-gray-500 font-medium">
            <span className="font-semibold text-gray-700">Course ID:</span> {course.id}
          </p>
        </div>

        <button 
        className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded transition-all duration-300"
        onClick={handleEnroll}
        >
         {enroll ? 'Enrolled' : 'Enroll Now' }
        </button>
        <button 
        className="mt-6 mx-2 bg-green-500 text-white font-bold py-2 px-6 rounded transition-all duration-300"
        onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;

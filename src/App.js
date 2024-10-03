import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/loader/Spinner.jsx";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, 
         Route,
         Routes }  from 'react-router-dom';
import { CartProvider } from "./Components/CartContext";


const App = () => {
  const [courses, setCourses] = useState([]);
  const [laoding, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      setCourses(output.data);
      
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    
    
    <CartProvider>
      <div className="min-h-screen flex-col flex bg-bgDark2">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <div>
                  <Filter
                    filterData={filterData}
                    category={category}
                    setCategory={setCategory}
                  />
                </div>
                <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
                  {laoding ? <Spinner /> : <Cards courses={courses} category={category} />}
                </div>
              </>
            } />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
    
  );
};

export default App;

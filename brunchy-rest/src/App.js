import React, { useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Delivery from "./components/Delivery";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
        {loading ? (
          <div className="app">
            <ClimbingBoxLoader size={30} color={"#FF8515"} loading={loading} />
          </div>
        ) : (
            <div className="main">
              <Header />
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/call-us" element={<Contacts />} />
                <Route path="/free-delivery" element={<Delivery />} />
              </Routes>
            </div>
              )}
    </>
  );
};

export default App;

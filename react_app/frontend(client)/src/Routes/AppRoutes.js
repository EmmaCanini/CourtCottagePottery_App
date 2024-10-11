import React from 'react';  
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Shop from '../Pages/Shop';


const AppRoutes = () => {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Shop />} />
            <Route path="*" element={<div>404 - Page Not Found</div>} /> 
            
        </Routes>
       
    );
};

export default AppRoutes;

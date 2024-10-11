import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../Components/ProductList";

const Shop = () => {
    const navigate = useNavigate();

    return( 

    <div>
      <h1>All products</h1>
      <ProductList />
      <div className="parent-container">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
};

    export default Shop;
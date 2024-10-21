import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../Components/ProductList";
import SocialsButtons from "../Components/SocialsButtons";

const Shop = () => {
    const navigate = useNavigate();

    return( 

    <div>
      <h1 className="title">All Products</h1>
      <ProductList />
      <div className="parent-container">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
      </div>
      <SocialsButtons/>
    </div>
  );
};

    export default Shop;
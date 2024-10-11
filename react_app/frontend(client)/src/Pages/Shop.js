import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1> All products</h1>
            <button className="home-button" onClick={() => navigate('/')}>Home</button>
                

        </div>
    )
    }

    export default Shop;
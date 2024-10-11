import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    
    return(
    <div>
        <h1>About Us</h1>
        
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
               
        </div>
    )
}

export default About;
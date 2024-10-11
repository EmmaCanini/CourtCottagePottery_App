import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    
    return(
    <div>
        
        <h2 className="title">Our Story</h2>
       
        <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, justo vel efficitur interdum, 
        nisi tortor tempus urna, eu faucibus arcu nunc ut quam. Mauris suscipit, metus vel elementum venenatis, 
        dolor nisi maximus risus, in posuere magna nulla ac leo. Suspendisse tempus sit amet neque id elementum. 
        </p>
        <div className="parent-container">
        <button className="home-button" onClick={() => navigate('/')}>Home</button>
        </div>        
        </div>
    )
}

export default About;
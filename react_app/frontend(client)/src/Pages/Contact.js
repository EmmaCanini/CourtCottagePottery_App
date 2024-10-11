import React from "react";
import { useNavigate } from "react-router-dom";

const Contact= () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Contact Us</h1>
            
                    <button className="home-button" onClick={() => navigate('/')}>Home</button>
                

        </div>
    )

}

export default Contact;
import React from "react";
import { useNavigate } from "react-router-dom";
import SocialsButtons from "../Components/SocialsButtons";

const Contact= () => {
    const navigate = useNavigate();

    return(
        <div>
            <h2 className="title">Contact Us</h2>
            <div className="parent-container">
            <button className="home-button" onClick={() => navigate('/')}>Home</button>
            </div>
            <SocialsButtons />
            
        </div>
    )

}

export default Contact;
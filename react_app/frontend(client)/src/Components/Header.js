import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.jpg';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="top-bar">
                <img className="logo" src={logo} alt="Logo" onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }} />
                <h1 className="banner-title">Court Cottage Pottery</h1>
                <div className="buttons">
                    <button className="about-button" onClick={() => navigate('/about')}>About</button>
                    <button className="contact-button" onClick={() => navigate('/contact')}>Contact</button>
                    <button className="shop-button" onClick={() => navigate('/products')}>Shop</button>
                 </div>  {/* // useNavigate can get these routes from AppRoutes without calling it in here because 
                                        App is wrapped by BrowserRouter, then AppRoutes is called in App and everything else
                                         is wrapped by App*/}
            </div>
        </div>
    );
};

export default Header;

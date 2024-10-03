import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'; 


function SocialsButtons() {
  return (
    <div className="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
     <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'rgb(100, 100, 100)' }} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} size="2x" style={{ color: 'rgb(100, 100, 100)' }} />  
      </a>
    </div>
  );
}

export default SocialsButtons;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';
import Header from './Components/Header';
import AppRoutes from './Routes/AppRoutes';
import image from './Assets/banner_pic.jpg';
import SocialsButtons from './Components/SocialsButtons';
import Product from './Components/Product';




function App() {


  return (
    <>
    
      <Header />
      <AppRoutes />
 

    </>
  );
}

  




export default App;
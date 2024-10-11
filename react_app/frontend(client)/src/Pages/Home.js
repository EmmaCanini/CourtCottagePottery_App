import React from "react";
import image from '../Assets/banner_pic.jpg';
import SocialsButtons from '../Components/SocialsButtons';
import Product from '../Components/Product';

const Home = () => {
    const product1 = { // mock data- will replace with database content later..
        id: 1,
        title: 'Vase',
        price: 22.3,
        description: 'loren ipsum',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: {
          rate: 4.1,
          count: 259,
        },
      };
    
      const product2 = {
        id: 2,
        title: 'Plate',
        price: 55.99,
        description: 'lorem ipsum.',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: {
          rate: 4.7,
          count: 500,
        },
      };
    
      const product3 = {
        id: 3,
        title: 'Bowl',
        price: 15.99,
        description: 'lorem ipsum',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: {
          rate: 4.4,
          count: 165,
        },
      };
    return (
        <div>
            <h1>Handmade ceramics from the Malvern Hills</h1>
            <img className="main-image" src={image} alt="Main" />
      <h2 className="title">Featured Products</h2>
      <p className="featured-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, justo vel efficitur interdum, 
        nisi tortor tempus urna, eu faucibus arcu nunc ut quam. Mauris suscipit, metus vel elementum venenatis, 
        dolor nisi maximus risus, in posuere magna nulla ac leo. Suspendisse tempus sit amet neque id elementum. 
      </p>
      <div className="content-container">
        {/* Product components with temp mock data */}
        <Product data={product1} />
        <Product data={product2} />
        <Product data={product3} />
      </div>
      <div className="social-icons">
        <SocialsButtons/>
      </div>
        </div>
    );

};

export default Home;
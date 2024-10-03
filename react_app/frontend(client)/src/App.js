import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import Product from './Components/Product';
import image from './Assets/banner_pic.jpg';
import logo from './Assets/logo.jpg';
import './CSS/App.css';



function App() {
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
    <div className="App">  

      <div className="panel">
        <div className="top-bar">
          <img className="logo" src={logo} alt="Logo" />
          <h1 className="banner-title">Court Cottage Pottery</h1>
          <div className="buttons">
            <button className="shop-button">Shop</button>
            <button className="about-button">About</button>
            <button className="contact-button">Contact</button>
          </div>
        </div>
      </div>

    
      <img className="main-image" src={image} alt="Main" />

  
      <h2 className="title">Featured Products</h2>

      <div className="content-container">
        {/* Product components with temp mock data */}
        <Product data={product1} />
        <Product data={product2} />
        <Product data={product3} />
      </div>
    </div>
  );
}




export default App;
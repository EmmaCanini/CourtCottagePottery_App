import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
import image from './Assets/banner_pic.jpg';
import logo from './Assets/logo.jpg';
import './CSS/App.css';



function App() {
  return (              
    <div className="App">  {/*/this div acts as a container for the whole app (className for CSS referencing) */}
    
    
          
    
    <div className="panel">
  <div className="top-bar">
    <h1 className="banner-title">Court Cottage Pottery</h1>
    <img className="logo" src={logo} alt= "Logo" />
    <div className="buttons">
    <button className="shop-button">Shop</button>
    <button className="about-button">About</button>
    <button className="contact-button">Contact</button>
    </div>
  </div>
</div>

          <img className="main-image" src={image} alt="Main_image"  /> 


          <h2 className= "title">Featured Products</h2>
          
 

      <div className="content-container">     {/*// div for Productlist container */}
        <ProductList /> 
      </div>

    </div>
  );
}


export default App;

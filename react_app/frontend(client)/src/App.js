import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './Components/ProductList';
// import image from './Assets/Logo.webp';



function App() {
  return (              
    <div className="App">  {/*/this div acts as a container for the whole app (className for CSS referencing) */}
    
      <div className="header-panel">            
          {/*<img className="logo" src={image} alt="Logo" />  */}
          <h1 className= "title">All Products</h1>
          </div>
 

      <div className="content-container">     {/*// div for Productlist container */}
        <ProductList />
      </div>

    </div>
  );
}


export default App;

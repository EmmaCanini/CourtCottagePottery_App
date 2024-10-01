
import React, {useState, useEffect} from "react";
import Product from "./Product";
import '../CSS/ProductList.css';


// INITIAL SET UP AND STATE DECLARATIONS
const ProductList = () => { //declares productList component which will render all the products from the endpoint                   
    const [products, setProducts] = useState([]);          //declares useState hook to create state variable 'products' starting as an empty array
    const [error, setError] = useState(null);              //'products/error/searchPhrase/filtered/visible' holds data that will be changed, 
    const [searchPhrase, setSearchPhrase] = useState('');  //'setProducts/setError/setSearchPhrase/setFiltered/setVisible' set what will be updated when the time comes
    const [filtered, setFiltered] = useState([]);
    const [visible, setVisible] = useState(3); // this one is set to an initial number so that some are shown already on the page before loading more with the button
    
    
// FETCHING DATA NEEDED FOR COMPONENT TO DO ITS JOB
    useEffect(() => {                    //declares useEffect hook that actions when the component mounts(starts) that deals with the fetch of the data needed
        fetch('https://fakestoreapi.com/products')              //makes the request to this declared endpoint/database and does the following with the data it gets back...
        .then((response) => response.json())                    //converts the fetched 'response' to json format
        .then((data) => {               // if the fetch of 'data' (the jsonified 'response') was successful, then the following callback function excecutes...
            setProducts(data);      //updates the fetched cases by filling them with data.data (accessed with dot notation because data is nested in another data array)
            setFiltered(data);      //updates the filtered state with 'data' (all the cases, initially...)
            
        })
        .catch((error) => setError('Error fetching data'));  //however, if there's an error with the fetching, change the error state to a general error message
}, []); // this empty dependency array (what the fucntion conditionally depends on when it runs) ensures the Effect only runs once, 
                    //unless something fills it. e.g the end point gets updated with added data

//FILTERING THE CASES USING THE DATA
    useEffect(() => { //another useEffect for when the 'searchPhrase' or 'cases' changes
        const searchResults = products.filter((productData) => //filters through the cases array when it comes in (which we call caseData but it's basically the data.data)
            Object.values(productData).some(value => //checks if anything in caseData matches the searchPhrase...
                value.toString().toLowerCase().includes(searchPhrase.toLowerCase()) //then converts any imput into a string, then to lowercase, then checks if that is in there
                
        ));

        setFiltered(searchResults);
}, [searchPhrase, products]); //then this updates the 'filtered' stat with the anything that matches the sreach result.

//EVENT HANDLING
    const handleShowMore = () => { //declares a function that will be used later..
        setVisible((initial) => initial + 3); // to updating the state of 'visible'(which starts at 3) by adding 3 to its currnet value when showmore is called.
    }
    
// CONDITIONAL RENDERING
    if (error) {        
    return <div>{error}</div>; //conditional error handling if an error occurs during any of this.
  }                             // It just returns a div with the error message defines earlier instead running the rest of the component
 
    // JSX FOR RENDERING THE COMPONENT
    return(
        <>
        <input                          // This makes an imput field for the search functionality
        type= "text"                    // specify imput type...
        placeholder= "Search Products"     //Specify anything written there as a placeholder
        value= {searchPhrase}           //specify what will go into the box
        onChange= {(e) => setSearchPhrase(e.target.value)}  //specify the behaviour and make it update accordingly. Here, it updates the state of 'searchPhrase'
        className= "search-box"         // to reference the css later                                              //whenever thhe value typed in changes
        />

        <div                            // renders a div to contain the list of filtered(or not filtered) cases...
        className="product-list">          {/*// for the css reference */}
                {filtered.slice(0, visible)//this slices the 'filtered' array to only show number of case specified by 'visible'...
                .map((productData) => (   // then the .map maps over the sliced 'filtered' array...
                    <Product key={productData.id} data={productData} /> // to render a Case component for each case.
                    ))} {/*// the 'key' element assigns a unique number to each case component, and 'data' passes the caseData from earlier 
                                                                                                // to the Case as a prop so it changes accordingly */}
        </div>


        {/*//CONDITIONAL RENDER OF SHOW MORE BUTTON */}
        {visible < filtered.length && ( //This is for the Show More button- meaning 'if there are less cases visible than the total number of filtered cases..'
        <button 
        onClick={handleShowMore}            // on the click of this button, the handle show more function from earlier will run
        className= "show-more"> Show More         {/*//css reference */}  
        </button>
        )}
        </>
    );
};

export default ProductList;
    






import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import '../CSS/CustomAccordion.css';



const Product = ({ data }) => { // Here we pass the data as a parameter(from the api fetch in the parent component CaseList) to a Case component
                                        // and we want it to return a styled case item in JSX...
    if (!data) {
    return <div>Loading...</div>;       // if the data is not available yet though, a little message to say it's coming
  }         
                                        
    return (
        <div className="product-item"> 
           
        <Accordion> {/*we bring in a collapsable component using Bootstrap  */}
            <Accordion.Item eventKey={data.id.toString()}>  {/* this represents an item within the accordion object to manage it's open/close state */}

                <Accordion.Header className="custom-accordion-header">  {/*this section will always be the visible, clickable part, so it needs logic to decide what populates it.. */}
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'row',  
                    justifyContent: 'space-between',  
                    alignItems: 'center', 
                    flexDirection: 'column', 
                    color: 'rgb(180, 180, 180)', 
                    fontSize: '23px', 
                    fontFamily: '"Urbanist", sans-serif', 
                    fontWeight: 'Lighter'}}> {/* inline styling for the layout of the accordion */}
                
                {/*// each of these span elements represent which parts from the data will be visible in the header */}
                <span><strong>Product:&nbsp;</strong>{data.title}</span>  {/*// it uses the data as props so this component can be used for every different case. */}
                <span><strong>£&nbsp;{data.price}</strong></span>
                <span>
                    <img src={data.image} alt="Image of product" style={{ maxWidth: '450px', maxHeight: '450px', borderRadius: '10px' }}/></span> {/*// alt here is helful for screen reader functionality */}
                </div>
                </Accordion.Header>

                <Accordion.Body> {/*// this is the rest of the information which is not visible till the accordion is clicked to open... */}
                        <div style={{fontSize: '18px', color: 'rgb(180, 180, 180)', fontFamily: '"Urbanist", sans-serif', fontWeight: 'Lighter'}}> {/*//inline styling */}

                        <p><strong>Product Description:&nbsp;</strong>{data.description}<br></br>       
                        <strong>Rating:&nbsp;</strong> {data.rating.rate} ({data.rating.count} reviews)<br></br></p>
                        </div>
                </Accordion.Body>

            </Accordion.Item>

        </Accordion>        
        
        </div>
        
    );
};


export default Product;
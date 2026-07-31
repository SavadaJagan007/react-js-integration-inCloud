// ProductDetails.js
import React, { useEffect, useState } from 'react';
import Store from './Store.json';
import { useParams } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';
import { ShoppingCart } from 'react-feather';


export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

   
   

  useEffect(() => {
    // Assuming your data structure in Store.json is an array of products
    const foundProduct = Store.products.find(item => item.id === parseInt(id));

    if (foundProduct) {
      setProduct(foundProduct);
      
    }
  }, [id]);

  return (
    <div>
      {product ? (
        
          <div className='bg-white' style={{width:1232,height:598,display:'flex'}}>
            
                <div className='card amazon-card m-3 p-3 bg-light card-border' style={{width:500,height:500}}>
                      <div className='card-body'>
                      <center>
                      <img style={{ width: 400,marginLeft:2,height:400 }} src={product.image} alt="Product" />
                  
                      </center>  
                         <div className='card-footer ' style={{borderBlockColor:'white'}}>
                           
                           
                           <button className='btn btn-warning text-light' onClick={()=>{handleAdd(product);alert("item successfully added in the")}} style={{fontWeight:'bold',backgroundColor:'orangered'}} >
                          <ShoppingCart size={25}  />
                           <span style={{ marginLeft: '8px' }}>ADD TO CART</span>
                           </button>

                          </div>
                  
                  {/* Add more product details if needed */}
                      </div>
                  
                
                </div>
                <div style={{marginTop:100,flex:1}} >
                  
                <h3>{product.name} </h3><br/>&nbsp; 
                <p className='text text-success' style={{fontWeight:'bold',marginTop:'-30px'}}>Special Price</p><br/>
                <h2 style={{marginTop:'-30px'}}>₹ {(product.price).toLocaleString()}</h2>
                
                </div>  

          </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
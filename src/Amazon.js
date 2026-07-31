import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from './cartSlice';
import Store from './Store.json';
import './App.css';
import Background from './Background';
import { Link} from 'react-router-dom';
import Category from './Category';
import { useEffect, useState } from 'react';

export default function Amazon() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
 
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [helo,ji]=useState('')
  
  

  useEffect(
     () => {
    const normalizedSelectedCategory = selectedCategory.trim().toLowerCase();
  
    const products = normalizedSelectedCategory
      ? Store.products.filter(
          (item) => item.category.trim().toLowerCase() === normalizedSelectedCategory
        )
      : Store.products;
  
    setFilteredProducts(products);
  }, [selectedCategory]);
  useMemo(
    ()=>{
      const normalhelo=helo.trim().toLocaleLowerCase();
      const forducts=normalhelo
      ?Store.products.filter((item)=>item.category.trim().toLocaleLowerCase() === normalhelo)
      : Store.products;
             
      setFilteredProducts(forducts);
    },[helo]
  )
 
  return (
    <div className='amazon-body bg-white'>
      <div style={{position:'fixed',top:0,left:0,right:0,zIndex:1}}>
      <Background xyz={ji} />{console.log("Amazon: "+helo)}
      <div style={{backgroundColor:'white',height:50}}>
      <Category abc={setSelectedCategory } />
      <hr style={{marginTop:'5px'}}/>
      </div>
      
      </div>
      <div className=' bg-white ' style={{marginTop:145}} >
        <div className='row' >
          {filteredProducts.map((item) => (
            <div key={item.id} className='col-xl-4 col-sm-6'>
              
              <div className=' card amazon-card m-3 p-3  card-border'>
                <div className='card-body ' >
                <Link to={`/product/${item.id}`} >
                  <img style={{ width: 250 }} src={item.image} alt="description" />
                  <p>{item.name} &nbsp; Rs {item.price}</p>
                  </Link>
                  <input type="button" className='btn btn-primary' value="Add" onClick={() => handleAdd(item)} /> &nbsp;
                  <input type="button" className='btn btn-danger' value="Remove" onClick={() => handleRemove(item)} />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

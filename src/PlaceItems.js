import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './cartSlice';
import './App.css';
import ecommerce from './ecommerce.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PlaceItems() {
  const navigate=useNavigate();
  const username=sessionStorage.getItem('username');
  
  const buy = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className='amazon-body bg-white' style={{ width: 1240,minHeight:700, height:'100%', display: 'flex' }}>

      {/* Left Column - Cards */}
      <div className='bg-white' style={{ flex: 1 }}>
        <div className='row'>
          {buy.cart.items.length>0?buy.cart.items.map((item) => (
            <div key={item.id} className='col-xl-12 col-sm-6'>
              <div className='card amazon-card m-3 p-3 card-border' style={{ width: 700 }}>
                <div className='card-body'>
                  <img
                    style={{ width: 130, marginTop: '-60px', marginBottom: '-60px' }}
                    src={item.image}
                    alt='description'
                  />
                  <p>
                    {item.name} &nbsp; Rs {item.price}
                  </p>
                  <input
                    type='button'
                    className='btn btn-danger'
                    value='Remove'
                    onClick={() => handleRemove(item)}
                  />
                </div>
              </div>
            </div>
          )) :<div className='card mt-4'>
             <div className='card-body'> 
             <img src={ecommerce} alt='describe'/> 
             <center><h5>Your cart is empty!</h5><h8>Add items to it.</h8> <br/>
             <input type="button" className='btn btn-primary mt-3 w-50'  value="Shop now" onClick={()=>{navigate('/amazon')}} />
             </center>
             </div> 
             </div> }
        </div>
      </div>

      {/* Right Column - Fixed Card */}

      {buy.cart.items.length>0?
      <div className='card mt-4 amazon-card m-3 p-3 card-border' style={{ width: '35%', height: '55%', position: 'fixed', right: 0, overflowY: 'auto' }}>
        {/* Card Header Section */}
        <div className='card-header'>
          <h5 >Price Details</h5>
        </div>

        {/* Card Body Section */}
        <div className='card-body' style={{ display: 'flex', justifyContent: 'space-between' }}>
           <p>Price ({buy.cart.items.length} items)</p>
           <p>₹{(buy.cart.total).toLocaleString()}</p>

        </div>
        <div className='card-body' style={{ display: 'flex', justifyContent: 'space-between',marginTop:'-30px' }}>
           <p>Delievery Charges</p>
           <p><s>₹220</s> ₹100</p>
        </div>
        <hr style={{marginTop:'-30px'}}/>
        <div className='card-body' style={{ display: 'flex', justifyContent: 'space-between',marginTop:'-20px' }}>
           <p style={{fontWeight:'bold'}}>Total Amount</p>
           <p>₹{(buy.cart.total+100).toLocaleString()}</p>
        </div>


        {/* Card Footer Section */}
        <div className='card-footer'>
          <input type="button" value="Place Order" className='btn btn-primary ml-20' 
          
         // onClick={()=>{
         //  axios.post('http://localhost:8080/cartItems', {
         //   username: username,
          
         //   items: buy.cart.items
       // })
         //   .then(response => {
          //      if (response.status === 201) {
            //        alert("Your Order Placed Successfully ");
             //       axios.post('http://localhost:8080/send-cart-email',{username:username,items:buy.cart.items})
             //       .then((response)=>{console.log("sucessfully email sent")});
             //   }
          //  })
         //   .catch(error => {
                // Handle error
           //     console.error('Error placing order:', error);
         //   });
        //  }}
          
          onClick={()=>navigate('/Shipping')}
       />   
        </div>
      </div>
      :''}
    </div>
  );
}
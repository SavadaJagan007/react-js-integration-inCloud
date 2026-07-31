import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { removeItem } from './cartSlice';

export default function Shipping() {
const [name,setName]=useState('');
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const [line1,setLine1]=useState('')
const [line2,setLine2]=useState('')
const [zipcode,SetZipcode]=useState('')
const [city,setCity]=useState('')
const [state,SetState]=useState('')
const [country,SetCountry]=useState('')
const buy = useSelector((state) => state);
const navigate=useNavigate();
const dispatch = useDispatch();
const username=sessionStorage.getItem('username');
const createInvoice = async () => {
  try {
    const response = await axios.post('https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/invoice',{
      email:email,items:buy.cart.items,fullname:name,contact:phone,line1:line1,line2:line2,username:username,zipcode:zipcode,city:city,state:state,country:country});
    const data = response.data;
     // Assuming your response contains the invoice ID
    console.log('Invoice created successfully:', data);
    alert("Your Order Placed Successfully ");
    alert("Payment link has sent to the consent mobile number");

  } catch (error) {
    console.error('Error creating invoice:', error);
  }
};
const submission=(e)=>{
  e.preventDefault();
  console.log(name,email,phone,line1,line2,zipcode,city,state,country)
}
  return (
    <div  style={{ width: 1240,minHeight:700, height:'100%',backgroundColor:'white'}} >
      <div className="row">
        <div className="col-md-6 mt-4 " style={{width:'800px'}}>
          <div className="card " >
            <div className="card-body">
              <h5 className="card-header " style={{fontWeight:'bold',fontSize:24}}><center>Shipping Address</center></h5>
              <form onSubmit={submission}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text"  className={`form-control ${
                  name ? (name.length >= 4 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="name" placeholder="Enter name" required onChange={(e) => {
                  setName(e.target.value); 
                }} value={name}/>
                <div className="invalid-feedback">
                <p>FullName must be at least more than 3 characters long </p>
              </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className={`form-control ${
                  email ? (email.length >= 11 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="email" placeholder="Enter Existance email address" required onChange={(e) => {
                  setEmail(e.target.value); 
                }} value={email}/>
                <div className="invalid-feedback">
                <p>Email must be at least more than 11 characters long </p>
              </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="number" className={`form-control ${
                  phone ? (phone.length === 10 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="phone" placeholder="Enter Valid phone number" required onChange={(e) => {
                  setPhone(e.target.value);
                }} value={phone}/>
                <div className="invalid-feedback">
                <p>Phone Number should be 10 digits </p>
              </div>
                </div>
                <div className="form-group">
                  <label htmlFor="line1">Line1</label>
                  <input type="text" className={`form-control ${
                  line1 ? (line1.length >= 5 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="line1" placeholder="Enter Line1" required onChange={(e) => {
                  setLine1(e.target.value);
                }} value={line1}/>
                <div className="invalid-feedback">
                <p> Line1 should be more than 5 characters </p>
              </div>
                </div>
                <div className="form-group">
                  <label htmlFor="line2">Line2</label>
                  <input type="text" className={`form-control ${
                  line2 ? (line2.length >= 5 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="line2" placeholder="Enter Line2" required onChange={(e) => {
                  setLine2(e.target.value);
                }} value={line2} />
                 <div className="invalid-feedback">
                <p> Line2 should be more than 5 characters </p>
              </div>
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode">Zipcode</label>
                  <input type="number" className={`form-control ${
                  zipcode ? (zipcode.length === 6 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="zipcode" placeholder="Enter Zipcode" required onChange={(e) => {
                  SetZipcode(e.target.value);
                }} value={zipcode}/>
                <div className="invalid-feedback">
                <p> Zipcode should be 6 digits</p>
              </div>
                </div>
               
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" className={`form-control ${
                  city ? (city.length >= 5 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="city" placeholder="Enter City" required onChange={(e) => {
                  setCity(e.target.value);
                }} value={city}/>
                <div className="invalid-feedback">
                <p> City should have atleast 5 characters</p>
              </div>
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input type="text" className={`form-control ${
                  state ? (state.length >= 3 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="state" placeholder="Enter State" required onChange={(e) => {
                  SetState(e.target.value);
                }} value={state}/>
                 <div className="invalid-feedback">
                <p> State should have atleast 3 characters</p>
              </div>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" className={`form-control ${
                  country ? (country.length >= 3 ? 'is-valid' : 'is-invalid') : ''
                }  `} id="country" placeholder="Enter Country" required onChange={(e) => {
                  SetCountry(e.target.value);
                }} value={country}/>
                <div className="invalid-feedback">
                <p> Country should have atleast 4 characters</p>
              </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2"

                  onClick={()=>{
         //  axios.post('http://localhost:8080/cartItems', {
         //   username: username,
          
         //   items: buy.cart.items
      //  })
       //     .then(response => {
      //          if (response.status === 201) {
                 //   alert("Your Order Placed Successfully ");
                   // axios.post('http://localhost:8080/send-cart-email',{username:username,items:buy.cart.items})
                   // .then((response)=>{console.log("sucessfully email sent");
                    createInvoice();
                    buy.cart.items.forEach((item) => {
                        dispatch(removeItem(item)); // Dispatch the removeItem action for each item
                      });
                      
                   //   alert("Payment link has sent to the consent mobile number");
                    navigate('/amazon')
                  //});
       //         }
       //     })
       //     .catch(error => {
                 //Handle error
      //          console.error('Error placing order:', error);
      //      });
          }}
                
                >DELIVER HERE</button>
              </form>
            </div>
          </div>
        </div>
        
        {buy.cart.items.length>0?
      <div className='card mt-4 amazon-card m-3 p-3 card-border' style={{ width: '35%', height: 250, position: 'fixed', right: 0, overflowY: 'auto' }}>
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


      
      </div>
      :''}


      </div>
    </div>
  );
}
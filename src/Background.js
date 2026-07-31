
// Background.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut, ShoppingBag, ShoppingCart, Search } from 'react-feather';
import { User } from 'react-feather';
import Store from './Store.json';

export default function Background({xyz}) {
  const count = useSelector((state) => state.cart.items.length);
  const total = useSelector((state) => state.cart.total);
  const buy = useSelector((state) => state);
  const customer = sessionStorage.getItem('username');
  const navigate = useNavigate();
  const [fullname, SetFullname] = useState('');
  const [value, SetValue] = useState('');
  const[ac,dc]=useState('')

  const handler = (e) => {
    const headache=e.target.value
    SetValue(headache);
   
  };


  const onSearch = (searchTerm) => {
    SetValue(searchTerm);
   
    dc(searchTerm);
   

    console.log('search: ', searchTerm);
  };

  xyz(ac)
  

  axios.get(`http://localhost:8080/user-fullname/${customer}`)
    .then(response => {
      SetFullname(response.data);

    })
    .catch(error => {
      console.error('Error fetching user details:', error);
    });

  return (
    <div className='navbar navbar-dark bg-dark mx-auto'>
      <div className='d-inline justify-content-end p-2 navbar-nav ml-auto' style={{ justifyContent: 'end', alignContent: 'flex-end' }}>

        <button className='btn btn-primary' >
          <ShoppingCart size={17} />
          <span style={{ marginLeft: '8px' }}>Cart Items: {count}</span>
        </button> &nbsp;

        <input type="button" value={`Total Price: ${total}`} className='btn btn-primary' />

        <span style={{ position: 'relative', width: '30%' }}>
          <input
            type="text" placeholder='Search for more products...'
            style={{
              width: 320,
              borderRadius: 4,
              padding: '5px',
              paddingRight: '30px',
              boxSizing: 'border-box',
              marginLeft: '100px', height: 38, marginTop: 3, border: '2px solid #ccc', outlineColor: '2px solid black'
            }}
            value={value || ''}
            onChange={handler}
          />
          <span
            style={{
              position: 'absolute',
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)',
            }}
            
          >
            <Search />
          </span>

          {value && (
            <div className='card' style={{ position: 'absolute', top: '100%', left: 0, width: 320, border: '1px solid gray', marginLeft: 100, marginTop: 12 }}>
              {Store.products.filter(item => {
                const searchTerm = value.toLocaleLowerCase();
                const category = item.category.toLocaleLowerCase();
                const name = item.name.toLocaleLowerCase();

                return searchTerm && (category.includes(searchTerm) || name.includes(searchTerm)) && category !== searchTerm && name !== searchTerm
              }).slice(0, 1).map((item) =>
                <div className='card-body bg-white  ' style={{ marginTop: '-3px', cursor: 'pointer', zIndex: '1000', position: 'relative' }} key={item.category}
                  onClick={() => { onSearch(item.category);}}>
                  <img src={item.image} style={{ width: 40, height: 30 }} alt="category" /> {item.category}
                </div>
              )}
            </div>
          )}
         
        </span>


        <button style={{ marginLeft: 170 }} className='btn btn-success '
          onClick={() => { navigate('/placeorder'); console.log(buy) }}
        >
          <ShoppingBag size={24} />
          <span style={{ marginLeft: '8px' }}>Buy Now</span>
        </button>

        <button className='btn btn-light text-dark'
          style={{ justifyContent: 'end', alignContent: 'flex-end', marginLeft: '10px', fontWeight: 'bold' }}
          onClick={() => { navigate('/') }}  >
          <LogOut size={24} />
          <span style={{ marginLeft: '8px' }}>Logout</span>
        </button>

        <h5 className='text justify-content-end text-light m-2'><User /> {fullname}</h5>

      </div>
    </div>
  );
}
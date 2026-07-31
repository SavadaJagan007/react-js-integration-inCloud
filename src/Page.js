import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Page({OnPage}) {
  const [username, setUser] = useState('');
  const[blue,red]=useState(true)
  const navigate = useNavigate();

  const submission = (e) => {
    e.preventDefault();

    axios.post("https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/forget_Password", { username })
      .then((response) => {
        if (response.status === 200) {
          console.log("Email verified");
          red(true);
          sessionStorage.setItem('username',username);
          OnPage();
          navigate('/otp');

        } else if (response.status === 400) {
          console.log(response.data);
          red(false);
          console.log("Incorrect email");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        red(false)
      });
  };

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='card card-title ' style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
        <center>
          <h1>Find Your Email</h1>
        </center>
        <div className='card card-body bg-transparent' style={{ height: 350 }}>
          <form onSubmit={submission}>
            <center>
              <h5 className='mt-4'>Recover your email</h5>
            </center>
            <div className='form-group'>
              <input
                type="email"
                className={`form-control m-2 mt-3 ${
                  username ? (username.length >= 11 ? 'is-valid' : 'is-invalid') : ''
                } ${ blue ? 'is-valid': 'is-invalid'} `}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                placeholder='Enter your mail id'
              />
              <div className='invalid-feedback'>
                <p>Please Enter valid mail</p>
              </div>
            </div>
            <input type="submit" className='btn btn-primary ' style={{ marginLeft: 300 }} value="Next" />
          </form>
        </div>
      </div>
    </div>
  );
}
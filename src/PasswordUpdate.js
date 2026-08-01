import React, { useState } from 'react'
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api from './api';


export default function PasswordUpdate({OnPassUp}) {
    const[password,SetPassword]=useState('')
    const[blue,red]=useState(true)
    const username=sessionStorage.getItem('username');
    const navigate=useNavigate();
    const submission=(e)=>{
        e.preventDefault();
        if(password.length<8)
        {
          red(false);
          return;
        }
        api.put(`/updatePassword/${username}`,{password})
        .then((response)=>{
            if(response.status === 200)
            {
                console.log("Password updated successfully");
                red(true);
                OnPassUp();
                navigate('/success')
            }
            else if (response.status === 404)
            {
                console.log("Technical Error")
                red(false)
            }

        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='card card-title ' style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
        <center>
          <h1>Recovery Password</h1>
        </center>
        <div className='card card-body bg-transparent' style={{ height: 350 }}>
          <form onSubmit={submission}>
            <center>
              <h5 className='mt-4'>Reset Your Password to access your account</h5>
            </center>
            <div className='form-group'>
              <input
                type="text"
                className={`form-control m-2 mt-3 ${ password ? (password.length>=8 ? 'is-valid':'is-invalid')  :'' } `}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
                placeholder='Enter Your Password'  
              />
              <div className='invalid-feedback'>
                <p>Password should be atleast 8 characters</p>

              </div>
            </div>
            <input type="submit" className='btn btn-primary ' style={{ marginLeft: 280 }}  value="Continue" />
            
          </form>
        </div>
      </div>
    </div>
  )
}

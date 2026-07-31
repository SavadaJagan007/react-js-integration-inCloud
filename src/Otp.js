import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Otp({OnOtp}) {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [blue,red]=useState(true)
  const username = sessionStorage.getItem('username');
  const navigate=useNavigate();

  const submission = (e) => {
    e.preventDefault();
    // Handle OTP submission logic
     axios.post("https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/otp",{otp,username})
     .then((response)=>{
        if(response.status === 200)
        {
          console.log("otp is successfully matched");
          red(true)
          OnOtp();
          navigate('/pstn');
        }
        else if(response.status === 400)
        {
          console.log("otp is invalid")
          red(false)
        }
        else if(response.status === 201)
        {
          console.log("Otp is expired");
          red(false)
        }
     })
     .catch((error)=>{
      console.log(error)
      red(false)
     })
        
    console.log(username)
    console.log(otp);
  };

  const startTimer = () => {
    setTimer(60); // Reset the timer to 60 seconds
  };

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval); // Cleanup the interval on component unmount

  }, [timer]);

  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='card card-title ' style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
        <center>
          <h1>OTP Verification</h1>
        </center>
        <div className='card card-body bg-transparent' style={{ height: 350 }}>
          <form onSubmit={submission}>
            <center>
              <h5 className='mt-4'>We have sent a six-digit code to the verified email</h5>
            </center>
            <div className='form-group'>
              <input
                type="text"
                className={`form-control m-2 mt-3 ${ blue ? 'is-valid':'is-invalid'} `}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                placeholder='Enter OTP'
              />
              <div className='invalid-feedback'>
                <p>Please Enter valid OTP</p>

              </div>
            </div>
            <input type="submit" className='btn btn-success ' style={{ marginLeft: 300 }} value="Submit" />
            <div>
              <p>OTP expires in {Math.floor(timer / 60)}:{timer % 60}</p>
              <input type="button" className='btn btn-primary' value="Generate OTP"  onClick={()=>{
                startTimer();
                axios.post("https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/forget_Password", { username })
                .then((response) => {
                  if (response.status === 200) {
                    console.log("New Otp Has genarated");
          
                  } else if (response.status === 400) {
                    
                    console.log("Technical issue");
                  }
                })
                .catch((error) => {
                  console.error("Error:", error);
                });

              }} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

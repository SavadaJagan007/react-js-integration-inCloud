import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register({onLogin}) {
  const [fullname, setFullName] = useState('');
  const [username, setUser] = useState('');
  const [password, Setpassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(0); // Initial timer value in seconds
  const [eblue,ered]=useState(true);
  const [opass,osuccess]=useState(true);
  const [brown,rang]=useState(false);
  const navigate=useNavigate();

  const submission = (e) => {
    e.preventDefault();

    // Perform any other registration logic here
    console.log(fullname,username, password, mobile, otp);
  };

  const generateOtp = async () => {
    

    // Set the timer to 2 minutes (120 seconds)
    setTimer(60);
     
  };
  

  const updateData = async() => {
     await axios.put(`https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/${username}`, {
        password,
        fullname,
        mobile,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("Registered successfully");
          // Add any additional logic or state updates upon successful registration
        } else {
          console.log("Technical Error");
          // Handle other status codes if needed
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle errors, log them, or display a user-friendly message
      });
  };
  

  useEffect(() => {
    // Update the timer every second when it is greater than 0
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Clear the interval when the timer reaches 0
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card card-title " style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
        <center>
          <h1 className="text text-primary">Account Registration</h1>
        </center>
        <div className="card card-body bg-transparent">
          <form onSubmit={submission}>
            <div className="form-group">
              <label htmlFor="fullname" className="text text-dark">
                FullName
              </label>
              <input
                type="text"
                id="fullname"
                className={`form-control ${
                  fullname ? (fullname.length >= 5 ? 'is-valid' : 'is-invalid') : ''
                }  `}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                placeholder="Enter FullName"
                required
              />
              <div className="invalid-feedback">
                <p>FullName must be at least more than 5 characters long </p>
              </div>
            </div>

            <div className="form-group">
          <label htmlFor="email" className="text text-dark">
           Email
          </label>
         <div className="input-group">
            <input
            type="email"
            id="email" 
            className={`form-control  ${username ? (username.length >= 11 ? 'is-valid' : 'is-invalid') : ''} ${eblue ? 'is-valid' : 'is-invalid'}` }
             onChange={(e) => {
             setUser(e.target.value);
            }}
            placeholder="Enter Email"
             required
            />
           <div className="input-group-append">
           <input type="button" className={`btn btn-primary ${username ? (username.length >= 11 ? 'is-valid' : 'is-invalid') : ''} ${eblue ? 'is-valid' : 'is-invalid'}  `} value="Upload Email" style={{marginLeft:3}} onClick={
            
            async()=>{
              if(username.length >= 11){
              await axios.post("https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/register/email",{username})
                    .then((response)=>{
                      if(response.status === 200)
                      {
                        console.log("email uploaded")
                        ered(true);
                        rang(true);
                        
                      }
                      else if(response.status === 400)
                      {
                        console.log(" email is already existed")
                        ered(false)
                      }
                      
                    })
                    .catch((error)=>{
                      console.log(error);
                      ered(false);
                    })}
                    else{
                      ered(false);
                    }}}/>
        
      
          </div>
        <div className="invalid-feedback">
         <p>Enter a valid Email address</p>
        </div>
  </div>
  
</div>

            <div className="form-group">
              <label htmlFor="password" className="text text-dark">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`form-control  ${
                  password ? (password.length >= 8 ? 'is-valid' : 'is-invalid') : ''
                }  `}
                onChange={(e) => {
                  Setpassword(e.target.value);
                }}
                placeholder="Enter Password"
                required
              />
              <div className="invalid-feedback">
                <p>Enter a valid Password </p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mobile" className="text text-dark">
                Mobile
              </label>
              <input
                type="number"
                id="mobile"
                className={`form-control  ${
                  mobile ? (mobile.length === 10 ? 'is-valid' : 'is-invalid') : ''
                }  `}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                placeholder="Enter Mobile Number"
                required
              />
              <div className="invalid-feedback">
                <p>Mobile Number should contain 10 digits </p>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="otp" className="text text-dark">
                One Time Password
              </label>
              <div className="input-group">
                <input
                  type="number"
                  id="otp"
                  className={`form-control  ${otp ? (otp.length === 6 ? 'is-valid' : 'is-invalid') : ''} ${opass?'is-valid':'is-invalid'}`}
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  placeholder="Enter OTP"
                  required
                  
                />
                
                <div className="input-group-append">
                  <button type="button" className="btn btn-primary " onClick={async()=>{
                    if(username.length >= 11 && brown=== true){

                    await generateOtp();
                    
                    if(eblue === true ){
                    
                    axios.post("https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/registration", { username })
                    .then((response) => {
                     if (response.status === 200) {
                     console.log("Otp sent ");
          

                     } else if (response.status === 400) {
                     console.log(response.data);
         
                    console.log("Incorrect email");
                    }
                   })
                  .catch((error) => {
                    console.error("Error:", error);
                   });
                  
                   
                    }
                  }}}>
                    Generate OTP
                  </button>
                </div>
                <div className="invalid-feedback">
                <p>Enter valid OTP</p>
              </div>
              </div>
              
            </div>

            <div className="text-center  text-muted mb-3">
              { eblue && timer > 0 && (
                <p>
                  OTP expires in {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60} minutes
                </p>
              )}
            </div>

            <input type="submit" className="btn btn-primary " value="Register" onClick={()=>{
             
             axios.post("https://9de2-2409-408c-8697-8242-3151-836b-c2ba-8a4d.ngrok-free.app/otp",{otp,username})
              .then((response)=>{
               if(response.status === 200)
               {
                console.log("otp is successfully matched");
                updateData();
                sessionStorage.setItem('username',username);
                sessionStorage.setItem('isAuthenticated', 'true');
                onLogin();
                navigate('/amazon');
                
               }
               else if(response.status === 400)
               {
               console.log("otp is invalid")
                osuccess(false)
              }
              else if(response.status === 201)
              {
               console.log("Otp is expired");
               osuccess(false)
              
              }
              })
              .catch((error)=>{
               console.log(error)
              
               })

            }} />
          </form>
        </div>
      </div>
    </div>
  );
}
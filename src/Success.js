import React from 'react';
import './App.css';

export default function Success() {
  return (
    <div className='container d-flex justify-content-center align-items-center mt-5'>
      <div className='card card-title ' style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
        <center>
          <h1>Congratulations</h1>
        </center>
        <div className='card card-body bg-transparent' style={{ height: 290 }}>
          <center>
           
            <h5 className='mt-4'>Your Password has been Updated Successfully</h5>
          </center>
        </div>
      </div>
    </div>
  );
}

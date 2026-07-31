import React, { useState } from 'react'

export default function Find_mail() {
    const[mail,setMail]=useState('')
    const submission=(e)=>{
        e.preventDefault();
        console.log(mail)
    }
  return (
    <div>
        <div className='card container'>
            <div className='card card-title'>
                <h1>Find Your Email</h1>
                <div className='card card-body'>
                    <form className='form' onSubmit={submission}>
                      <div className='form-group'>
                      <input type="email" className='form-control' onChange={()=>{setMail(e.target.value)}} placeholder='Enter your mail id' />

                        </div>  
                   
                    <input type="submit" className='btn btn-primary' value="Next" />
                    </form>


                </div>

            </div>

        </div>
    </div>
  )
}

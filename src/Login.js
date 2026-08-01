import React,{useState} from 'react'
import './App.css'; 
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import api from './api';

export default function Login({ onLogin, isAuthenticated }) {
    const [name, setName] = useState({
        username: '',
        password: '',
      });
      
      const navigate=useNavigate();

      const[status,updateStauts]=useState(true)
    
      const { username, password } = name;
    
      const handleChange = (e) => {
        setName({ ...name, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        
    
        api.post("/Connect", name)
          .then((response) => {
            if (response.status === 200) {
              sessionStorage.setItem('username',username)
              console.log("Login credentials are successfully working");
              console.log(sessionStorage.getItem('username'));
              
              
              onLogin();
            
              
              
              navigate('/amazon');
    
            } else if (response.status === 400) {
              alert("incorrect details");
              updateStauts(false);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            
            updateStauts(false)
          });
      };
  return (
    <div className="App">
    <div className="container mt-5 ">
      <div className="card  border-secondary " style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <div className='card card-title ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <h1 className="text-center mb-4 text-dark">Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className='text text-dark ' >Email </label>
              <input
                type="email"
                className={`form-control ${username ? (username.length >= 11 ? 'is-valid' : 'is-invalid') : ''} ${status?'is-valid':'is-invalid'}`}
                name="username"
                value={username}
                placeholder="Username"
                id="username"
                onChange={handleChange}
                required
                
              />
              <div className="invalid-feedback" style={{borderWidth: '2px'}}> {/* Added custom style for thicker border */}
                Please enter a valid Email 
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className='text text-dark'>Password</label>
              <input
                type="password"
                className={`form-control ${password ? (password.length >= 5 ? 'is-valid' : 'is-invalid') : ''} ${status?'is-valid':'is-invalid'}`}
                placeholder="Password"
                name="password"
                value={password}
                id="password"
                onChange={handleChange}
                required
                
              />
              <div className="invalid-feedback" style={{borderWidth: '2px'}}> {/* Added custom style for thicker border */}
              Please enter a valid password (Password must be at least 10 characters long).
              </div>
                        
            </div>
            <div className='d-flex'>
              <div>
              <button type="submit" className="btn btn-success">
              Login  
            </button> 
              <div>
                <p style={{marginLeft:150}} onClick={()=>{ navigate('/page')}}> <Link to="/page"> Forget Password </Link></p>
              </div>
              </div>
            </div>
            
           <p className='text text-dark ' style={{marginLeft:100}}> Dont have an Account ? <Link to="/register"> Create </Link></p> 
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

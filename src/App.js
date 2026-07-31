// App.js
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './Page';
import Otp from './Otp';
import PasswordUpdate from './PasswordUpdate';
import Success from './Success';
import Login from './Login';
import Register from './Register';
import Amazon from './Amazon';
import PlaceItems from './PlaceItems';
import ProductDetails from './ProductDetails';
import Shipping from './Shipping';



export default function App() {

  const[isVisitedPage,setVisitedPage]=useState(false);
  const[isVisitedOtp,setVisitedOtp]=useState(false);
  const[isPassUpdate,setPassUpdate]=useState(false);

  const initialAuthState = sessionStorage.getItem('isAuthenticated') === 'true';
  
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);

  useEffect(() => {
    // Save authentication state to sessionStorage whenever it changes to true
    if (isAuthenticated) {
      sessionStorage.setItem('isAuthenticated', 'true');
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const Visited = () =>{
    setVisitedPage(true);
  }

  const OtpVisited = () =>{
    setVisitedOtp(true);
  }

  const PassPstn = ()=>{
    setPassUpdate(true);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
          <Route path="/page" element={<Page OnPage={Visited}  />} />
          <Route path="/otp" element={isVisitedPage?<Otp OnOtp={OtpVisited} />:<Page/>} />
          <Route path="/pstn" element={isVisitedOtp?<PasswordUpdate OnPassUp={PassPstn}/>:<Page/>} />
          <Route path="/success" element={isPassUpdate?<Success />:<Page/>} />
          {/*Register edited on 3-02-2025 before it is only <Register/>*/}
          <Route path="/register" element={<Register onLogin={handleLogin}/> } />
          <Route path="/amazon" element={isAuthenticated?<Amazon/>:<Login/>} />
          <Route path="/placeorder" element={<PlaceItems/>} />
          <Route path="/product/:id" element={isAuthenticated?<ProductDetails />:<Login/>} />
          <Route path="/Shipping" element={<Shipping/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


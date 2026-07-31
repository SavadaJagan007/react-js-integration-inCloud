import React, { useState } from 'react';
import { Dropdown, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Category= ({ abc }) => {
  const [electronicsDropdown, setElectronicsDropdown] = useState(false);
  const [tvAndApplicationsDropdown, setTvAndApplicationsDropdown] = useState(false);
  const [MensDropdown,setMensDropDown]=useState(false);
  const [HomeFurniture,setHomeFurniture]=useState(false);
  const [Value,SetValue]=useState('');
  
  abc(Value);

  

 
  return (
    <div className="dropdown-container d-flex" style={{zIndex:2}}>
      <div style={{marginLeft:120,zIndex:2}}>
        <Dropdown
          onMouseOver={() => setElectronicsDropdown(true)}
          onMouseLeave={() => setElectronicsDropdown(false)}
        >
          <Dropdown.Toggle  variant="light" id="electronics-dropdown" >
            Mobiles
          </Dropdown.Toggle>

          <Dropdown.Menu show={electronicsDropdown} >
            
            
            <Dropdown.Item onClick={async()=>{await SetValue("mi mobiles")}}>Mi </Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("samsung mobiles")}}>Samsung</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("realme mobiles")}}>Realme</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("Infinix mobiles")}}>Infinix</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("oppo mobiles")}}>Oppo</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("Apple mobiles")}}>Apple</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("vivo mobiles")}}>Vivo</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("Honor mobiles")}}>Honor</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("Asus mobiles")}}>Asus</Dropdown.Item>
            <Dropdown.Item onClick={async()=>{await SetValue("Poco X2 mobiles")}}>Poco X2</Dropdown.Item>
            
            
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div style={{marginLeft:120,zIndex:2}}>
        <Dropdown
          onMouseOver={() => setTvAndApplicationsDropdown(false)}
          onMouseLeave={() => setTvAndApplicationsDropdown(false)}
        >
          <Dropdown.Toggle variant="light" id="tv-applications-dropdown">
           Electronics & Appliances
          </Dropdown.Toggle>

          <Dropdown.Menu
            show={tvAndApplicationsDropdown}
            className="two-columns-dropdown"
            style={{ width: '1000px',height:'450px' }}
          >
            <Row className='mx-auto'>
              <Col xs={3} className="border-right">
                <Dropdown.Item style={{fontWeight:'bold'}}>Washing Machine</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Fully Automatic Front Load Washing Machines")}}>Fully Automatic Front Load</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Semi Automatic Top Load Washing Machines ")}} >Semi Automatic Top Load</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Fully Automatic Top Load Washing Machines ")}}>Fully Automatic Top Load</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{fontWeight:'bold'}}>Air Conditioners</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("LG Air Conditioners ")}}>LG Air Conditioners </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Hitachi Air Conditioners ")}}>Hitachi Air Conditioners</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Carrier Air Conditioners ")}}>Carrier Air Conditioners</Dropdown.Item>
              </Col>
              <Col xs={3}>
                <Dropdown.Item style={{fontWeight:'bold'}}>Refrigerators</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Single Door Refrigerators ")}}>Single Door</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Double Door Refrigerators ")}}>Double Door</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Triple Door Refrigerators ")}}>Triple door</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{fontWeight:'bold'}}>Speakers</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Home Audio Speakers ")}}>Home Audio Speakers</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Home Theatres ")}}>Home Theatres </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Soundbars ")}}>Soundbars </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Bluetooth Speakers ")}}>Bluetooth Speakers </Dropdown.Item>
              
              </Col>
              <Col xs={3}>
              <Dropdown.Item style={{fontWeight:'bold'}}>Camera Accessories</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Lens")}}>Lens </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Tripods")}}>Tripods </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item style={{fontWeight:'bold'}}>Smart Wearable Tech</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Smart Watches")}}>Smart Watches </Dropdown.Item>


              </Col>
              <Col xs={3}>
              <Dropdown.Item style={{fontWeight:'bold'}}>Laptops</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Hp Laptops")}}>Hp Laptops </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Acer Laptops")}}>Acer Laptops </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Lenovo Laptops")}}>Lenovo Laptops </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Asus Laptops")}}>Asus Laptops</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Dell Laptops")}}>Dell Laptops  </Dropdown.Item>

              </Col>
            </Row>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div style={{marginLeft:120}}>
        <Dropdown
          onMouseOver={() => setMensDropDown(true)}
          onMouseLeave={() => setMensDropDown(false)}
        >
          <Dropdown.Toggle variant="light" id="MensCart">
            Mens
          </Dropdown.Toggle>

          <Dropdown.Menu
            show={MensDropdown}
            className="two-columns-dropdown"
            style={{ width: '600px' }}
          >
            <Row className="justify-content-center">
              <Col xs={4} className="border-right">
                <Dropdown.Item style={{fontWeight:'bold'}} >FootWear</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Mens Men’s Sports Shoes ")}} >Sports shoes</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men’s Casual Shoes  ")}}>Causual shoes</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men’s Formal Shoes  ")}}>Formal shoes</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men’s Sandals & Floaters  ")}}>Sandals & Floaters </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men’s Slippers & Flip Flops ")}}>Flip-Flops </Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Boots Men’s Casual Shoes ")}}>Boots </Dropdown.Item>
                
                <Dropdown.Divider />
                <Dropdown.Item style={{fontWeight:'bold'}}>Top Wear</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Men's T Shirts ")}}>T-Shirts</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Formal Shirts ")}}>Formal Shirts</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Casual Shirts ")}}>Causual Shirts </Dropdown.Item>
              </Col>
              <Col xs={4}>
                <Dropdown.Item style={{fontWeight:'bold'}}>Bottom Wear</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Jeans ")}}>Jeans</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Casual Trousers ")}}>Causual Trousers</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Formal Trousers ")}}>Formal Trousers</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Track Pants ")}}>Track Pants</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Shorts ")}}>Shorts </Dropdown.Item>
                <Dropdown.Item >
                 
                </Dropdown.Item>
              </Col>
              <Col xs={4}>
                <Dropdown.Item style={{fontWeight:'bold'}}>Winter Wear</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Sweatshirts ")}}>Sweatshirts</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Jackets ")}}>Jackets</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Sweaters ")}}>Sweater</Dropdown.Item>
                <Dropdown.Item onClick={async()=>{await SetValue("Men's Tracksuits ")}}>Tracksuits</Dropdown.Item>
                
                <Dropdown.Item >
                 
                </Dropdown.Item>
              </Col>
            </Row>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div style={{marginLeft:120}}>
        <Dropdown
          onMouseOver={() => setHomeFurniture(true)}
          onMouseLeave={() => setHomeFurniture(false)}
        >
          <Dropdown.Toggle variant="light" id="MensCart" onClick={async()=>{await SetValue("Home furnitures ")}} >
            Homes & Furniture
          </Dropdown.Toggle>

          <Dropdown.Menu
            show={HomeFurniture}
            className="two-columns-dropdown"
            style={{ width: '600px' }}
          >
            
          </Dropdown.Menu>
        </Dropdown>
      </div>


    </div>
  );
};

export default Category;
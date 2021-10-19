import React from "react";
import "./Header.css";
import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
const Header = () =>{
    return(
      <div>
   <div>
        <Navbar bg="dark" variant="dark"  fixed="top">
    <Container>
    <Nav className="me-auto">

      <Nav.Link href="#home"> <img  className="logo" src="https://i.pinimg.com/originals/85/95/f4/8595f4b711e503bc72fe396e5043e0c2.png" alt="" /> </Nav.Link>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Service</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Login/LogOut</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>

<div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
          





          <div >
            <img className="logo-img" src="https://i.pinimg.com/originals/85/95/f4/8595f4b711e503bc72fe396e5043e0c2.png" alt="" />
              <h1 className="title">
              Sheikh Hasina <br /> Medical College & Hospital
              </h1>
              <p className="font-degin">
              In 2008, Before 9th Parliamentary Election of Bangladesh, Prime Leader of Bangladesh Awami League and nation's former Prime Minister Sheikh Hasina promised the people of Tangail to establish a government-financed medical school in Tangail city. As her party continued to rule as Government of Bangladesh for 2nd consecutive time in 2014.</p>
           
            </div>

           



            

            
          </div>
        </div>
      </div>

      <div className="fiter-deign">
      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/elevated-view-stethoscope-blue-background_23-2148050517.jpg?size=626&ext=jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="carasouldes">Covid Fiter</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hand-hospital-background_34200-156.jpg?size=626&ext=jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
     <h1 className="carasouldes">Real Life Hero</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.citizenshospitals.com/wp-content/uploads/layerslider/Homepage-Slider-1/Backround1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
     <h1 className="carasouldes">Fiter of a Nation</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
     
      </div>

      
        
    );
};
export default Header;
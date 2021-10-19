import React from "react";
import { Carousel } from "react-bootstrap";
import "./Fiter.css";
const Fiter = () =>{
    return(
<div className="fiter-deign">
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <img src="https://www.vadneteurope.com/wp-content/uploads/2020/11/content-image-1588765544815.jpg" alt="" />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
     <img src="https://image.shutterstock.com/image-photo/medical-background-close-stethoscope-on-260nw-1493557400.jpg" alt="" />
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
     <img src="https://t3.ftcdn.net/jpg/01/94/21/26/360_F_194212692_t2zmsd4EAlT1zx69mx4DK5XioDyzFVAz.jpg" alt="" />
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};
export default Fiter;
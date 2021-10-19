import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import './Service.css';
const Servise = () =>{
    const [services,setServices]=useState([]);
    const url ="service.json"
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return(
      <div>
       
       <h1>Service</h1>
<div className="card-container mt-5">
            {
                services.map(service=> <div>
                    <Row xs={1} md={2} className="g-4 ms-5">
  
    <Col>
    <Card>
      <Card.Img variant="top w-100" src={service.images} />
      <Card.Body>
        <Card.Title>Class Name: {service.className}</Card.Title>
        <Card.Text>
          <p>Name: {service.tuitionFees}</p>
          <p>id: {service.Subject}</p>
          <p>Cost: {service.ClassTime}</p>
          <p> Acorecy: {service.HomeWork}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  
</Row>
                    
  
    
 
                </div>)
            }
        </div>
        
      </div>
        
    );
};
export default Servise;
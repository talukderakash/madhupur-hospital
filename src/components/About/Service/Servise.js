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
        <Card.Title>Name: {service.Name}</Card.Title>
        <Card.Text>
          <p>id: {service.id}</p>
          <p>Cost: {service.Cost}</p>
          <p>Detials: {service.Details}</p>
          <p></p>
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
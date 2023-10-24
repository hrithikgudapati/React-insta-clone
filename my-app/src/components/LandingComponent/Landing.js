import React from "react";
import home from "../../images/home.png";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Landing.css"


export default function LandingPage(){
    return (

        
         <Card className="home-content" >
      <Card.Img className="landing-img" variant="left" src={home} alt="Landing-image" />
      <Card.Body className="landing-content">
        <Card.Title>Hrithik Team</Card.Title>
        
        <Link to={"post/all"}><Button variant="primary">Enter</Button></Link>
      </Card.Body>
    </Card>
            /* <div className="landingimage-img">
                <img src={home} alt="Landing-image"/>
            </div>
            <div className="lading-content">
                <h3>Hrithik Team</h3>
                <Link to={"post/all"}><button>Enter</button></Link>
            </div> */
    
    )
}
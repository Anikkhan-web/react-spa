import React from 'react';
import { Col, Container,  Image,  Row } from 'react-bootstrap';

import './CourcePlan.css'

const CourcePlan = () => {
    return (
        <div className='frist'>
            <Container>
  <Row>
    <Col xs={6} md={6}>
      <div  className='frist-div'>
          <h2>What You Going To Learn</h2>
          <p>The overall skills gained from tthis project based courses will prepare you for any type of project development. In this course you will be taught how to write a complete project with React JS including User Panel + Admin Panel. Source code will also be provided with each class of the course, so you can easily practice manually. This project uses React JS with PHP for the server site and MySQL for the database.

Creating API with PHP and using React JS
Use of JSON in Application
React's required plugins to project
React Bootstrap for Designing
Project Implementation with Database on Real Server</p>
      </div>
    </Col>
    <Col xs={6} md={4} >
      <div className='img'>
    <Image src='./logo512.png' />
    </div>
    </Col>
   
  </Row>
</Container>
        </div>
    );
};

export default CourcePlan;
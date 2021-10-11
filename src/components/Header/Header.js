import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {



    
    return (
     




<Navbar className='bg-color' expand="lg">
  <Container fluid>
  <Nav.Link><NavLink to="/" className='brand'>Learn 
  With Anik Khan</NavLink></Nav.Link>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 " 
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><NavLink  
            linkStyle
   
   to="/home" className='custom'>Home</NavLink></Nav.Link>
   
        <Nav.Link><NavLink to="/course-plan" className='custom'>Course Plan</NavLink></Nav.Link>

        <Nav.Link><NavLink to="/freeclass" className='custom'>Free Class</NavLink></Nav.Link>

        <Nav.Link><NavLink to="/registration" className='custom'>Registration</NavLink></Nav.Link>

        <Nav.Link><NavLink to="/about" className='custom'>About</NavLink></Nav.Link>

         

       
        
      </Nav>
      
      
    </Navbar.Collapse>
  </Container>
</Navbar>





    );
};

export default Header;
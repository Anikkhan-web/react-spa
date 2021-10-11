import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='d-flex center '>
            <div>
                <h2>Follow ME</h2>
                <a href="">
                <p>facebook <i class="fab fa-facebook-square"></i></p></a>
                <a href=""><p>instagram <i class="fab fa-instagram-square"></i></p></a>
            </div>
            <div>
                <h2>Address</h2>
                <p>Shekhertek </p>
                <p>Mohammadpur</p>
                <p>Dhaka</p>
                
            </div>
            <div>
                <h2>Information</h2>
                <p>About Anik</p>
            </div>
            <div>
                <h2>Legal</h2>
                <p>Refund Policy</p>
                <p>Terms & Conditions</p>
            </div>
           
            
        </div>
    );
};

export default About;
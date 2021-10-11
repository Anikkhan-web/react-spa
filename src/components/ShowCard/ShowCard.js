import React from 'react';
import './ShowCard.css'

const ShowCard = (props) => {

   
const {name,link,id,discription }= props.video

    
    return (
        <div>
<a href={link} className='text-decor'>

     
<div className="border-area" >

        <div className="extra-padding">
            <h1>{name}</h1>
       <h1>{id}</h1>
        </div>
   
       <div className='black-color'>

         
        <h3><i class="fas fa-play-circle"></i><br /> {discription}</h3>
         
        </div>
</div>
</a>
     
     
        </div>
    );
};

export default ShowCard;
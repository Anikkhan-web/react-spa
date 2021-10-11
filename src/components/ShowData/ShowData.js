import React from 'react';

const ShowData = (props) => {
    const{name,id,link,discription}=props.data;
    return (
        <div>
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
            
        </div>
    );
};

export default ShowData;
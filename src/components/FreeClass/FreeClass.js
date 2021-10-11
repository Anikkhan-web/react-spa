

import React, { useEffect, useState } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import './FreeClass.css'

const FreeClass = () => {



    const [videos,setVideos]=useState([]);

useEffect(()=>{
        fetch('./edudata.JSON').then(res=>res.json()).then(data=>setVideos(data))

},[])

    return (
        
    
<div>
    <div className='custom-grid'>
        {
            videos.map(video=><ShowCard video={video} key={video} ></ShowCard>)
        }
    </div>




            
        </div>
    );
};






export default FreeClass;






























//   const {id,name,link,discription} = props.video;
//   return (
//     <div>



// <a href={link} className='text-decor'>

     
// <div className="border-area" >
 
//           <div className="extra-padding">
//           <h1>{name}</h1>
//           <h1>{id}</h1>
//           </div>
    
//         <div className='black-color'>

          
//           <h3><i class="fas fa-play-circle"></i><br /> {discription}</h3>
          
//         </div>

// </div>
// </a>

      
//     </div>
//   );
// };

// export default FreeClass;







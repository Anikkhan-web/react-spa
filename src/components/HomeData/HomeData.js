import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import './HomeData.css'

const HomeData = () => {

    const [datas,setDatas]= useState([]);
    useEffect(()=>{
        fetch('./homeData.JSON').then(res=>res.json()).then(data=>setDatas(data))
    },[])
    return (
        <div className='grid-data'>
            {
                datas.map(data=>(<ShowData data={data} key={data.key}></ShowData>))
            }
            
        </div>
    );
};

export default HomeData;
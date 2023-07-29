//https://youtu.be/A_Loyzrg50Y

import React, { useEffect, useState } from 'react';
import './css/Style.css';
const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("pune");
    useEffect(()=>{
        const fetchApi=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7c5ecf219d28217d67f08a8c484355af`
        const response=await fetch(url);
        //console.log(response);
        const resjson=await response.json();
         console.log(resjson);
         setCity(resjson.main);
        }


        fetchApi();
    },[search])
    return(
        <>
        <div className='box'>
            <div className='inputData'>
                <input type='search' value={search} className='inputField' onChange={(event)=>{
                 setSearch(event.target.value)
                }} />
            </div>
        
        {
            !city?(
            <p>No Data Found</p>
            ):(<>
                <div className='info'>
                <h2 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}
                </h2>
                <h1 className='temp'>
                {city.temp}ºCel
                </h1>
                <h3 className='tempmin_max'>Min :{city.temp_min}ºCel | Max :{city.temp_max}ºCel</h3>
            </div>
            
    
            <div className='wave'>
           
            </div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>
            </>
            )
        }



       
        </div>
        </>
    )
}
export default Tempapp;
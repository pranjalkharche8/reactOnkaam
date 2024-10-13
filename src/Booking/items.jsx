import React from 'react';
import "./item.css";

export default function Itemfunction({Itemname,rating,prices,image}){
    return(
        <div className='itemmain'>
            <div className='itemheadings'>
                <h3>{Itemname}</h3>
                <p><i class="fa-regular fa-star"></i> {rating}</p>
                <p><i style={{marginLeft:"0.2rem"}} class="fa-solid fa-indian-rupee-sign"></i>&nbsp;&nbsp;{prices}</p>
            </div>
            <div className='imgclass'>
                <img src={image} alt="sample" height="50px" width="50px" />
            </div>
        </div>
    ) 
}
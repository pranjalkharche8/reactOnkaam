import React from 'react';
import "./item.css";
import Billfunction from './bills';
import { Link } from 'react-router-dom';



export default function Itemfunction({ Itemname, rating, prices, image }) {


    function views() {
        <Billfunction amount={prices}></Billfunction>
    }

    return (

        <div className='itemmain'>
            <div className='itemheadings'>
                <h3 >{Itemname}</h3>
                <p style={{ fontWeight: 700, textDecoration: "underline dotted", textUnderlinePosition: "under" }}
                    className='ratingp'><i style={{ paddingRight: "3px" }} class="fa-regular fa-star"></i>{rating}</p>
                <p><i style={{ marginLeft: "0.2rem" }} class="fa-solid fa-indian-rupee-sign"></i>&nbsp;&nbsp;{prices}</p>
            </div>
            <div className='imgclass'>
                <img src={image} alt="sample" height="50px" width="50px" />
            </div>
            <h3 style={{ margin: 0, marginTop: "4px", color: "blue" ,textDecoration:"none"}} >More Details</h3>
        </div>
    )
}
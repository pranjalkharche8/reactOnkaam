import React from 'react';
import "./bills.css";
import { useLocation } from 'react-router-dom';
export default function Billfunction(){
    const location = useLocation();
    console.log(location.state.pricess.prices);
    return (
        <div>
            <h1>{location.state.pricess.prices}</h1>
        </div>
    )
}
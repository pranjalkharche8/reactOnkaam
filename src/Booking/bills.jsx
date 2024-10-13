import React from 'react';
import "./bills.css";

export default function billfunction({amount}){
    return (
        <div>
            <h1>{amount}</h1>
        </div>
    )
}
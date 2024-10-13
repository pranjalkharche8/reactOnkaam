import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Childdd({receivedData}){
    let loca = useLocation();
    console.log(loca);
    return(
        <div>
            <p>data{loca.state.ids}</p>
        </div>
    )
}
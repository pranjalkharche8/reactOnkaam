import React from 'react';
import { useLocation } from 'react-router-dom';
export default function Childdd(){
    let loca = useLocation();
    console.log(loca);
    return(
        <div>
            <p>data{loca.state.id}</p>
        </div>
    )
}
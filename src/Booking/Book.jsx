import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import Breakline from "../BreakLine.jsx";
import "./Book.css"
import { Link } from 'react-router-dom';
import Homepage from "../HomePage.jsx";
export default function Booking(){
    return (
        <>
        <div className='elemain'>
        <div className='electricianc'>
            <Link to="/">
        <i class="fa-solid fa-arrow-left fa-lg"></i>
        </Link>
        <h3>Electrician</h3>
        </div>
        <Breakline></Breakline>
        </div>
        
        <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}
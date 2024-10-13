import React from 'react';
import "./Services.css";
import ac from "./assets/acweb.webp";
import plumber from "./assets/plumberrweb.webp";
import electrician from "./assets/electricianweb.webp";
import cleaning from "./assets/cleaningweb.webp";
import hair from "./assets/hair.apng";
import painter from './assets/painterrweb.webp';
import { Link } from 'react-router-dom';

export default function Servicesfunction() {
    return (
        <div className='servicesClass'>
            <h3>Explore all services</h3>
            <div className='servicesContainer'>
                <div className='serCon'>
                    <div className='ser'>
                        <Link to="/book">           
                        <img src={ac} alt='painter' width="90px" height="50px" />
                        </Link>
                    </div>
                    <p className='para'>AC Repair &</p>
                    <p className='para'>Service</p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src={painter} alt="akshta" width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Painter</p>
                    <p></p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src={plumber}  alt="akshta" width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Plumber</p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src={electrician}  alt="akshta" width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Electrician</p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src={cleaning} width="90px" alt="akshta" height="50px"></img>
                    </div>
                    <p className='para'>Full Home</p>
                    <p className='para'>Deep Cleaning</p>
                </div>
                <div className='serCon'>
                    <div className='ser'>
                        <img src={hair} alt="adssd" width="90px" height="50px"></img>
                    </div>
                    <p className='para'>Men & Women </p>
                    <p className='para'>Salons</p>
                </div>
            </div>
        </div>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import Breakline from '../BreakLine';
import Bottomnavfunction from '../Bottom_nav';
export default function timeanddate(){
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: "1rem", fontSize: "28px" };
    let stye = { fontWeight: 900 };
    return (
        <>
            <div className='elemain'>
                <div className='electricianc'>
                    <Link to="/book">
                        <i class="fa-solid fa-arrow-left fa-lg"></i>
                    </Link>
                    <h3 style={stye}>Address</h3>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>Auto Detector Location</h3>
                </div>
                <Breakline></Breakline>
                <div className='inputadd'>
                </div>
            </div>
            <div className='slot'>
                <Link to="/time">
                    <button class="btn btn-primary btn-lg btn-block">Processed To Payment</button>
                </Link>
            </div>
            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}
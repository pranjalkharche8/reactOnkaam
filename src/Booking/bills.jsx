import React from 'react';
import "./bills.css";
import Linee from './line';
import Breakline from '../BreakLine';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Bottomnavfunction from '../Bottom_nav';
export default function Billfunction() {
    const location = useLocation();
    let itemp = location.state.pricess.prices;
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: "1rem", fontSize: "28px" };
    let stye = { fontWeight: 900 };
    let fees = 12;
    let visting = 50;
    let total = itemp;
    console.log(itemp);
    return (
        <>
            <div className='elemain'>
                <div className='electricianc'>
                    <Link to="/book">
                        <i class="fa-solid fa-arrow-left fa-lg"></i>
                    </Link>
                    <h3 style={stye}>Booking</h3>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>Payment</h3>
                </div>
                <div className='itempayment'>
                    <div className='total'>
                        <p>Item total</p>
                        <p>₹{itemp}</p>
                    </div>
                    <div className='taxes'>
                        <p>Taxes and Fees</p>
                        <p style={{ textDecoration: "none" }}>₹{fees}</p>
                    </div>
                    <div className='visited'>
                        <p>Visiting Charge</p>
                        <p style={{ textDecoration: "none" }}>₹{visting}</p>
                    </div>
                    <Linee></Linee>
                    <div className='totalfees'>
                        <p style={{ fontWeight: "600" }}>Total</p>
                        <p style={{ fontWeight: "600", textDecoration: "none" }}>₹{visting + fees + total}</p>
                    </div>
                </div>
                <Breakline></Breakline>
                <div className='canPolicy'>
                    <h3 style={sty}>Cancellation Policy</h3>
                    <p style={{ marginBottom: "0", paddingLeft: "1rem", textAlign: "left", paddingRight: "0.4rem" }}>Free cancellations if done more than 3 hrs before the service
                        or if a professional isn't assigned. A fee will be charged otherwise.
                    </p>
                </div>
                <Breakline></Breakline>

            </div>
            <div className='slot'>
                <Link to="/time">
                    <button class="btn btn-primary btn-lg btn-block">Select Time & Date</button>
                </Link>
            </div>
            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}
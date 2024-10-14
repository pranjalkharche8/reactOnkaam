import React from 'react';
import "./bills.css";
import Linee from './line';
import Breakline from '../BreakLine';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Bottomnavfunction from '../Bottom_nav';
import Footerfunction from '../Footer';
export default function Billfunction() {
    const location = useLocation();
    let itemp = location.state.pricess.prices;
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: "1rem", fontSize: "25px" };
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
                <div className='canPolicy'>
                    <h3 style={{
                        marginTop: "0.6rem", fontSize: "20px"
                        , marginBottom: "1rem"
                    }}>When should the professional arrive?</h3>

                </div>

                <div className='timeslot'>

                    <button style={{ width: "100px" }} type="button" class="btntime">Today</button>
                    <button style={{ width: "100px" }} type="button" class="btntime">Tomorrow</button>
                    {/* <button type="button" class="btn btn-dark">Dark</button> */}
                </div>
                <Linee></Linee>
                <div className='canPolicy'>
                    <h3 style={{ marginTop: 0, marginBottom: "1.2rem", fontSize: "24px" }}>Select start time of service</h3>
                </div>
            </div>
            <div className='timeslot'>
                <button type="submit" className='btntime'>8:00 AM</button>
                <button type="submit" className='btntime'>8:30 AM</button>
                <button type="submit" className='btntime'>9:00 AM</button>
                <button type="submit" className='btntime'>9:30 AM</button>
                <button type="submit" className='btntime'>10:00 AM</button>
                <button type="submit" className='btntime'>10:30 AM</button>
                <button type="submit" className='btntime'>11:00 AM</button>
                <button type="submit" className='btntime'>11:30 AM</button>
                <button type="submit" className='btntime'>12:00 AM</button>
                <button type="submit" className='btntime'>12:30 AM</button>
                <button type="submit" className='btntime'>1:00 AM</button>
                <button type="submit" className='btntime'>1:30 AM</button>
                <button type="submit" className='btntime'>2:00 AM</button>
                <button type="submit" className='btntime'>2:30 AM</button>
                <button type="submit" className='btntime'>3:00 AM</button>
                <button type="submit" className='btntime'>3:30 AM</button>
                <button type="submit" className='btntime'>4:00 AM</button>
                <button type="submit" className='btntime'>4:30 AM</button>
                <button type="submit" className='btntime'>5:00 AM</button>
                <button type="submit" className='btntime'>5:30 AM</button>
                <button type="submit" className='btntime'>6:00 AM</button>
            </div>
            <div className='slot'>
                <Link to="/time">
                    <button class="btn btn-primary btn-lg btn-block">Select Address</button>
                </Link>
            </div>
            <Footerfunction></Footerfunction>
            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}
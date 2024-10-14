import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import Breakline from "../BreakLine.jsx";
import "../Booking/Book.css"
import { Link } from 'react-router-dom';
import Homepage from "../HomePage.jsx";
import Itemfunction from '../Booking/items.jsx';
import Sample from "../assets/acweb.webp";
import Linee from '../Booking/line.jsx';
export default function Booking() {
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: "1.5rem", fontSize: "28px" };
    let stye = { fontWeight: 900 };
    return (
        <>

            <div className='elemain'>
                <div className='electricianc'>
                    <Link to="/">
                        <i class="fa-solid fa-arrow-left fa-lg"></i>
                    </Link>
                    <h3 style={stye}>Home Cleaning</h3>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>Switch & Socket</h3>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="59" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="56" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="52" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="512" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="59657" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="593453" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="5879" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Switch Replacement" rating="4.8 (16k reviews)" prices="5797" image={Sample}></Itemfunction>
                    <Linee></Linee>
                </div>
            </div>

            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}
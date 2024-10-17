import React from 'react';
import { Link } from 'react-router-dom';
import Breakline from '../BreakLine';
import Bottomnavfunction from '../Bottom_nav';
import "./time.css";
import Linee from './line';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Input from '../inputt';

export default function Timeanddate() {
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: 0,marginRight:"1rem", fontSize: "20px" };
    let stye = { fontWeight: 900 };
    let [apii, setapii] = useState("");
    console.log(apii);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            console.log(latitude, longitude);
            let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            async function apies() {
                try {
                    let appp = await axios.get(url);
                    setapii(appp.data.address);

                } catch (err) {
                    console.log(err);
                }
            }
            apies();
        })
    }, [])
    return (
        <>
            <div className='elemain'>
                <div className='electricianc'>
                    <Link to="/">
                        <i class="fa-solid fa-arrow-left fa-lg"></i>
                    </Link>
                    <h3 style={stye}>Address</h3>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>{apii.residential} {apii.road} {apii.city} {apii.state} {apii.postcode}</h3>
                </div>
                <div className='inputadd'>
                    <input type="text" placeholder='House/Flat (Number)' required />
                    <input type="text" placeholder='Landmark (Optional)' />
                    <input type="text" value={apii.postcode} placeholder='Pincode' required />
                    <div class="mydict">
                        <div>
                            <label>
                                <input type="radio" name="radio" />
                                <span>Home</span>
                            </label>
                            <label>
                                <input type="radio" name="radio" />
                                <span>Other</span>
                            </label>

                        </div>
                    </div>
                    <input style={{ marginTop: "1rem" }} type="text" placeholder='Mobile Number' required />
                    {/* <Input></Input> */}
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>Terms and Conditions</h3>
                </div>
            </div>
            <div className='slot'>
                <Link to="/time">
                    <button class="cssbuttons-io-button">
                        Processed To Payment
                        <div class="icon">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </button>

                    {/* <button class="btn btn-primary btn-lg btn-block">Processed To Payment</button> */}
                </Link>
            </div>
            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}
import React from 'react';
import { Link } from 'react-router-dom';
import Breakline from '../BreakLine';
import Bottomnavfunction from '../Bottom_nav';
import "./time.css";
import Linee from './line';
import {useState}  from 'react';
import {useEffect}  from 'react';
import axios from 'axios';

export default function Timeanddate() {
    let sty = { fontWeight: 900, marginTop: "0.8rem", marginBottom: 0, fontSize: "20px" };
    let stye = { fontWeight: 900 };
    let[apii,setapii] = useState("");
    console.log(apii);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            const {latitude, longitude} = pos.coords;
            console.log(latitude, longitude);
            let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            async function apies(){
                try{
                    let appp = await axios.get(url);
                    setapii(appp.data.address);
                    
                }catch(err){
                    console.log(err);
                }
            }
            apies();
        })
    },[])
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
                    <h3 style={sty}>{apii.city_district},{apii.state},{apii.postcode}</h3>
                </div>
                <div className='inputadd'>
                    <input type="text" placeholder='House/Flat (Number)' required />
                    <input type="text" placeholder='Landmark (Optional)' />
                    <input type="text" value={apii.postcode} placeholder='Pincode' required />
                    <div>
                    <input type="checkbox" id="coding" name="interest" value="coding" />
                    <label for="coding">Home</label>
                    </div>
                    <div>
                    <input type="checkbox" id="music" name="interest" value="music" />
                    <label for="music">Other</label>
                    </div>
                    <input type="text" placeholder='Mobile Number' required />
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

import React from 'react';
import "./loginpage.css"
import Bnavv from '../Bottom_nav.jsx';

import proff from "../assets/wired.webp"
export default function logn() {
  return (
    <>

          <div className='nn' >
          <div className='imagesvg'>
      <img src={proff} alt="akshat" height="150px" width="150px"/>
    </div>


        <form class="form">
          <input type="text" class="input" placeholder="Enter your name" />
          <input type="text" class="input" placeholder="Enter your email" />
          <input type="password" class="input" placeholder="*********" />

          <button style={{ border: "1px solid white" }}>Submit</button>
        </form>
      </div>
      <Bnavv></Bnavv>
    </>
  )
}



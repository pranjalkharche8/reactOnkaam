
import React from 'react';
import "./loginpage.css"
export default function logn(){
    return (
        <div style={{margin: "1rem"}}>
<form class="form">
  <input type="text" class="input" placeholder="Enter your name"/>
  <input type="text" class="input" placeholder="Enter your email"/>
    <input type="password" class="input" placeholder="*********"/>

  <button style={{border:"1px solid white"}}>Submit</button>
</form>
        </div>
    )
}



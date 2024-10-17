import React from 'react';
import Bottomnavfunction from '../Bottom_nav.jsx';
import Breakline from "../BreakLine.jsx";
import "../Booking/Book.css"
import { Link } from 'react-router-dom';
import Homepage from "../HomePage.jsx";
import Itemfunction from '../Booking/items.jsx';
import Sample from "../assets/acweb.webp";
import Linee from '../Booking/line.jsx';
import chock from "https://tse1.mm.bing.net/th?id=OIP.CprIYQbY6lpMJsflqTZEJAHaHa&pid=Api&P=0&h=180";
import honey from "https://tse1.mm.bing.net/th?id=OIP.JwV9xXDuNPAMEEsReG9lRgHaE6&pid=Api&P=0&h=180";
import face from "https://tse1.mm.bing.net/th?id=OIP.5m9FJrucXV1QOrk3eakcgwHaHa&pid=Api&P=0&h=180";
import wax from "https://tse2.mm.bing.net/th?id=OIP.1ZiaVaH4N4GiExc8YGP5kgHaHa&pid=Api&P=0&h=180";
import wax2 from "https://tse2.mm.bing.net/th?id=OIP.1ZiaVaH4N4GiExc8YGP5kgHaHa&pid=Api&P=0&h=180";
import manicure from "https://tse4.mm.bing.net/th?id=OIP.z4e3tOevSixbGWHCfgah5QHaE8&pid=Api&P=0&h=180";
import costom from "https://tse1.mm.bing.net/th?id=OIP.CtBiWPpzNtHWxEwMhJJOZAHaEc&pid=Api&P=0&h=180";
import arm1 from "https://tse2.mm.bing.net/th?id=OIP.1szxzHr87X89vSL040sEZgHaFj&pid=Api&P=0&h=180";
import arm2 from "https://tse2.mm.bing.net/th?id=OIP.pzgN7THdvxOHg8QTGtkgMwHaFj&pid=Api&P=0&h=180";
import legs1 from "https://tse3.mm.bing.net/th?id=OIP.Kx9-Mx2QKujTrErU4ok_DgHaFJ&pid=Api&P=0&h=180";
import legs2 from "http://sharoneskinspecialist.com/wp-content/uploads/2021/01/229689544LegWaxingFull.jpg";
import underarm from "https://tse1.mm.bing.net/th?id=OIP.2MMeNgCnSEcyqNMM8K3cnwHaHa&pid=Api&P=0&h=180";
import bikini from "https://tse4.mm.bing.net/th?id=OIP.-RpEVnMcSYrAtaSzjTdddAHaE7&pid=Api&P=0&h=180";
import back from "https://tse3.mm.bing.net/th?id=OIP.6LkChd48dGdMzMqzVA-qCgHaE7&pid=Api&P=0&h=180";
import stomach from "https://tse3.mm.bing.net/th?id=OIP.N9jDih6Dxi1lSZjj5HWosQHaE8&pid=Api&P=0&h=180";
import line from "https://tse1.mm.bing.net/th?id=OIP.M3IIcTyvxWx9SeVhc-N1KAHaDt&pid=Api&P=0&h=180";
import rose from "https://tse1.mm.bing.net/th?id=OIP.rMeG2CxQbYvQTdeWMt05kQHaE7&pid=Api&P=0&h=180";
import chocklet from "https://tse3.mm.bing.net/th?id=OIP.gh4HSMhAroeNvj-_Dp02QwHaGP&pid=Api&P=0&h=180";
import foot from "https://tse3.mm.bing.net/th?id=OIP.moomlmZHfmFqemdr-sE41wHaE8&pid=Api&P=0&h=180";
import cut from "https://i.pinimg.com/originals/d2/3b/34/d23b3456acd98ed641358bc4210f5b01.jpg";
import rose2 from "https://tse1.mm.bing.net/th?id=OIP.OalVpoYNjrwfdwdP3UVrMAHaJQ&pid=Api&P=0&h=180";
import cut2 from "https://thumbs.dreamstime.com/b/woman-does-manicure-home-manicure-tools-edged-manicure-cut-wound-finger-blood-dangerous-manicure-home-care-woman-174205166.jpg";
import choclate2 from "https://tse4.mm.bing.net/th?id=OIP.ClO0iup2IILyXhNRbgg4iAHaHa&pid=Api&P=0&h=180";
import crayon from "https://tse3.mm.bing.net/th?id=OIP.82ma9t8IZxVESyr3j7MvEQHaE8&pid=Api&P=0&h=180";
import glovite from "https://up.yimg.com/ib/th?id=OIP.lluqN9il_5x8VDmPAgTZDAHaE8&pid=Api&rs=1&c=1&qlt=95&w=149&h=99";
import o31 from "https://up.yimg.com/ib/th?id=OIP.u02Shb71L_8fyZU3nBh5lAHaHZ&pid=Api&rs=1&c=1&qlt=95&w=117&h=117";
import wine from "https://1.bp.blogspot.com/-sDba2dNCs5s/XX-qGwIf-II/AAAAAAAACGo/8A3Ej__oZjEwC36Mlmx-d6s_c9Nh1KROgCLcBGAsYHQ/s640/wine-facial-min.jpg";
import o32 from "https://allurebeautyworld.com/wp-content/uploads/2019/11/O3-Blueberry-De-Tan-Cream.jpg";
import sara from "https://th.bing.com/th/id/OIP.35eo0cVNDkD4eKxXuhkW3wAAAA?rs=1&pid=ImgDetMain";
import o33 from "https://stylesatlife.com/wp-content/uploads/2018/03/Treatments-For-Instant-Sun-Tan-Removal.jpg";
import o34 from "https://th.bing.com/th/id/OIP.x5KdW9WGA6jX3awwS5MSrQHaHa?rs=1&pid=ImgDetMain";
import head from "https://th.bing.com/th/id/OIP.vPS5zqWQrAfX7jwR9zcEcwHaE7?rs=1&pid=ImgDetMain";
import hair from "https://i.pinimg.com/originals/15/b8/db/15b8db8929dfe9f65c88e645cc0e751c.jpg";
import spa from "https://static.toiimg.com/photo/84612625.cms";
import wash from "https://res.cloudinary.com/dcn05csot/image/upload/v1589013987/hair/spa_zteozr.jpg";
import detan from "https://th.bing.com/th/id/OIP.zLyS-EsFtowPiK17Wn27twHaFE?rs=1&pid=ImgDetMain";
import bleach from "https://www.wnbspa.in/wp-content/uploads/2019/09/Bleaching-2.jpg";
import treading from "https://www.thelashlounge.com/wp-content/uploads/2022/02/body.jpg";
import facewax from "https://th.bing.com/th/id/OIP.NHaZZm9App6NoK3R_nt-tgHaE7?rs=1&pid=ImgDetMain";

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
                    <h2 style={stye}>Men and Women Salons</h2>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>BestSeller Packages</h3>
                    <Itemfunction Itemname="Full chocolate wax" rating="4.8 (16k reviews)" prices="949" image={chock}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Honey Waxing" rating="4.8 (16k reviews)" prices="649" image={ honey }></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Fcae wax" rating="4.8 (16k reviews)" prices="59" image={face}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Waxing , Facial & Face wax" rating="4.8 (16k reviews)" prices="2449" image={wax}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="waxing & Hair care" rating="4.8 (16k reviews)" prices="999" image={wax2}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Manicure & Pedicure" rating="4.8 (16k reviews)" prices="1500" image={manicure}></Itemfunction>
                    <Linee></Linee>
                </div>
                <Breakline></Breakline>
                <div>
                    <h3 style={sty}>Make your Package</h3>
                    <Itemfunction Itemname="Customise package " rating="4.8 (16k reviews)" prices="2600" image={costom}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Waxing</h3>
                    <Itemfunction Itemname="Full Arms" rating="4.8 (16k reviews)" prices="299" image={arm1}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Half Arms" rating="4.8 (16k reviews)" prices="199" image={arm2}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Full legs" rating="4.8 (16k reviews)" prices="359" image={legs1}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="half leg" rating="4.8 (16k reviews)" prices="180" image={legs2}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Underarms" rating="4.8 (16k reviews)" prices="49" image={underarm}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Bikini wax" rating="4.8 (16k reviews)" prices="999" image={bikini}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Back wax" rating="4.8 (16k reviews)" prices="449" image={back}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Stomach wax" rating="4.8 (16k reviews)" prices="299" image={stomach}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Bikini line wax" rating="4.8 (16k reviews)" prices="249" image={line}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Manicure & Pedicure</h3>
                    <Itemfunction Itemname="Elysian British rose pedicure" rating="4.8 (16k reviews)" prices="699" image={rose}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian chocolate & venilla pedicure" rating="4.8 (16k reviews)" prices="959" image={chocklet}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Foot massage" rating="4.8 (16k reviews)" prices="199" image={foot}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Cut , File & polish" rating="4.8 (16k reviews)" prices="1049" image={cut}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian British rose menicure" rating="4.8 (16k reviews)" prices="699" image={rose2}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="cut , file & polish" rating="4.8 (16k reviews)" prices="249" image={cut2}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian chocolate & venilla manicure" rating="4.8 (16k reviews)" prices="899" image={choclate2}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="crayon manicure" rating="4.8 (16k reviews)" prices="799" image={crayon}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Facial & Cleanup</h3>
                    <Itemfunction Itemname="Glovite lightening facial" rating="4.8 (16k reviews)" prices="1099" image={glovite}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+shine & glow" rating="4.8 (16k reviews)" prices="1699" image={o31}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Elysian firming wine glow" rating="4.8 (16k reviews)" prices="1199" image={wine}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+ power brightening facial" rating="4.8 (16k reviews)" prices="1999" image={o32}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Sara fruit cleanup" rating="4.8 (16k reviews)" prices="699" image={sara}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+ tan clear cleanup" rating="4.8 (16k reviews)" prices="899" image={o33}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="O3+ feel youthful facial" rating="4.8 (16k reviews)" prices="1599" image={o34}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Hair care</h3>
                    <Itemfunction Itemname="Head massage " rating="4.8 (16k reviews)" prices="349" image={head}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Hair colour / mahandi" rating="4.8 (16k reviews)" prices="299" image={hair}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Loreal hair spa" rating="4.8 (16k reviews)" prices="1249" image={spa}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Hair wash" rating="4.8 (16k reviews)" prices="499" image={wash}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Bleach & detan</h3>
                    <Itemfunction Itemname="Detan " rating="4.8 (16k reviews)" prices="399" image={detan}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Bleach" rating="4.8 (16k reviews)" prices="349" image={bleach}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <h3 style={sty}>Threading & Face waxing</h3>
                    <Itemfunction Itemname="Threading & Face waxing " rating="4.8 (16k reviews)" prices="79" image={treading}></Itemfunction>
                    <Linee></Linee>
                </div>
                <div>
                    <Itemfunction Itemname="Face waxing" rating="4.8 (16k reviews)" prices="69" image={facewax}></Itemfunction>
                    <Linee></Linee>
                </div>
            </div>

            <Bottomnavfunction></Bottomnavfunction>
        </>
    )
}
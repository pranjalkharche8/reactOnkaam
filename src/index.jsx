import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage.jsx";
import Errorr from './Error.jsx';
import Bottomnavfunction from './Bottom_navigation.jsx';
import Bnav from './Bottom_nav.jsx';
import Arcomponents from './Augmented_Reality/ar.jsx';
import Booking from './Booking/Book.jsx';
import Assistant from './Assitants/Ass';
import Account from './Account/Account';
import Book from './Booking/Book.jsx';
import Billfunction from './Booking/bills.jsx';
import Childdd from './Assitants/Child.jsx';
createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/error' element={<Errorr />} />
        <Route path='/' element={<HomePage />} />
        <Route path="/ar" element={<Arcomponents />} />
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/assistant" element={<Assistant />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path='*' element={<Errorr/>}></Route>
        <Route path='/bill' element={<Billfunction></Billfunction>}></Route>
        <Route path='/child' element={<Childdd></Childdd>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)

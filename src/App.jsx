import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import AllAdmins from './components/AllAdmins';
import ViewDetails from './components/adminSpecific';
import CreateAdmin from './components/signup';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AboutUs from './components/aboutUs';
import AllUsers from './components/AllUsers';
import ViewDetailsU from './components/userSpecific';
import AllDrivers from './components/AllDrivers';
import ViewDetailsD from './components/driverSpecific';
import AllVehicles from './components/AllVehicles';
import ViewDetailsV from './components/vehicleSpecific';
import AllGuides from './components/AllGuides';
import ViewDetailsG from './components/guideSpecific';

function App() {
    return (
            <Router>
                <Navbar/>
                <Routes>                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/alladmin" element={<AllAdmins/>}/>
                    <Route path="/adminSpecific/:id" element={<ViewDetails/>}/>
                    <Route path="/createadmin" element={<CreateAdmin/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/alluser" element={<AllUsers/>}/>
                    <Route path="/userSpecific/:id" element={<ViewDetailsU/>}/>
                    <Route path="/alldriver" element={<AllDrivers/>}/>
                    <Route path="/driverSpecific/:id" element={<ViewDetailsD/>}/>
                    <Route path="/allvehicle" element={<AllVehicles/>}/>
                    <Route path="/vehicleSpecific/:id" element={<ViewDetailsV/>}/>
                    <Route path="/allguide" element={<AllGuides/>}/>
                    <Route path="/guideSpecific/:id" element={<ViewDetailsG/>}/>
                </Routes>
            </Router>
    );
}

export default App;
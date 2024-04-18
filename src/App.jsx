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
import AllBookings from './components/AllBookings';
import ViewDetailsB from './components/bookingSpecific';
import AllDrivers from './components/AllDrivers';
import ViewDetailsD from './components/driverSpecific';
import AllVehicles from './components/AllVehicles';
import ViewDetailsV from './components/vehicleSpecific';
import AllGuides from './components/AllGuides';
import ViewDetailsG from './components/guideSpecific';
import CreateDriver from './components/createDriver';
import CreateGuide from './components/createGuide';
import CreateVehicle from './components/createVehicle';
import CreateBooking from './components/createBooking';

import GenaratePasswordPage from './components/genaratePassword';

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
                    <Route path="/user" element={<AllUsers/>}/>
                    <Route path="/userSpecific/:id" element={<ViewDetailsU/>}/>
                    <Route path="/booking" element={<AllBookings/>}/>
                    <Route path="/bookingSpecific/:id" element={<ViewDetailsB/>}/>
                    <Route path="/driver" element={<AllDrivers/>}/>
                    <Route path="/driverSpecific/:id" element={<ViewDetailsD/>}/>
                    <Route path="/vehicle" element={<AllVehicles/>}/>
                    <Route path="/vehicleSpecific/:id" element={<ViewDetailsV/>}/>
                    <Route path="/guide" element={<AllGuides/>}/>
                    <Route path="/guideSpecific/:id" element={<ViewDetailsG/>}/>
                    <Route path="/createdriver" element={<CreateDriver/>}/>
                    <Route path="/createguide" element={<CreateGuide/>}/>
                    <Route path="/createvehicle" element={<CreateVehicle/>}/>
                    <Route path="/createbooking" element={<CreateBooking/>}/>

                    <Route path="/genaratepassword" element={<GenaratePasswordPage/>}/>

                </Routes>
            </Router>
    );
}

export default App;
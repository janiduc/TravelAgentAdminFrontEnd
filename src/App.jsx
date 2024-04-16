import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Home from './components/home';
import Login from './components/login';
import AllAdmins from './components/AllAdmins';
import ViewDetails from './components/adminSpecific';
import CreateAdmin from './components/signup';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';

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
                </Routes>
            </Router>
    );
}

export default App;
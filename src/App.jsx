import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
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
import DriverList from './components/DriverList';
import UpdateDriverForm from './components/updateDriverForm';
import UserList from './components/UserList';
import UpdateUserForm from './components/updateUserForm';
import VehicleList from './components/VehicleList';
import UpdateVehicleForm from './components/updateVehicleForm';
import AdminList from './components/AdminList';
import UpdateAdminForm from './components/updateAdminForm';
import GuideList from './components/GuideList';
import UpdateGuideForm from './components/updateGuideForm';
import BookingList from './components/BookingList';
import UpdateBookingForm from './components/updateBookingForm';

function App() {
    return (
            <Router>
                <Navbar/>
                <Routes>                    
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<ProtectedRoute>
                                                    <Logout/>
                                                    </ProtectedRoute>}/>
                    <Route path="/alladmin" element={<ProtectedRoute>
                                                    <AllAdmins/>
                                                    </ProtectedRoute>}/>
                    <Route path="/adminSpecific/:id" element={<ViewDetails/>}/>
                    <Route path="/signup" element={<CreateAdmin/>}/>
                    <Route path="/contact" element={<ProtectedRoute>
                                                    <Contact/>
                                                    </ProtectedRoute>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/user" element={<ProtectedRoute>
                                                    <AllUsers/>
                                                    </ProtectedRoute>}/>
                    <Route path="/userSpecific/:id" element={<ViewDetailsU/>}/>
                    <Route path="/booking" element={<ProtectedRoute>
                                                    <AllBookings/>
                                                    </ProtectedRoute>}/>
                    <Route path="/bookingSpecific/:id" element={<ViewDetailsB/>}/>
                    <Route path="/driver" element={<ProtectedRoute>
                                                    <AllDrivers/>
                                                    </ProtectedRoute>}/>
                    <Route path="/driverSpecific/:id" element={<ViewDetailsD/>}/>
                    <Route path="/vehicle" element={<ProtectedRoute>
                                                    <AllVehicles/>
                                                    </ProtectedRoute>}/>
                    <Route path="/vehicleSpecific/:id" element={<ViewDetailsV/>}/>
                    <Route path="/guide" element={<ProtectedRoute>
                                                    <AllGuides/>
                                                    </ProtectedRoute>}/>
                    <Route path="/guideSpecific/:id" element={<ViewDetailsG/>}/>
                    <Route path="/createdriver" element={<ProtectedRoute>
                                                    <CreateDriver/>
                                                    </ProtectedRoute>}/>
                    <Route path="/createguide" element={<ProtectedRoute>
                                                    <CreateGuide/>
                                                    </ProtectedRoute>}/>
                    <Route path="/createvehicle" element={<ProtectedRoute>
                                                    <CreateVehicle/>
                                                    </ProtectedRoute>}/>
                    <Route path="/createbooking" element={<ProtectedRoute>
                                                    <CreateBooking/>
                                                    </ProtectedRoute>}/>

                    <Route path="/genaratepassword" element={<GenaratePasswordPage/>}/>
                    <Route path="/DriverList" element={<DriverList/>}/>
                    <Route path="/updateDriverForm/:id" element={<UpdateDriverForm/>}/>
                    <Route path="/UserList" element={<UserList/>}/>
                    <Route path="/updateUserForm/:id" element={<UpdateUserForm/>}/>
                    <Route path="/VehicleList" element={<VehicleList/>}/>
                    <Route path="/updateVehicleForm/:id" element={<UpdateVehicleForm/>}/>
                    <Route path="/AdminList" element={<AdminList/>}/>
                    <Route path="/updateAdminForm/:id" element={<UpdateAdminForm/>}/>
                    <Route path="/GuideList" element={<GuideList/>}/>
                    <Route path="/updateGuideForm/:id" element={<UpdateGuideForm/>}/>
                    <Route path="/BookingList" element={<BookingList/>}/>
                    <Route path="/updateBookingForm/:id" element={<UpdateBookingForm/>}/>

                </Routes>
            </Router>
    );
}

export default App;
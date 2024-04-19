import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/TravelSriLogo.png'; // Update the path to your logo

export default function Navbar() {
  const isLoggedIn = sessionStorage.getItem('loginStatus') === 'true';
  const logedUser = sessionStorage.getItem('username');
  let navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'All Admins', icon: 'pi pi-plus', url: '/alladmin' },
    { label: 'Client', icon: 'pi pi-user', url: '/user' },
    { label: 'Create Booking', icon: 'pi pi-user', url: '/createbooking' },
    { label: 'Bookings', icon: 'pi pi-user', url: '/booking' },
    { label: 'Create Driver', icon: 'pi pi-user', url: '/createdriver' },
    { label: 'Driver', icon: 'pi pi-user', url: '/driver' },
    { label: 'Create Vehicle', icon: 'pi pi-car', url: '/createvehicle' },
    { label: 'Vehicle', icon: 'pi pi-car', url: '/vehicle' },
    { label: 'Create Guide', icon: 'pi pi-book', url: '/createguide' },
    { label: 'Guide', icon: 'pi pi-book', url: '/guide' },
    { label: 'About Us', icon: 'pi pi-plus', url: '/aboutUs' },
    { label: 'Send Email', icon: 'pi pi-user', url: '/contact' }
    //{ label: 'Create Admin', icon: 'pi pi-home', url: '/createadmin'}
    // Add other menu items here
  ];

  const start = (
    <img alt="logo" src={Logo} height="40" className="p-mr-2" />
  );

  const end = (
    <div className="flex align-items-center">
      
      {!isLoggedIn ? (
        <>
          <Link to="/login" className="p-menuitem-link">
            <i className="pi pi-sign-in"></i>
            <span>Log In</span>
          </Link>
          <Link to="/signup" className="p-menuitem-link">
            <i className="pi pi-angle-up"></i>
            <span>Sign up</span>
          </Link>
          
        </>
      ) : (
        <>
          
          <div onClick={handleLogout} className="p-menuitem-link" style={{ cursor: 'pointer' }}>
            <i className="pi pi-sign-out"></i>
            <span>Log Out</span>
          </div>
          <Link to="/profile" className="p-menuitem-link">
            <i className="pi pi-user"></i>
            
            <span>{logedUser}</span>
          </Link>
        </>
      )}
    </div>
  );

  return (
    <div className="navbar">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}

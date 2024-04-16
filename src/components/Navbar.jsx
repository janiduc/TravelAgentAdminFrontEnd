import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/TravelSriLogo.png'; // Update the path to your logo

export default function Navbar() {
  const items = [
    { label: 'Home', icon: 'pi pi-home', url: '/' },
    { label: 'All Admins', icon: 'pi pi-plus', url: '/alladmin' },
    { label: 'Create Admin', icon: 'pi pi-home', url: '/createadmin'}
    // Add other menu items here
  ];

  const start = (
    <img alt="logo" src={Logo} height="40" className="p-mr-2" />
  );

  const end = (
    <div className="flex align-items-center">
      <Link to="/login" className="p-menuitem-link">
        <i className="pi pi-sign-in"></i>
        <span>Log In</span>
      </Link>
      <Link to="/logout" className="p-menuitem-link">
        <i className="pi pi-sign-out"></i>
        <span>Log Out</span>
      </Link>
      <Link to="/createadmin" className="p-menuitem-link">
        <i className="pi pi-angle-up"></i>
        <span>Sign up</span>
      </Link>
    </div>
  );

  return (
    <div className="navbar">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
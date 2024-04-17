import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import '../styles/Navbar1.css';

const Navbar1 = () => {
    const items = [
        //{ label: 'Home', icon: 'pi pi-home', url: '/' },
        { label: 'Driver', icon: 'pi pi-user', url: '/driver' },
        { label: 'Vehicle', icon: 'pi pi-car', url: '/vehicle' },
        { label: 'Guide', icon: 'pi pi-book', url: '/guide' }
    ];

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
            <Link to="/signup" className="p-menuitem-link">
                <i className="pi pi-angle-up"></i>
                <span>Sign up</span>
            </Link>
        </div>
    );

    return (
        <div className="navbar-vertical">
            <Menubar model={items} end={end} />
        </div>
    );
};

export default Navbar1;
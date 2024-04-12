import React, { useState, useEffect } from 'react';

export default function home() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:4000/admins/getUsers');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAdmins(data.admin); // Assuming 'admin' is the key containing the array of admins
        } catch (error) {
            console.error('Error fetching Admins data:', error);
        }
    };

    return (
        <div>
            <h1>Admins List</h1>
            <ul>
                {admins.map(admin => (
                    <li key={admin._id}>
                        <p>Username: {admin.adminnameA}</p>
                        <p>Name: {admin.nameA}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
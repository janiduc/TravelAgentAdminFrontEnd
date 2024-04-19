import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/updateDriverForm.css';

const UpdateDriverForm = ({ onUpdate }) => {
    const [drivername, setDriverName] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchDriverData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/drivers/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDriverName(data.driver.drivername);
                setName(data.driver.nameD);
                setAddress(data.driver.addressD);
                setPhone(data.driver.phoneD);
                setGender(data.driver.genderD);
            } catch (error) {
                console.error('Error fetching Admin data:', error);
            }
        };

        fetchDriverData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/drivers/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ drivername, nameD: name, addressD: address, phoneD: phone, genderD: gender }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Update was successful
            onUpdate();
        } catch (error) {
            console.error('Error updating driver:', error);
        }
    };

    return (
        <div>
        <h1 style={{ textAlign: 'center' }}>Update Driver</h1>
        <form onSubmit={handleSubmit}>
            <label>Driver Name:</label>
            <input type="text" value={drivername} onChange={(e) => setDriverName(e.target.value)} required />
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <label>Phone:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <label>Gender:</label>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};

export default UpdateDriverForm;

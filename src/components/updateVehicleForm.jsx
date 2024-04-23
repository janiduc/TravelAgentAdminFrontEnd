import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../styles/updateDriverForm.css';

const UpdateVehicleForm = ({ onUpdate }) => {
    const [vehicleID, setVehicleName] = useState('');
    const [vehicleType, setName] = useState('');
    const [nameV, setAddress] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        const fetchVehicleData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/vehicles/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVehicleName(data.vehicle.vehicleID);
                setName(data.vehicle.vehicleType);
                setAddress(data.vehicle.nameV);
            } catch (error) {
                console.error('Error fetching Vehicle data:', error);
            }
        };

        fetchVehicleData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/vehicles/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ vehicleID, vehicleType: vehicleType, nameV: nameV }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Update was successful
            navigate("/vehicle");
            onUpdate();
        } catch (error) {
            console.error('Error updating vehicle:', error);
        }
    };

    return (
        <div>
        <h1 style={{ textAlign: 'center' }}>Update Vehicle</h1>
        <form onSubmit={handleSubmit}>
            <label>Vehicle ID:</label>
            <input type="text" value={vehicleID} onChange={(e) => setVehicleName(e.target.value)} required />
            <label>Vehicle Type:</label>
            <input type="text" value={vehicleType} onChange={(e) => setName(e.target.value)} required />
            <label>Vehicle Name:</label>
            <input type="text" value={nameV} onChange={(e) => setAddress(e.target.value)} required />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};

export default UpdateVehicleForm;

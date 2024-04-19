import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VehicleSpecific = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [vehicleData, setVehicleData] = useState(null);

    useEffect(() => {
        const fetchVehicleData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/vehicles/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVehicleData(data.vehicle);
            } catch (error) {
                console.error('Error fetching Vehicle data:', error);
            }
        };

        fetchVehicleData();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this vehicle?');
        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/vehicles/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Vehicle');
            }
            navigate('/');
        } catch (error) {
            console.error('Error deleting Vehicle:', error);
        }
    };

    const styles = {
        deleteButton: {
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer',
          outline: 'none',
          marginLeft: '10px',
        },
      };

    return (
        <div>
            <h1>Vehicle Specific Data</h1>
            {vehicleData ? (
                <div>
                    <div>
                        <p>ID: {vehicleData._id}</p>
                        <p>Vehicle ID: {vehicleData.vehicleID}</p>
                        <p>Vehicle Type: {vehicleData.vehicleType}</p>
                        <p>Name: {vehicleData.nameV}</p>
                        <p>Created At: {vehicleData.createdAt}</p>
                    </div>
                    <div>
                        <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>Loading vehicle data...</p>
            )}
        </div>
    );
};

export default VehicleSpecific;

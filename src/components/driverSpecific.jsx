import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DriverSpecific = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [driverData, setDriverData] = useState(null);

    useEffect(() => {
        const fetchDriverData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/drivers/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDriverData(data.driver);
            } catch (error) {
                console.error('Error fetching Admin data:', error);
            }
        };

        fetchDriverData();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this driver?');
        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/drivers/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Driver');
            }
            navigate('/driver');
        } catch (error) {
            console.error('Error deleting Driver:', error);
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
            <h1>Driver Specific Data</h1>
            {driverData ? (
                <div>
                    <div>
                        <p>ID: {driverData._id}</p>
                        <p>Driver User Name: {driverData.drivername}</p>
                        <p>Driver Full Name: {driverData.nameD}</p>
                        <p>Address: {driverData.addressD}</p>
                        <p>Phone: {driverData.phoneD}</p>
                        <p>Gender: {driverData.genderD}</p>
                        <p>Created At: {driverData.createdAt}</p>
                    </div>
                    <div>
                        <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>Loading driver data...</p>
            )}
        </div>
    );
};

export default DriverSpecific;

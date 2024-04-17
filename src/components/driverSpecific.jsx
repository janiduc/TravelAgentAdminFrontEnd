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
        try {
            const response = await fetch(`http://localhost:4000/drivers/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Driver');
            }
            navigate('/');
        } catch (error) {
            console.error('Error deleting Driver:', error);
        }
    };

    return (
        <div>
            <h1>Driver Specif data</h1>
            {driverData ? (
                // <Card title="Admin Specific Details" className="ticket-card">
                <div>
                    <div>
                        <p>ID: {driverData._id}</p>
                        <p>Price: ${driverData.drivername}</p>
                        <p>Availability: {driverData.nameD}</p>
                        <p>Ticket ID: {driverData.addressD}</p>
                        <p>Ticket ID: {driverData.phoneD}</p>
                        <p>Ticket ID: {driverData.genderD}</p>
                        <p>Ticket Type: {driverData.createdAt}</p>
                    </div>
                    <div>
                        {/*<Button label="Edit" className="p-button-raised p-button-info p-mr-2" onClick={() => navigate(`/editticket/${ticketData.ticketID}`)} />*/}
                        <button onClick={handleDelete} />
                    </div>
                    </div>
                // </Card>
            ) : (
                <p>Loading driver data...</p>
            )}
        </div>
    );
};

export default DriverSpecific;
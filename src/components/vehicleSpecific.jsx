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

    return (
        <div>
            <h1>Vehicle Specif data</h1>
            {vehicleData ? (
                // <Card title="Admin Specific Details" className="ticket-card">
                <div>
                    <div>
                        <p>ID: {vehicleData._id}</p>
                        <p>Price: ${vehicleData.vehicleID}</p>
                        <p>Availability: {vehicleData.vehicleType}</p>
                        <p>Ticket ID: {vehicleData.nameV}</p>
                        <p>Ticket Type: {vehicleData.createdAt}</p>
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

export default VehicleSpecific;
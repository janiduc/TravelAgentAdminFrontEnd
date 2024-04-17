import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserSpecific = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/users/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data.user);
            } catch (error) {
                console.error('Error fetching User data:', error);
            }
        };

        fetchUserData();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/users/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            navigate('/');
        } catch (error) {
            console.error('Error deleting User:', error);
        }
    };

    return (
        <div>
            <h1>User Specif data</h1>
            {userData ? (
                // <Card title="Admin Specific Details" className="ticket-card">
                <div>
                    <div>
                        <p>ID: {userData._id}</p>
                        <p>Price: ${userData.username}</p>
                        <p>Availability: {userData.name}</p>
                        <p>Ticket ID: {userData.address}</p>
                        <p>Ticket ID: {userData.phone}</p>
                        <p>Ticket ID: {userData.gender}</p>
                        <p>Ticket Type: {userData.createdAt}</p>
                    </div>
                    <div>
                        {/*<Button label="Edit" className="p-button-raised p-button-info p-mr-2" onClick={() => navigate(`/editticket/${ticketData.ticketID}`)} />*/}
                        <button onClick={handleDelete} />
                    </div>
                    </div>
                // </Card>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default UserSpecific;
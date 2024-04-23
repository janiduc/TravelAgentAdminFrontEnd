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
        const confirmDelete = window.confirm('Are you sure you want to delete this user?');
        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/users/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            navigate('/user');
        } catch (error) {
            console.error('Error deleting User:', error);
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
            <h1>User Specific Data</h1>
            {userData ? (
                <div>
                    <div>
                        <p>ID: {userData._id}</p>
                        <p>Client User Name: {userData.username}</p>
                        <p>Client Full Name: {userData.name}</p>
                        <p>Address: {userData.address}</p>
                        <p>Phone: {userData.phone}</p>
                        <p>Gender: {userData.gender}</p>
                        <p>Created At: {userData.createdAt}</p>
                    </div>
                    <div>
                        <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default UserSpecific;

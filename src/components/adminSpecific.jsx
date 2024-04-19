import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdminSpecific = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [adminData, setAdminData] = useState(null);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/admins/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAdminData(data.admin);
            } catch (error) {
                console.error('Error fetching Admin data:', error);
            }
        };

        fetchAdminData();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this admin?');
        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/admins/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Admin');
            }
            navigate('/');
        } catch (error) {
            console.error('Error deleting Admin:', error);
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
            <h1>Admin Specific Data</h1>
            {adminData ? (
                <div>
                    <div>
                        <p>ID: {adminData._id}</p>
                        <p>Admin User Name: {adminData.adminnameA}</p>
                        <p>Full Name: {adminData.nameA}</p>
                        <p>Created At: {adminData.createdAt}</p>
                    </div>
                    <div>
                        <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>Loading admin data...</p>
            )}
        </div>
    );
};

export default AdminSpecific;

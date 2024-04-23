import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../styles/updateDriverForm.css';

const UpdateAdminForm = ({ onUpdate }) => {
    const [adminnameA, setAdminName] = useState('');
    const [nameA, setName] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/admins/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAdminName(data.admin.adminnameA);
                setName(data.admin.nameA);
            } catch (error) {
                console.error('Error fetching Admin data:', error);
            }
        };

        fetchAdminData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/admins/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({adminnameA: adminnameA, nameA: nameA }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Update was successful
            navigate("/alladmin");
            onUpdate();
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    return (
        <div>
        <h1 style={{ textAlign: 'center' }}>Update Admin</h1>
        <form onSubmit={handleSubmit}>
            <label>Admin Name:</label>
            <input type="text" value={adminnameA} onChange={(e) => setAdminName(e.target.value)} required />
            <label>Name:</label>
            <input type="text" value={nameA} onChange={(e) => setName(e.target.value)} required />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};

export default UpdateAdminForm;

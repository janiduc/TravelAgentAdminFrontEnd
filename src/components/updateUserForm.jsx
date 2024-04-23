import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../styles/updateDriverForm.css';

const UpdateUserForm = ({ onUpdate }) => {
    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/users/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserName(data.user.username);
                setName(data.user.name);
                setAddress(data.user.address);
                setPhone(data.user.phone);
                setGender(data.user.gender);
            } catch (error) {
                console.error('Error fetching User data:', error);
            }
        };

        fetchUserData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/users/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, name: name, address: address, phone: phone, gender: gender }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Update was successful
            navigate("/user");
            onUpdate();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div>
        <h1 style={{ textAlign: 'center' }}>Update User</h1>
        <form onSubmit={handleSubmit}>
            <label>User Name:</label>
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} required />
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

export default UpdateUserForm;

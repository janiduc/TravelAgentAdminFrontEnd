import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../styles/updateDriverForm.css';

const UpdateGuideForm = ({ onUpdate }) => {
    const [guidename, setGuideName] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/guides/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGuideName(data.guide.guidename);
                setName(data.guide.nameG);
                setAddress(data.guide.addressG);
                setPhone(data.guide.phoneG);
                setGender(data.guide.genderG);
            } catch (error) {
                console.error('Error fetching Guide data:', error);
            }
        };

        fetchGuideData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/guides/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ guidename, nameG: name, addressG: address, phoneG: phone, genderG: gender }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Update was successful
            navigate("/guide");
            onUpdate();
        } catch (error) {
            console.error('Error updating guide:', error);
        }
    };

    return (
        <div>
        <h1 style={{ textAlign: 'center' }}>Update Guide</h1>
        <form onSubmit={handleSubmit}>
            <label>Guide Name:</label>
            <input type="text" value={guidename} onChange={(e) => setGuideName(e.target.value)} required />
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

export default UpdateGuideForm;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const GuideSpecific = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [guideData, setGuideData] = useState(null);

    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/guides/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGuideData(data.guide);
            } catch (error) {
                console.error('Error fetching Guide data:', error);
            }
        };

        fetchGuideData();
    }, [id]);

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this guide?');
        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/guides/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Guide');
            }
            navigate('/guide');
        } catch (error) {
            console.error('Error deleting Guide:', error);
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
            <h1>Guide Specific Data</h1>
            {guideData ? (
                <div>
                    <div>
                        <p>ID: {guideData._id}</p>
                        <p>Guide User Name: {guideData.guidename}</p>
                        <p>Guide Full Name: {guideData.nameG}</p>
                        <p>Address: {guideData.addressG}</p>
                        <p>Phone: {guideData.phoneG}</p>
                        <p>Gender: {guideData.genderG}</p>
                        <p>Created At: {guideData.createdAt}</p>
                    </div>
                    <div>
                        <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>Loading guide data...</p>
            )}
        </div>
    );
};

export default GuideSpecific;

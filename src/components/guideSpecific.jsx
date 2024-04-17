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
        try {
            const response = await fetch(`http://localhost:4000/guides/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Guide');
            }
            navigate('/');
        } catch (error) {
            console.error('Error deleting Guide:', error);
        }
    };

    return (
        <div>
            <h1>Guide Specif data</h1>
            {guideData ? (
                // <Card title="Admin Specific Details" className="ticket-card">
                <div>
                    <div>
                        <p>ID: {guideData._id}</p>
                        <p>Price: ${guideData.guidename}</p>
                        <p>Availability: {guideData.nameG}</p>
                        <p>Ticket ID: {guideData.addressG}</p>
                        <p>Ticket ID: {guideData.phoneG}</p>
                        <p>Ticket ID: {guideData.genderG}</p>
                        <p>Ticket Type: {guideData.createdAt}</p>
                    </div>
                    <div>
                        {/*<Button label="Edit" className="p-button-raised p-button-info p-mr-2" onClick={() => navigate(`/editticket/${ticketData.ticketID}`)} />*/}
                        <button onClick={handleDelete} />
                    </div>
                    </div>
                // </Card>
            ) : (
                <p>Loading guide data...</p>
            )}
        </div>
    );
};

export default GuideSpecific;
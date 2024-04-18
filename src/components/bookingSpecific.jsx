import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingSpecific = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        const fetchBookingData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/bookings/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBookingData(data.booking);
            } catch (error) {
                console.error('Error fetching Booking data:', error);
            }
        };

        fetchBookingData();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/bookings/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Booking');
            }
            navigate('/');
        } catch (error) {
            console.error('Error deleting Booking:', error);
        }
    };

    return (
        <div>
            <h1>Booking Specif data</h1>
            {bookingData ? (
                // <Card title="Admin Specific Details" className="ticket-card">
                <div>
                    <div>
                        <p>ID: {bookingData._id}</p>
                        <p>Price: ${bookingData.userNameBooking}</p>
                        <p>Availability: {bookingData.startingDes}</p>
                        <p>Ticket ID: {bookingData.endingDes}</p>
                        <p>Price: ${bookingData.startDate}</p>
                        <p>Availability: {bookingData.endDate}</p>
                        <p>Ticket ID: {bookingData.distance}</p>
                        <p>Price: ${bookingData.totalCost}</p>
                        <p>Availability: {bookingData.vehicleType}</p>
                        <p>Ticket ID: {bookingData.vehicleDetail}</p>
                        <p>Availability: {bookingData.driverDetail}</p>
                        <p>Ticket ID: {bookingData.guideDetail}</p>
                        <p>Ticket Type: {bookingData.createdAt}</p>
                    </div>
                    <div>
                        {/*<Button label="Edit" className="p-button-raised p-button-info p-mr-2" onClick={() => navigate(`/editticket/${ticketData.ticketID}`)} />*/}
                        <button onClick={handleDelete} />
                    </div>
                    </div>
                // </Card>
            ) : (
                <p>Loading booking data...</p>
            )}
        </div>
    );
};

export default BookingSpecific;
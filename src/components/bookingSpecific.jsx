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
        const confirmDelete = window.confirm('Are you sure you want to delete this booking?');
        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(`http://localhost:4000/bookings/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete Booking');
            }
            navigate('/booking');
        } catch (error) {
            console.error('Error deleting Booking:', error);
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
            <h1>Booking Specific Data</h1>
            {bookingData ? (
                <div>
                    <div>
                        <p>ID: {bookingData._id}</p>
                        <p>User Name: {bookingData.userNameBooking}</p>
                        <p>Starting Destination: {bookingData.startingDes}</p>
                        <p>Ending Destination: {bookingData.endingDes}</p>
                        <p>Start Date: {bookingData.startDate}</p>
                        <p>End Date: {bookingData.endDate}</p>
                        <p>Distance: {bookingData.distance}</p>
                        <p>Total Cost: ${bookingData.totalCost}</p>
                        <p>Vehicle Type: {bookingData.vehicleType}</p>
                        <p>Vehicle Detail: {bookingData.vehicleDetail}</p>
                        <p>Driver Detail: {bookingData.driverDetail}</p>
                        <p>Guide Detail: {bookingData.guideDetail}</p>
                        <p>Created At: {bookingData.createdAt}</p>
                    </div>
                    <div>
                        <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (
                <p>Loading booking data...</p>
            )}
        </div>
    );
};

export default BookingSpecific;

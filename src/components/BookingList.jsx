import React from 'react';
import UpdateBookingForm from './updateBookingForm';

const BookingList = ({ bookings, onUpdate }) => {
    const handleUpdate = (id) => {
        // // Find the driver by id and pass it to the update form
        // const driver = drivers.find((driver) => driver._id === id);
        // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
        navigate('/updateBookingForm/id');
    };

    return (
        <div>
            {bookings.map((booking) => (
                <div key={booking._id}>
                    <p>{booking.userNameBooking}</p>
                    <p>{booking.startingDes}</p>
                    <p>{booking.endingDes}</p>
                    <p>{booking.startDate}</p>
                    <p>{booking.endDate}</p>
                    <p>{booking.distance}</p>
                    <p>{booking.totalCost}</p>
                    <p>{booking.vehicleType}</p>
                    <p>{booking.vehicleDetail}</p>
                    <p>{booking.driverDetail}</p>
                    <p>{booking.guideDetail}</p>
                    <button onClick={() => handleUpdate(booking._id)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default BookingList;

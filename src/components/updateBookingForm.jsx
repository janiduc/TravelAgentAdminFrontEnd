import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../styles/updateDriverForm.css';

const UpdateBookingForm = ({ onUpdate }) => {
    const [userNameBooking, setUserName] = useState('');
    const [startingDes, setstartingDes] = useState('');
    const [endingDes, setendingDes] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [distance, setdistance] = useState('');
    const [totalCost, settotalCost] = useState('');
    const [vehicleType, setvehicleType] = useState('');
    const [vehicleDetail, setvehiDetail] = useState('');
    const [driverDetail, setdriDetail] = useState('');
    const [guideDetail, setguideDetail] = useState('');
    const { id } = useParams();

    let navigate = useNavigate();

    useEffect(() => {
        const fetchBookingData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/bookings/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserName(data.booking.userNameBooking);
                setstartingDes(data.booking.startingDes);
                setendingDes(data.booking.endingDes);
                setstartDate(data.booking.startDate);
                setendDate(data.booking.endDate);
                setdistance(data.booking.distance);
                settotalCost(data.booking.totalCost);
                setvehicleType(data.booking.vehicleType);
                setvehiDetail(data.booking.vehicleDetail);
                setdriDetail(data.booking.driverDetail);
                setguideDetail(data.booking.guideDetail);
            } catch (error) {
                console.error('Error fetching Booking data:', error);
            }
        };

        fetchBookingData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userNameBooking: userNameBooking, startingDes: startingDes, endingDes: endingDes, startDate: startDate, endDate: endDate, distance: distance, totalCost: totalCost, vehicleType: vehicleType, vehicleDetail: vehicleDetail, driverDetail: driverDetail, guideDetail: guideDetail }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Update was successful
            navigate("/booking");
            onUpdate();
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    return (
        <div>
        <h1 style={{ textAlign: 'center' }}>Update Driver</h1>
        <form onSubmit={handleSubmit}>
            <label>User Name Booking:</label>
            <input type="text" value={userNameBooking} onChange={(e) => setUserName(e.target.value)} required />
            <label>Starting Destination:</label>
            <input type="text" value={startingDes} onChange={(e) => setstartingDes(e.target.value)} required />
            <label>Ending Destination:</label>
            <input type="text" value={endingDes} onChange={(e) => setendingDes(e.target.value)} required />
            <label>Starting Date:</label>
            <input type="text" value={startDate} onChange={(e) => setstartDate(e.target.value)} required />
            <label>Ending Date:</label>
            <input type="text" value={endDate} onChange={(e) => setendDate(e.target.value)} required />
            <label>Distance:</label>
            <input type="text" value={distance} onChange={(e) => setdistance(e.target.value)} required />
            <label>Total Cost:</label>
            <input type="text" value={totalCost} onChange={(e) => settotalCost(e.target.value)} required />
            <label>Vehicle Type:</label>
            <input type="text" value={vehicleType} onChange={(e) => setvehicleType(e.target.value)} required />
            <label>Vehicle Detail:</label>
            <input type="text" value={vehicleDetail} onChange={(e) => setvehiDetail(e.target.value)} required />
            <label>Driver Detail:</label>
            <input type="text" value={driverDetail} onChange={(e) => setdriDetail(e.target.value)} required />
            <label>Guide Detail:</label>
            <input type="text" value={guideDetail} onChange={(e) => setguideDetail(e.target.value)} required />
            <button type="submit">Update</button>
        </form>
        </div>
    );
};

export default UpdateBookingForm;

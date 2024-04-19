import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../styles/home.css';


const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className="digital-clock">
            {formattedTime}
        </div>
    );
};

const Home = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const currentDate = new Date();
            if (date.getDate() === currentDate.getDate() && date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
                return 'current-date';
            }
        }
        return null;
    };

    return (
        <div className="home">
            <h1>Home</h1>
            <div className="calendar-container">
                <h2>Calendar</h2>
                <Calendar value={date} className="custom-calendar" tileClassName={tileClassName} />
            </div>
            <div className="digital-clock-container">
                <h2>Digital Clock</h2>
                <DigitalClock />
            </div>
            <div className="description-container">
                <h2>About TravelSri Travel Agent</h2>
                <p><strong>Mission:</strong> To simplify your journey to unforgettable experiences. Explore, compare, and book your dream vacation with ease.</p>
                <p><strong>Vision:</strong> Our vision for the travel agent web application is to empower both travel agents and travelers with a comprehensive, user-friendly platform that redefines the booking experience. Our application will serve as a one-stop solution for travel agents, offering intuitive tools to efficiently manage bookings, access real-time information from suppliers, and provide personalized recommendations to clients. For travelers, our platform will offer a seamless and engaging experience, allowing them to discover, plan, and book their dream vacations with ease. By leveraging technology to simplify complex processes and enhance communication between agents and travelers, we aim to revolutionize the way people explore the world, fostering unforgettable travel experiences and lasting memories.</p>
            </div>
        </div>
    );
};

export default Home;

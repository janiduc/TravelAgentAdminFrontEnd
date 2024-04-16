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
                <p><strong>Vision:</strong> To be the leading travel agency providing unforgettable travel experiences.</p>
                <p><strong>Mission:</strong> To deliver exceptional travel services and exceed customer expectations.</p>
            </div>
        </div>
    );
};

export default Home;

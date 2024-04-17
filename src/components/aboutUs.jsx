import React from 'react';
import Travellogo from '../assets/TravelSriLogo.png';

const placesToVisit = [
    {
        name: 'Sigiriya',
        description: 'Sigiriya or Lion Rock is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.',
        image: 'TravelSriLogo.png'
    },
    {
        name: 'Ella',
        description: 'Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres (120 mi) east of Colombo and is situated at an elevation of 1,041 metres (3,415 ft) above sea level.',
        image: 'TravelSriLogo.png'
    },
    {
        name: 'Galle',
        description: 'Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.',
        image: 'TravelSriLogo.png'
    }
];

const aboutUs = () => {
    return (
        <div className="places-container">
            {placesToVisit.map(place => (
                <div key={place.name} className="place-card">
                    <img src={`/images/${place.image}`} alt={place.name} className="place-image" />
                    <div className="place-info">
                        <h2>{place.name}</h2>
                        <p>{place.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default aboutUs;

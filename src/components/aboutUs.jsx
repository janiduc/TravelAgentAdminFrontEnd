import React from 'react';
import SigiriyaPic from '../assets/Sigiriya.jpg';
import EllaPic from '../assets/Ella.jpg';
import GallePic from '../assets/Galle.jpeg';
import KandyPic from '../assets/Kandy.jpg';
import VideoClip from '../assets/video.mp4'; // Path to your video file
import '../styles/AboutUs.css'; // Assuming you have a CSS file for styling

const placesToVisit = [
    {
        name: 'Sigiriya',
        description: 'Sigiriya or Lion Rock is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.',
        image: SigiriyaPic
    },
    {
        name: 'Ella',
        description: 'Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres (120 mi) east of Colombo and is situated at an elevation of 1,041 metres (3,415 ft) above sea level.',
        image: EllaPic
    },
    {
        name: 'Galle',
        description: 'Galle is a city on the southwest coast of Sri Lanka. It’s known for Galle Fort, the fortified old city founded by Portuguese colonists in the 16th century.',
        image: GallePic
    },
    {
        name: 'Kandy',
        description: 'A city located in the central part of Sri Lanka, known for its picturesque lake and the Temple of the Tooth Relic, which houses a sacred tooth relic of the Buddha.',
        image: KandyPic
    },
];

const AboutUs = () => {
    return (
        <div className="places-container">
            {placesToVisit.map(place => (
                <div key={place.name} className="place-card">
                    <img src={place.image} alt={place.name} className="place-image" />
                    <div className="place-info">
                        <h2>{place.name}</h2>
                        <p>{place.description}</p>
                    </div>
                </div>
            ))}
            <video autoPlay loop muted className="video-clip">
                <source src={VideoClip} type="video/mp4" />
            </video>
        </div>
    );
};

export default AboutUs;

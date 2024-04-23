import React from 'react';
import UpdateGuideForm from './updateGuideForm';

const GuideList = ({ guides, onUpdate }) => {
    const handleUpdate = (id) => {
        // // Find the driver by id and pass it to the update form
        // const driver = drivers.find((driver) => driver._id === id);
        // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
        navigate('/updateGuideForm/id');
    };

    return (
        <div>
            {guides.map((guide) => (
                <div key={guide._id}>
                    <p>{guide.nameG}</p>
                    <p>{guide.addressG}</p>
                    <p>{guide.phoneG}</p>
                    <p>{guide.genderG}</p>
                    <button onClick={() => handleUpdate(guide._id)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default GuideList;

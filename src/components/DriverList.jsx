import React from 'react';
import UpdateDriverForm from './updateDriverForm';

const DriverList = ({ drivers, onUpdate }) => {
    const handleUpdate = (id) => {
        // // Find the driver by id and pass it to the update form
        // const driver = drivers.find((driver) => driver._id === id);
        // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
        navigate('/updateDriverForm/id');
    };

    return (
        <div>
            {drivers.map((driver) => (
                <div key={driver._id}>
                    <p>{driver.nameD}</p>
                    <p>{driver.addressD}</p>
                    <p>{driver.phoneD}</p>
                    <p>{driver.genderD}</p>
                    <button onClick={() => handleUpdate(driver._id)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default DriverList;

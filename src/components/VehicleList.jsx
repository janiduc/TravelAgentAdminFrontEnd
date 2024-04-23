import React from 'react';
import UpdateVehicleForm from './updateVehicleForm';

const VehicleList = ({ vehicles, onUpdate }) => {
    const handleUpdate = (id) => {
        // // Find the driver by id and pass it to the update form
        // const driver = drivers.find((driver) => driver._id === id);
        // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
        navigate('/updateVehicleForm/id');
    };

    return (
        <div>
            {drivers.map((vehicle) => (
                <div key={vehicle._id}>
                    <p>{vehicle.vehicleID}</p>
                    <p>{vehicle.vehicleType}</p>
                    <p>{vehicle.nameV}</p>
                    <button onClick={() => handleUpdate(vehicle._id)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default VehicleList;

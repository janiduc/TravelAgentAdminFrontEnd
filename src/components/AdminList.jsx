import React from 'react';
import UpdateAdminForm from './updateAdminForm';

const AdminList = ({ admins, onUpdate }) => {
    const handleUpdate = (id) => {
        // // Find the driver by id and pass it to the update form
        // const driver = drivers.find((driver) => driver._id === id);
        // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
        navigate('/updateAdminForm/id');
    };

    return (
        <div>
            {drivers.map((admin) => (
                <div key={admin._id}>
                    <p>{admin.adminnameA}</p>
                    <p>{admin.nameA}</p>
                    <button onClick={() => handleUpdate(admin._id)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default AdminList;

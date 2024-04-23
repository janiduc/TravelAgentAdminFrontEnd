import React from 'react';
import UpdateUserForm from './updateUserForm';

const UserList = ({ users, onUpdate }) => {
    const handleUpdate = (id) => {
        // // Find the driver by id and pass it to the update form
        // const driver = drivers.find((driver) => driver._id === id);
        // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
        navigate('/updateUserForm/id');
    };

    return (
        <div>
            {users.map((user) => (
                <div key={user._id}>
                    <p>{user.name}</p>
                    <p>{user.address}</p>
                    <p>{user.phone}</p>
                    <p>{user.gender}</p>
                    <button onClick={() => handleUpdate(user._id)}>Update</button>
                </div>
            ))}
        </div>
    );
};

export default UserList;

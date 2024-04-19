import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here, such as clearing local storage, etc.
    // For example, you can clear the authentication token:
    localStorage.removeItem('authToken');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div>
      <h1>Logout</h1>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

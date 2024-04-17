import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/AllAdmins.css';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [userId, name, username]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/users/getUsers`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data.user);
    } catch (error) {
      console.error('Error fetching User data:', error);
    } finally {
      setLoading(false);
    }
  };

  const data = useMemo(() => users, [users]);

  return (
    <div>
      <h3 className="section-title">All Users</h3>
      
      {loading && <div>Loading...</div>}
      <DataTable value={data} loading={loading} className="p-datatable-striped">
        <Column field="username" header="UserName" />
        <Column field="name" header="Name" />
        <Column
          body={(rowData) => (
            <Link to={`/userSpecific/${rowData._id}`} className="p-button p-button-text">
              View Details
            </Link>
          )}
        />
      </DataTable>
    </div>
  );
};

export default AllUsers;

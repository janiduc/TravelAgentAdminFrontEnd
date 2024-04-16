import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/AllAdmins.css';

const AllAdmins = () => {
  const [admins, setAdmins] = useState([]);
  const [adminId, setAdminId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [adminId, name, username]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/admins/getUsers`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAdmins(data.admin);
    } catch (error) {
      console.error('Error fetching Admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const data = useMemo(() => admins, [admins]);

  return (
    <div>
      <h3 className="section-title">All Admins</h3>
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-md-4">
          <InputText
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            placeholder="Search by Admin ID"
          />
        </div>
        <div className="p-col-12 p-md-4">
          <InputText
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Search by Admin username"
          />
        </div>
        <div className="p-col-12 p-md-4">
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search by Admin Name"
          />
        </div>
      </div>
      {loading && <div>Loading...</div>}
      <DataTable value={data} loading={loading} className="p-datatable-striped">
        <Column field="adminnameA" header="Name" />
        <Column field="nameA" header="Username" />
        <Column
          body={(rowData) => (
            <Link to={`/adminSpecific/${rowData._id}`} className="p-button p-button-text">
              View Details
            </Link>
          )}
        />
      </DataTable>
    </div>
  );
};

export default AllAdmins;

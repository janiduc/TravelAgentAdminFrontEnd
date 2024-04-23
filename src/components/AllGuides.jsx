import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/AllAdmins.css';

const AllGuides = () => {
  const [guides, setGuides] = useState([]);
  const [guideId, setGuideId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [guideId, name, username]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/guides/getUsers`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGuides(data.guide);
    } catch (error) {
      console.error('Error fetching Guide data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (id) => {
    // // Find the driver by id and pass it to the update form
    // const driver = drivers.find((driver) => driver._id === id);
    // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
    navigate('/updateGuideForm/id');
};

  const data = useMemo(() => guides, [guides]);

  return (
    <div>
      <h3 className="section-title">All Guides</h3>
      
      {loading && <div>Loading...</div>}
      <DataTable value={data} loading={loading} className="p-datatable-striped">
        <Column field="guidename" header="Name" />
        <Column field="nameG" header="Guidename" />
        <Column
          body={(rowData) => (<div>
            <Link to={`/guideSpecific/${rowData._id}`} className="p-button p-button-text">
              View Details
            </Link>
            <Link to={`/updateGuideForm/${rowData._id}`} className="p-button p-button-text">
              Update
            </Link>
            </div>
          )}
        />
      </DataTable>
    </div>
  );
};

export default AllGuides;

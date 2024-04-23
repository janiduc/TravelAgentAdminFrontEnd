import React, { useEffect, useState, useMemo } from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../styles/AllAdmins.css';

const AllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingId, setBookingId] = useState('');
  const [name, setName] = useState('');
  const [username, setBookingname] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [bookingId, name, username]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/bookings/getUsers`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBookings(data.booking);
    } catch (error) {
      console.error('Error fetching Booking data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = (id) => {
    // // Find the driver by id and pass it to the update form
    // const driver = drivers.find((driver) => driver._id === id);
    // return <UpdateDriverForm driver={driver} onUpdate={onUpdate} />;
    navigate('/updateBookingForm/id');
};

  const data = useMemo(() => bookings, [bookings]);

  return (
    <div>
      <h3 className="section-title">All Bookings</h3>
      
      {loading && <div>Loading...</div>}
      <DataTable value={data} loading={loading} className="p-datatable-striped">
        <Column field="userNameBooking" header="Username" />
        <Column field="startDate" header="BookingDate" />
        <Column
          body={(rowData) => (<div>
            <Link to={`/bookingSpecific/${rowData._id}`} className="p-button p-button-text">
              View Details
            </Link>
            <Link to={`/updateBookingForm/${rowData._id}`} className="p-button p-button-text">
              Update
            </Link>
            </div>
          )}
        />
      </DataTable>
    </div>
  );
};

export default AllBookings;

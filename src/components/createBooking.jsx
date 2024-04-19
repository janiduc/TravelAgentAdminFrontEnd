import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Calendar } from 'primereact/calendar';
import '../styles/createBooking.css';

const BookingSignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    Sdes: '',
    Edes: '',
    //password: '',
    Sdate: null,
    Edate: null,
    disten: '',
    Tcost: '',
    Vtype: '',
    Vdetail: '',
    Ddetail: '',
    Gdetail: '',
  });

  let navigate = useNavigate(); 

  const [submitted, setSubmitted] = useState(false);
  //const [confPassword, setconfPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userNameBooking = formData.name;
    const startingDes = formData.Sdes;
    const endingDes = formData.Edes;
    const OTPpassword = formData.password;
    const startDate = formData.Sdate;
    const endDate = formData.Edate;
    const distance = formData.disten;
    const totalCost = formData.Tcost;
    const vehicleType = formData.Vtype;
    const vehicleDetail = formData.Vdetail;
    const driverDetail = formData.Ddetail;
    const guideDetail = formData.Gdetail;
  
    try {
      if (
        userNameBooking &&
        startingDes &&
        endingDes &&
        startDate &&
        endDate &&
        distance &&
        totalCost &&
        vehicleType &&
        vehicleDetail &&
        driverDetail &&
        guideDetail
      ) {
        const response = await fetch("http://localhost:4000/bookings/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userNameBooking,
            startingDes,
            endingDes,
            startDate,
            endDate,
            distance,
            totalCost,
            vehicleType,
            vehicleDetail,
            driverDetail,
            guideDetail,
          }),
        });
        setSubmitted(false);
        navigate("/booking");
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Signup Error: ", error);
      setSubmitted(true);
    }
  };
  

  const generatePassword = () => {
    const password = Math.random().toString(36).slice(-8);
    setFormData({ ...formData, password });
  };

  return (
    <div className="login-container p-grid p-justify-center">
      <div className="p-col-12 p-md-6">
        <Card title="Sign-Up" className="login-card p-shadow-3 card">
          <form onSubmit={handleSubmit} className="p-fluid">
            <div className="p-field">
              <label htmlFor="username">UserName</label>
              <InputText
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>

            <div className="p-field">
              <label htmlFor="username">Starting Destination</label>
              <InputText
                id="Sdes"
                value={formData.Sdes}
                onChange={(e) => setFormData({ ...formData, Sdes: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">Ending Destination</label>
              <InputText
                id="Edes"
                value={formData.Edes}
                onChange={(e) => setFormData({ ...formData, Edes: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>

            <div className="p-field">
              <label htmlFor="password">OTP</label>
              <InputText
                id="password"
                //type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="p-inputtext-lg"
              />
              <Button
                label="Generate OTP"
                onClick={generatePassword}
                className="p-button-rounded p-button-sm p-button-info"
              />
            </div>
            
            <div className="p-field">
              <label htmlFor="Sdate">Starting Date</label>
              <Calendar
                id="Sdate"
                value={formData.Sdate}
                onChange={(e) => setFormData({ ...formData, Sdate: e.value })}
                className="p-inputtext-lg"
                showIcon
                dateFormat="yy-mm-dd"
                inputClassName="calendar-container"
              />
            </div>
            <div className="p-field">
              <label htmlFor="Edate">Ending Date</label>
              <Calendar
                id="Edate"
                value={formData.Edate}
                onChange={(e) => setFormData({ ...formData, Edate: e.value })}
                className="p-inputtext-lg"
                showIcon
                dateFormat="yy-mm-dd"
                inputClassName="calendar-container"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">Distance</label>
              <InputText
                id="disten"
                value={formData.disten}
                onChange={(e) => setFormData({ ...formData, disten: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">Total Cost</label>
              <InputText
                id="Tcost"
                value={formData.Tcost}
                onChange={(e) => setFormData({ ...formData, Tcost: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">Vehicle Type</label>
              <InputText
                id="Vtype"
                value={formData.Vtype}
                onChange={(e) => setFormData({ ...formData, Vtype: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">Vehicle Detail</label>
              <InputText
                id="Vdetail"
                value={formData.Vdetail}
                onChange={(e) => setFormData({ ...formData, Vdetail: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">Driver Detail</label>
              <InputText
                id="Ddetail"
                value={formData.Ddetail}
                onChange={(e) => setFormData({ ...formData, Ddetail: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>
            <div className="p-field">
              <label htmlFor="username">Guide Detail</label>
              <InputText
                id="Gdetail"
                value={formData.Gdetail}
                onChange={(e) => setFormData({ ...formData, Gdetail: e.target.value })}
                className="p-inputtext-lg"
              />
            </div>


            <div className="p-field">
              <Button
                label="SUBMIT"
                type="submit"
                className="p-button-rounded p-button-lg p-button-success"
              />
            </div>
          </form>
          {submitted && (
            <Message severity="error" text="Please fill in all details and try again." />
          )}
        </Card>
      </div>
    </div>
  );
};

export default BookingSignUpPage;
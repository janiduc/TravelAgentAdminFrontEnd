import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission, you can send the formData to backend or do any other actions here
  //   console.log('Form submitted:', formData);
  //   // Reset the form fields after submission
  //   setFormData({ name: '', email: '', message: '' });
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_axl8qog', 'template_28sqdor', form.current, {
          publicKey: 'mOWx1E3vsWnYBHFcE',
        })
        .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
        );
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Reach out to us!</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
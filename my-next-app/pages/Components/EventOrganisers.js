import React, { useState } from "react";
import { useRouter } from "next/router"; 
import styles from"@/styles/EventO.module.css"; 
import Link from "next/link";
import Navbar from "./Navbar";

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    organizerName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    venue: "",
    description: "",
    category: "",
    poster: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, poster: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Event Registered Successfully!");
  };

  return (
    <>
    
    <Navbar/>
    <div className={styles.registration_container}>

      <h2>Event Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label>Event Name</label>
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
        </div>

        <div className={styles.form_group} >
                         <label>Organizer Name</label>
          <input type="text" name="organizerName" value={formData.organizerName} onChange={handleChange} required />
        </div>

        <div className={styles.form_group}>
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className={styles.form_group}>
          <label>Contact Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className={styles.form_group}>
          <label>Event Date</label>
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
        </div>

        <div className={styles.form_group}>
          <label>Event Time</label>
          <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} required />
        </div>

        <div className={styles.form_group}>
          <label>Venue/Location</label>
          <input type="text" name="venue" value={formData.venue} onChange={handleChange} required />
        </div>

        <div className={styles.form_group}>
          <label>Event Description</label>
          <textarea name="description" rows="4" value={formData.description} onChange={handleChange} required></textarea>
        </div>

        <div className={styles.form_group}>
          <label>Event Category</label>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Cultural">Cultural</option>
            <option value="Technical">Technical</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <div className={styles.form_group}>
          <label>Upload Event Poster</label>
          <input type="file" name="poster" accept="image/*" onChange={handleFileChange} />
        </div>

        <div className={styles.form_group}>
          <label>Payment Details</label>
          <input type="number" name="payment" value={formData.eventPayment}  placeholder="In Ruppees" onChange={handleChange} required />
        </div>

        <button type="submit" className={styles.btn}>Register Now</button>
      </form>
    </div>
    </>
  );
};

export default EventRegistration;

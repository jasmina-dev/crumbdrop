import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./submitform.css";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    // Define your form fields here
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className="submit-hero">
        <h2 className="hero-header">crumbdrop</h2>
        <Link to="/">back home 🏡</Link>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Render your form fields here */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          ></input>
          <label for="school">Choose your school</label>
          <select id="school" name="school">
            <option value="user">Lafayette College</option>
            <option value="admin">University of Washington</option>
            <option value="guest">Lehigh University</option>
          </select>
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitForm;

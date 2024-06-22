import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./submitform.css";
import { fetchData, insertData } from "../api/api";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    school: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertData(formData);
  };

  return (
    <div>
      <div className="submit-hero">
        <h2 className="hero-header">crumbdrop</h2>
        <Link to="/">back home 🏡</Link>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></input>
          <label for="school">Choose your school</label>
          <select
            id="school"
            name="school"
            onChange={(e) =>
              setFormData({ ...formData, school: e.target.value })
            }
          >
            <option value="user">Lafayette College</option>
            <option value="admin">University of Washington</option>
            <option value="guest">Lehigh University</option>
          </select>
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitForm;

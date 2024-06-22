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
        <form>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title || ""}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          ></input>
          <label for="school">Choose your school</label>
          <select
            id="school"
            name="school"
            value={formData.school || ""}
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
            value={formData.description || ""}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></input>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitForm;

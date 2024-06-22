import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./submitform.css";
import { fetchData, insertData } from "../api/api";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    school: "Lafayette College",
    description: "",
    location: "",
  });

  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertData(formData);
      setMsg("yay! you submitted your leftovers. 🎉");
      clearForm();
    } catch (error) {
      setMsg("oops! something went wrong. 😢");
    }
  };

  const clearForm = () => {
    setFormData({
      title: "",
      school: "Lafayette College",
      description: "",
      location: "",
    });
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
            <option value="Lafayette College">Lafayette College</option>
            <option value="University of Washington">
              University of Washington
            </option>
            <option value="Lehigh University">Lehigh University</option>
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
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location || ""}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          ></input>
          <button id="submit-post-btn" onClick={handleSubmit} type="submit">
            Submit
          </button>
          {msg && <p>{msg}</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitForm;

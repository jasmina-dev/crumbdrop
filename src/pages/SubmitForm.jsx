import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./submitform.css";
import { fetchData, insertData } from "../api/api";
import photos from "../photos.js";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    school: "Lafayette College",
    description: "",
    location: "",
    imageurl: "",
  });

  const [msg, setMsg] = useState("");

  const getRandomImage = (title) => {
    let url = "";
    photos.map((photo) => {
      if (photo.title.toLowerCase().includes(title.toLowerCase())) {
        url = photo.url;
      }
    });

    if (url === "") {
      url = photos[9].url;
    }

    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = getRandomImage(formData.title);
      const dataToSubmit = { ...formData, imageurl: imageUrl };

      await insertData(dataToSubmit);
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
      imageurl: "",
    });
  };

  const schools = [
    "Lafayette College",
    "University of Washington",
    "Lehigh University",
  ];

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
            {schools.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { addSubmission } from "../Components/submissionSlice";

const SubmissionPage = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    description: "",
    coverImage: "",
    hackathonName: "",
    hackathonStartDate: "",
    hackathonEndDate: "",
    githubRepository: "",
  });

  function handleChange(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addSubmission(formData))
    alert('submission done')
  }

  

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="summary">Summary</label>
        <input
          id="summary"
          type="text"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description : </label>
        <input
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="cover">Cover Image : </label>
        <input
          id="cover"
          type="file"
          accept="image/*"
          name="coverImage"
          onChange={({ target: { files } }) => {
            if (files) {
              setImage(URL.createObjectURL(files[0]));
              setFormData((prevState) => {
                return {
                  ...prevState,
                  coverImage: URL.createObjectURL(files[0]),
                };
              });
            }
          }}
        />
        {image && <img src={image} />}
        <br/>
        <label htmlFor="hackathonName">Hackathon Name : </label>
        <input
          id="hackathonName"
          type="text"
          name="hackathonName"
          value={formData.hackathonName}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="startDate">Start Date :</label>
        <input
          type="date"
          id="startDate"
          name="hackathonStartDate"
          value={formData.hackathonStartDate}
          onChange={handleChange}
        />
        
        <label htmlFor="endDate">End Date :</label>
        <input
          type="date"
          id="endDate"
          name="hackathonEndDate"
          value={formData.hackathonEndDate}
          onChange={handleChange}
        />
        

        <br/>
        <label htmlFor="githubRepository">Github Repository : </label>
        <input
          id="githubRepository"
          type="text"
          name="githubRepository"
          value={formData.githubRepository}
          onChange={handleChange}
        />

        <button>Upload Submission</button>
      </form>
      <Link to = "/">back to home</Link>
    </div>
  );
};

export default SubmissionPage;

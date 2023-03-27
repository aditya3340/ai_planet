import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useDispatch } from "react-redux";
import { addSubmission } from "../Components/submissionSlice";
import { nanoid } from "nanoid";


const SubmissionPage = () => {
  const dispatch = useDispatch();
  const submissionId = nanoid()

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    summary: "",
    description: "",
    coverImage: "",
    hackathonName: "",
    hackathonStartDate: "",
    hackathonEndDate: "",
    githubRepository: "",
  });

  console.log(formData.coverImage)
  function handleChange(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        id: submissionId,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addSubmission(formData));
    alert("submission done");
  }

  return (
    <div>
      <Navbar />
      <div className="submission">
        <h1>New Hackathon Submission </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <br />
          <input
            className="inputs"
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="summary">Summary</label>
          <br />
          <input
            className="inputs"
            id="summary"
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
          <br />
          <label className="label" htmlFor="description">
            Description :
          </label>
          <br />
          <input
            className="inputs"
            id="description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <br />
          <label className="label" htmlFor="description">
            Cover Image
          </label>
          
          <div style={{color: "gray"}}>
          Minimum resolution: 360px  X 360px
          </div>
           <br/>
          <label htmlFor="cover" className="image-label">
          
            
            <input
              id="cover"
              type="file"
              accept="image/*"
              name="coverImage"
              className="image-input"
              onChange={({ target: { files } }) => {
                if (files) {
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      coverImage: URL.createObjectURL(files[0]),
                    };
                  });
                }
              }}
            />
            
          </label>
          {formData.coverImage !== '' && <p style={{color: "red"}}>Image Added</p>}
          <br />
          <label htmlFor="hackathonName">Hackathon Name : </label>
          <br />
          <input
            className="inputs"
            id="hackathonName"
            type="text"
            name="hackathonName"
            value={formData.hackathonName}
            onChange={handleChange}
          />

          <br />
          <div className="dates-label">
            <div className="d-div">
              <label htmlFor="startDate">Start Date :</label>
            </div>
            <div className="d-div">
              <label htmlFor="endDate">End Date :</label>
            </div>
          </div>
          <br />
          <div className="dates">
            <input
              className="date-inputs"
              type="date"
              id="startDate"
              name="hackathonStartDate"
              value={formData.hackathonStartDate}
              onChange={handleChange}
            />

            <input
              className="date-inputs"
              type="date"
              id="endDate"
              name="hackathonEndDate"
              value={formData.hackathonEndDate}
              onChange={handleChange}
            />
          </div>

          <br />
          <label htmlFor="githubRepository">Github Repository : </label>
          <br />
          <input
            className="inputs"
            id="githubRepository"
            type="text"
            name="githubRepository"
            value={formData.githubRepository}
            onChange={handleChange}
          />

          <button className="submit-btn">Upload Submission</button>
        </form>
        <Link to="/"><button className="submit-btn" style={{marginBottom : "10px", backgroundColor: "#44924C"}}>Home Page</button></Link>
      </div>
    </div>
  );
};

export default SubmissionPage;

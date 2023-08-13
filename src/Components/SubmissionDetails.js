import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { removeSubmission } from "./submissionSlice";

const SubmissionDetails = () => {
  const data = useSelector((state) => state.submissions.data);

  const { id } = useParams();

  const filteredArray = data.filter((item) => item.id === id);
 
  console.log(filteredArray);
  const dispatch = useDispatch();

  function handleDelete (idx) {
    dispatch(removeSubmission(idx))
  }

  return (
    <div>
      <Navbar />

      <div className="detail-hero">
        <div className="outer ">
          <div>
            <div className="innerOne">
              <div className="detail-image">
                <img src={filteredArray[0].coverImage} alt="cover" />
              </div>
              <h1>{filteredArray[0].title}</h1>
            </div>
            <p>{filteredArray[0].summary}</p>
          </div>

          <div className="interTwo">
            {/* for buttons */}
            <div className="detail-btns">
              <button>Edit</button>

              <button
                onClick={() => handleDelete(data[id])}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* description */}
      <div
        className="maxWidthDiv detail-header"
        style={{ justifyContent: "space-between" }}
      >
        <div style={{ maxWidth: "70%" }}>
          <h1>Description</h1>
          <p>{filteredArray[0].description}</p>
        </div>

        {/* hackaton other details */}
        <div>
          <h5>Hackaton</h5>
          <h4>{filteredArray[0].hackathonName}</h4>
          <p>
            {filteredArray[0].hackathonStartDate} -{" "}
            {filteredArray[0].hackathonEndDate}
          </p>

          <Link to={filteredArray[0].githubRepository}>
            <button className="other-btns">GitHub Repository</button>
          </Link>
          <button className="other-btns">Other links</button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetails;

import React, { useState } from "react";
import "./components.css";

const randomId = () => {
  let num = Math.random() * 1000;
  return num;
};

const deleteItem = (id) => {
  document.getElementById(id).remove();
};

const EducationalInfo = (props) => {
  const { onSubmit } = props;

  const [universityName, setUniversityName] = useState("");
  const [cityName, setCityName] = useState("");
  const [educationStart, setEducationStart] = useState("");
  const [educationEnd, setEducationEnd] = useState("");
  const [degree, setDegree] = useState("");
  const [educationDetails, setEducationDetails] = useState("");

  let handleUniversityNameChange = (e) => {
    let value = e.target.value;
    setUniversityName(value);
  };

  let handleCityNameChange = (e) => {
    let value = e.target.value;
    setCityName(value);
  };

  let handleEducationStartChange = (e) => {
    let value = e.target.value;
    setEducationStart(value);
  };

  let handleEducationEndChange = (e) => {
    let value = e.target.value;
    setEducationEnd(value);
  };

  let handleDegreeChange = (e) => {
    let value = e.target.value;
    setDegree(value);
  };

  let handleEducationDetailsChange = (e) => {
    let value = e.target.value;
    setEducationDetails(value);
  };

  let handleSubmit = (e) => {
    const formData = {
      universityName: universityName,
      cityName: cityName,
      educationStart: educationStart,
      educationEnd: educationEnd,
      degree: degree,
      educationDetails: educationDetails,
    };
    onSubmit(formData);
    e.preventDefault();
    let value = "";
    setUniversityName(value);
    setCityName(value);
    setEducationStart(value);
    setEducationEnd(value);
    setDegree(value);
    setEducationDetails(value);
  };

  return (
    <div className="inputDataEducational">
      <h1>
        <u>Educational Information</u>
      </h1>
      <form onSubmit={handleSubmit} id="educationalForm">
        <div className="containerUniCity">
          <div>
            <input
              id="university_entry"
              type="text"
              onChange={handleUniversityNameChange}
              required
              placeholder={"Please enter a university"}
              value={universityName}
            ></input>
          </div>
          <div>
            <input
              id="city_entry"
              type="text"
              onChange={handleCityNameChange}
              required
              placeholder={"Please enter a city"}
              value={cityName}
            ></input>
          </div>
        </div>
        <div className="containerYearsDegree">
          <div>
            <input
              id="start_date_entry"
              type="number"
              min="2000"
              max="2021"
              onChange={handleEducationStartChange}
              required
              placeholder={"Start Y"}
              value={educationStart}
            ></input>
          </div>
          <div>
            <input
              id="end_date_entry"
              type="number"
              onChange={handleEducationEndChange}
              required
              placeholder={"End Y"}
              min="2000"
              max="2040"
              value={educationEnd}
            ></input>
          </div>
          <div>
            <input
              id="degree_entry"
              type="text"
              onChange={handleDegreeChange}
              placeholder={"Please enter a major"}
              required
              value={degree}
            ></input>
          </div>
        </div>
        <div className="additionalEducationInfo">
          <textarea
            id="details_entry"
            onChange={handleEducationDetailsChange}
            className="textareaOne"
            placeholder={"Further details and achievements"}
            value={educationDetails}
          ></textarea>
        </div>
        <button id="addEducation" className="addBtn" type="submit">
          Add Education +
        </button>
      </form>
    </div>
  );
};

const EducationalInfoDisplay = (props) => {
  const { educationalExperience } = props;
  let educationalExperienceDuplicate = [...educationalExperience];
  return (
    <div>
      {educationalExperienceDuplicate.map((parts) => {
        let specialId = randomId();
        return (
          <div id={specialId} className="educationalInfoDisplay">
            <div className="cityAndUniversityFormat">
              <div className="universityDiv">
                <label>
                  <b>University:</b>
                </label>
                <input
                  type="text"
                  className="inputDisplayed"
                  placeholder={parts.universityName}
                ></input>
              </div>
              <div className="cityDiv">
                <label>
                  <b>City:</b>
                </label>
                <input
                  type="text"
                  className="inputDisplayed"
                  placeholder={parts.cityName}
                ></input>
              </div>
            </div>
            <div className="cityAndUniversityFormat">
              <div className="year_format">
                <label className="year_from_format">
                  <b>From:</b>
                </label>
                <input
                  type="number"
                  className="inputDisplayed"
                  placeholder={parts.educationStart}
                ></input>
              </div>
              <div className="year_format">
                <label className="year_from_format">
                  <b>To:</b>
                </label>
                <input
                  type="number"
                  className="inputDisplayed"
                  placeholder={parts.educationEnd}
                ></input>
              </div>
            </div>
            <div className="degree">
              <label>
                <b>Degree:</b>
              </label>
              <input
                type="text"
                className="inputDisplayed"
                placeholder={parts.degree}
                maxLength="10"
              ></input>
            </div>
            <div className="additionalEducationInfoTwo">
              <label>
                <b>Achievements and accomplishments</b>
              </label>
              <textarea
                id="texts"
                className="textareaTwo"
                placeholder={parts.educationDetails}
              ></textarea>
            </div>
            <button
              className="delete"
              onClick={() => {
                deleteItem(specialId);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

let updateEducation = (key, e, oldState, setState) => {
  let target = e.target;
  let newEducationalInfo = { ...oldState };
  newEducationalInfo[key] = target.value;
  console.log(newEducationalInfo);
  setState(newEducationalInfo);
};

export { EducationalInfo, EducationalInfoDisplay };

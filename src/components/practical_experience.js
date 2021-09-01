import React, { useState } from "react";
import "./components.css";

const randomId = () => {
  let num = Math.random() * 1000;
  return num;
};

const deleteItem = (id) => {
  document.getElementById(id).remove();
};

const WorkInfo = (props) => {
  const { addWork, previousWorkInfo, parentSetStateWork, onSubmit } = props;

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tasks, setWorkDetails] = useState("");

  const handleCompanyNameChange = (e) => {
    const value = e.target.value;
    setCompanyName(value);
  };

  const handlePositionChange = (e) => {
    const value = e.target.value;
    setPosition(value);
  };
  const handleStartDateChange = (e) => {
    const value = e.target.value;
    setStartDate(value);
  };
  const handleEndDateChange = (e) => {
    const value = e.target.value;
    setEndDate(value);
  };
  const handleTasksChange = (e) => {
    const value = e.target.value;
    setWorkDetails(value);
  };

  const handleSubmit = (e) => {
    const formData = {
      companyName: companyName,
      position: position,
      startDate: startDate,
      endDate: endDate,
      tasks: tasks,
    };
    onSubmit(formData);
    e.preventDefault();
  };

  console.log(companyName, position);
  return (
    <div className="inputDataWork">
      <h1>
        <u>Previous Work Information</u>
      </h1>
      <form onSubmit={handleSubmit} id="educationalForm">
        <div className="containerUniCity">
          <div>
            <input
              id="companyEntry"
              type="text"
              onChange={handleCompanyNameChange}
              value={companyName}
              placeholder={"Please enter company"}
            ></input>
          </div>
          <div>
            <input
              id="positionEntry"
              type="text"
              onChange={handlePositionChange}
              value={position}
              placeholder={"Please work title"}
            ></input>
          </div>
        </div>
        <div className="containerYearsDegree">
          <div>
            <input
              id="startDateWork"
              type="number"
              min="2000"
              max="2021"
              onChange={handleStartDateChange}
              required
              placeholder={"Start Y"}
            ></input>
          </div>
          <div>
            <input
              id="endDateWork"
              type="number"
              onChange={handleEndDateChange}
              required
              placeholder={"End Y"}
              min="2000"
              max="2040"
            ></input>
          </div>
        </div>
        <div className="additionalEducationInfo">
          <textarea
            id="workDetailsEntry"
            onChange={handleTasksChange}
            className="textareaOne"
            placeholder={"Please enter roles and responsibilities"}
          ></textarea>
        </div>
        <button id="addWorks" className="addBtn" type="submit">
          Add Work +
        </button>
      </form>
    </div>
  );
};

const WorkInfoDisplay = (props) => {
  const { workExperience } = props;
  let workExperienceDuplicate = [...workExperience];
  return (
    <div>
      {workExperienceDuplicate.map((parts) => {
        let specialId = randomId();
        return (
          <div id={specialId} className="educationalInfoDisplay">
            <div className="cityAndUniversityFormat">
              <div className="universityDiv">
                <label>
                  <b>Company:</b>
                </label>
                <input
                  type="text"
                  className="inputDisplayed"
                  placeholder={parts.companyName}
                ></input>
              </div>
              <div className="cityDiv">
                <label>
                  <b>Title:</b>
                </label>
                <input
                  type="text"
                  className="inputDisplayed"
                  placeholder={parts.position}
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
                  placeholder={parts.startDate}
                ></input>
              </div>
              <div className="year_format">
                <label className="year_from_format">
                  <b>To:</b>
                </label>
                <input
                  type="number"
                  className="inputDisplayed"
                  placeholder={parts.endDate}
                ></input>
              </div>
            </div>
            <div className="additionalEducationInfoThree">
              <label>
                <b>Roles and responsibilities</b>
              </label>
              <textarea
                id="texts"
                className="textareaTwo"
                placeholder={parts.tasks}
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

let updateWorkExperience = (key, e, oldState, setState) => {
  let target = e.target;
  let newWorkInfo = { ...oldState };
  newWorkInfo[key] = target.value;
  setState(newWorkInfo);
};

export { WorkInfo, WorkInfoDisplay };

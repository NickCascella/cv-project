import React from "react";
import "./components.css";

const randomId = () => {
  let num = Math.random() * 1000;
  return num;
};

const deleteItem = (id) => {
  // document.getElementById("texts").textContent = id.university;
  document.getElementById(id).remove();
};

const EducationalInfo = (props) => {
  const { addEducation, educational_info, parentSetStateEducational } = props;

  return (
    <div className="inputDataEducational">
      <h1>
        <u>Educational Information</u>
      </h1>
      <form onSubmit={addEducation} id="educationalForm">
        <div className="containerUniCity">
          <div>
            <input
              id="university_entry"
              type="text"
              onChange={(e) =>
                updateEducation(
                  "university",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              required
              placeholder={"Please enter a university"}
            ></input>
          </div>
          <div>
            <input
              id="city_entry"
              type="text"
              onChange={(e) =>
                updateEducation(
                  "city",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              required
              placeholder={"Please enter a city"}
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
              onChange={(e) =>
                updateEducation(
                  "from",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              required
              placeholder={"Start Y"}
            ></input>
          </div>
          <div>
            <input
              id="end_date_entry"
              type="number"
              onChange={(e) =>
                updateEducation(
                  "to",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              required
              placeholder={"End Y"}
              min="2000"
              max="2040"
            ></input>
          </div>
          <div>
            <input
              id="degree_entry"
              type="text"
              onChange={(e) =>
                updateEducation(
                  "degree",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              placeholder={"Please enter a major"}
              required
            ></input>
          </div>
        </div>
        <div className="additionalEducationInfo">
          <textarea
            id="details_entry"
            onChange={(e) =>
              updateEducation(
                "further_details",
                e,
                educational_info,
                parentSetStateEducational
              )
            }
            className="textareaOne"
            placeholder={"Further details and achievements"}
          ></textarea>
        </div>
        <button id="addEducation" type="submit">
          Add Education +
        </button>
      </form>
    </div>
  );
};

const EducationalInfoDisplay = (props) => {
  const { educational_experience, globalEdit } = props;
  let educationalExperienceDuplicate = [...educational_experience];
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
                  placeholder={parts.university}
                ></input>
              </div>
              <div className="cityDiv">
                <label>
                  <b>City:</b>
                </label>
                <input
                  type="text"
                  className="inputDisplayed"
                  placeholder={parts.city}
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
                  placeholder={parts.from}
                ></input>
              </div>
              <div className="year_format">
                <label className="year_from_format">
                  <b>To:</b>
                </label>
                <input
                  type="number"
                  className="inputDisplayed"
                  placeholder={parts.to}
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
                placeholder={parts.further_details}
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

let edit = (e, obj) => {
  console.log(e.target.value);
  e.target.value = "";
};

let updateEducation = (key, e, oldState, setState) => {
  console.log(e.target);
  let target = e.target;
  let newEducationalInfo = { ...oldState };
  newEducationalInfo[key] = target.value;
  setState(newEducationalInfo);
};

export { EducationalInfo, EducationalInfoDisplay };

import React from "react";
import "./components.css";

const randomId = () => {
  let num = Math.random() * 1000;
  return num;
};

const deleteItem = (id) => {
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
            <input
              type="text"
              className="test"
              placeholder={parts.university}
            ></input>
            <div contentEditable="true">{parts.university}</div>
            <div contentEditable="true">{parts.city}</div>
            <div className="year_format">
              <div className="year_from_format">From:</div>
              <div contentEditable="true">{parts.from}</div>
            </div>
            <div className="year_format">
              <div className="year_from_format">To:</div>
              <div contentEditable="true">{parts.to}</div>
            </div>
            <div contentEditable="true">{parts.degree}</div>
            <div contentEditable="true">{parts.further_details}</div>
            <button
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

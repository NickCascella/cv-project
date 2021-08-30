import React from "react";
import "./components.css";

const randomId = () => {
  let num = Math.random() * 1000;
  return num;
};

const deleteItem = (id) => {
  document.getElementById(id).remove();
};

const workInfo = (props) => {
  const {
    updateEducation,
    addEducation,
    educational_info,
    parentSetStateEducational,
  } = props;

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
              onKeyDown={(e) =>
                updateEducations(
                  "university",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              placeholder={"Please enter a university"}
            ></input>
          </div>
          <div>
            <input
              id="city_entry"
              type="text"
              onKeyDown={(e) =>
                updateEducations(
                  "city",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
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
              onKeyDown={(e) =>
                updateEducations(
                  "from",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              placeholder={"Start Y"}
              maxLength="4"
            ></input>
          </div>
          <div>
            <input
              id="end_date_entry"
              type="number"
              onKeyDown={(e) =>
                updateEducations(
                  "to",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              placeholder={"End Y"}
              min="2000"
              max="2021"
            ></input>
          </div>
          <div>
            <input
              id="degree_entry"
              type="text"
              onKeyDown={(e) =>
                updateEducations(
                  "degree",
                  e,
                  educational_info,
                  parentSetStateEducational
                )
              }
              placeholder={"Please enter a major"}
            ></input>
          </div>
        </div>
        <div className="additionalEducationInfo">
          <textarea
            id="details_entry"
            onKeyDown={(e) =>
              updateEducations(
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
  const { educational_experience } = props;
  return (
    <div>
      {educational_experience.map((parts) => {
        let specialId = randomId();
        return (
          <div id={specialId} className="educationalInfoDisplay">
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

let updateEducations = (key, e, oldState, setState) => {
  let target = e.target;
  let newEducationalInfo = { ...oldState };
  newEducationalInfo[key] = target.value;
  setState(newEducationalInfo);
};

export { EducationalInfo, EducationalInfoDisplay };

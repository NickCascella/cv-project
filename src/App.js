import "./App.css";
import React, { useState } from "react";
import { GeneralInfo, GeneralInfoDisplay } from "./components/general_info";
import {
  EducationalInfo,
  EducationalInfoDisplay,
} from "./components/educational_experience";
import { WorkInfo, WorkInfoDisplay } from "./components/practical_experience";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [educationalExperience, setEducationalExperience] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  const handleWorkInfoSubmit = (formData) => {
    console.log(formData);
    setWorkExperience(workExperience.concat(formData));
  };

  const handleEducationInfoSubmit = (formData) => {
    console.log(formData);
    setEducationalExperience(educationalExperience.concat(formData));
  };

  return (
    <div>
      <header></header>
      <body>
        <div id="inputData">
          <GeneralInfo
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
          />
          <EducationalInfo onSubmit={handleEducationInfoSubmit} />
          <WorkInfo onSubmit={handleWorkInfoSubmit} />
        </div>
        <div id="outputData">
          <GeneralInfoDisplay
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
          />
          <div className="educationTitle">
            <b>
              <u>Education</u>
            </b>
          </div>
          <EducationalInfoDisplay
            educationalExperience={educationalExperience}
          />
          <div className="educationTitle">
            <b>
              <u>Work Expereince</u>
            </b>
          </div>
          <WorkInfoDisplay workExperience={workExperience} />
        </div>
      </body>
    </div>
  );
};

export default App;

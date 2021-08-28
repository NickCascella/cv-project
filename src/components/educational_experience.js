import React from "react";

const EducationalInfo = (props) => {
  const { updateEducation, educational_info } = props;

  return (
    <div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => updateEducation("university", e)}
          placeholder={educational_info.university}
        ></input>
      </div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => updateEducation("city", e)}
          placeholder={educational_info.city}
        ></input>
      </div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => updateEducation("from", e)}
          placeholder={educational_info.from}
        ></input>
      </div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => updateEducation("to", e)}
          placeholder={educational_info.to}
        ></input>
      </div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => updateEducation("degree", e)}
          placeholder={educational_info.degree}
        ></input>
      </div>
      <div>
        <textarea
          onKeyDown={(e) => updateEducation("further_details", e)}
          placeholder={educational_info.further_details}
        ></textarea>
      </div>
      <button>Add Education +</button>
      <div>
        <li>{educational_info.university}</li>
        <li>{educational_info.city}</li>
        <li>{educational_info.from}</li>
        <li>{educational_info.to}</li>
        <li>{educational_info.degree}</li>
        <li>{educational_info.further_details}</li>
      </div>
    </div>
  );
};

export { EducationalInfo };

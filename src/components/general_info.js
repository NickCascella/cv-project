import React from "react";

const GeneralInfo = (props) => {
  const { general_info, changeInfo } = props;

  return (
    <div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => changeInfo("first_name", e)}
          placeholder={general_info.first_name}
        ></input>
      </div>
      <div>
        <input
          type="text"
          onKeyDown={(e) => changeInfo("last_name", e)}
          placeholder={general_info.last_name}
        ></input>
      </div>
      <div>
        <input
          type="email"
          onKeyDown={(e) => changeInfo("email", e)}
          placeholder={general_info.email}
        ></input>
      </div>
      <div>
        <input
          type="tel"
          onKeyDown={(e) => changeInfo("phone_number", e)}
          placeholder={general_info.first_name}
        ></input>
      </div>
      <div>
        <li>{general_info.first_name}</li>
        <li>{general_info.last_name}</li>
        <li>{general_info.email}</li>
        <li>{general_info.phone_number}</li>
      </div>
    </div>
  );
};

export { GeneralInfo };

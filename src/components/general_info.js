import React from "react";

const GeneralInfo = (props) => {
  const { general_info, parentSetState } = props;

  return (
    <div className="inputDataGeneral">
      <h1>
        <u>General Information</u>
      </h1>
      <form>
        <div className="containerFLName">
          <div>
            <input
              type="text"
              onChange={(e) =>
                changeGeneralInfoDisplay(
                  "first_name",
                  e,
                  general_info,
                  parentSetState
                )
              }
              placeholder="First Name"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) =>
                changeGeneralInfoDisplay(
                  "last_name",
                  e,
                  general_info,
                  parentSetState
                )
              }
              placeholder="Last Name"
              required
            ></input>
          </div>
        </div>
        <div className="containerEmailTel">
          <div>
            <input
              type="email"
              onChange={(e) =>
                changeGeneralInfoDisplay(
                  "email",
                  e,
                  general_info,
                  parentSetState
                )
              }
              placeholder="example@gmail.com"
              required
            ></input>
          </div>
          <div>
            <input
              type="tel"
              onChange={(e) =>
                changeGeneralInfoDisplay(
                  "phone_number",
                  e,
                  general_info,
                  parentSetState
                )
              }
              placeholder="XXX-XXX-XXXX"
              required
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

const GeneralInfoDisplay = (props) => {
  const { general_info } = props;
  return (
    <div className="generalInfoDisplay">
      <div>{general_info.first_name}</div>
      <div>{general_info.last_name}</div>
      <div>{general_info.email}</div>
      <div>{general_info.phone_number}</div>
    </div>
  );
};

const changeGeneralInfoDisplay = (key, e, general_info, parentSetState) => {
  let target = e.target;
  let newGeneralInfo = { ...general_info };
  newGeneralInfo[key] = target.value;
  parentSetState(newGeneralInfo);
};

export { GeneralInfo, GeneralInfoDisplay, changeGeneralInfoDisplay };

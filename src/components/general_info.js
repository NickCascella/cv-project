import React from "react";

const GeneralInfo = (props) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setEmail,
  } = props;

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
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              required
            ></input>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              required
            ></input>
          </div>
        </div>
        <div className="containerEmailTel">
          <div>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              required
            ></input>
          </div>
          <div>
            <input
              type="tel"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              required
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

const GeneralInfoDisplay = (props) => {
  const { firstName, lastName, phoneNumber, email } = props;
  return (
    <div className="generalInfoDisplay">
      <input
        type="text"
        placeholder="First Name"
        className="inputDisplayedGeneral"
        value={firstName}
      ></input>
      <input
        type="text"
        placeholder="Last Name"
        className="inputDisplayedGeneral"
        value={lastName}
      ></input>
      <input
        type="text"
        placeholder="example@gmail.com"
        className="inputDisplayedGeneral"
        value={email}
      ></input>
      <input
        type="text"
        placeholder="Phone Number"
        className="inputDisplayedGeneral"
        value={phoneNumber}
      ></input>
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

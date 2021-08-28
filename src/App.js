import "./App.css";
import { Component } from "react/cjs/react.production.min";
import { GeneralInfo } from "./components/general_info";
import { EducationalInfo } from "./components/educational_experience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      general_info: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        phone_number: "xxx-xxx-xxxx",
      },
      educational_info: {
        university: "University",
        city: "City",
        from: "YYYY",
        to: "YYYY",
        degree: "degree or stream",
        further_details: "Further descriptions and acheivements",
      },
      educational_experience: [],
    };
    this.changeGeneralInfo = this.changeGeneralInfo.bind(this);
    this.updateEducation = this.updateEducation.bind(this);
    this.addEducation = this.updateEducation.bind(this);
  }
  changeGeneralInfo = (key, e) => {
    let target = e.target;
    let gInfo = this.state.general_info;
    let arrayGeneral = [];
    arrayGeneral.push(
      gInfo.first_name,
      gInfo.last_name,
      gInfo.email,
      gInfo.phone_number
    );
    for (let i = 0; i < arrayGeneral.length; i++) {
      if (e.key === "Enter") {
        let newGeneralInfo = { ...gInfo };
        newGeneralInfo[key] = target.value;
        this.setState({
          general_info: newGeneralInfo,
        });
        e.target.style.border = "none";
      }
    }
  };

  updateEducation = (key, e) => {
    let target = e.target;
    let eInfo = this.state.educational_info;
    for (let i = 0; i < 6; i++) {
      if (e.key === "Enter") {
        let newEducationalInfo = { ...eInfo };
        newEducationalInfo[key] = target.value;
        this.setState({
          educational_info: newEducationalInfo,
        });
        e.target.style.border = "none";
      }
    }
  };

  addEducation = () => {
    let educationObjCopy = { ...this.state.educational_info };
    let newEducationEntries = [];
  };

  render() {
    const { general_info, educational_info } = this.state;
    return (
      <div>
        <header>
          <p>This is your CV</p>
        </header>
        <GeneralInfo
          general_info={general_info}
          changeInfo={this.changeGeneralInfo}
        />
        <EducationalInfo
          addEducation={this.addEducation}
          updateEducation={this.updateEducation}
          educational_info={educational_info}
        />
      </div>
    );
  }
}

export default App;

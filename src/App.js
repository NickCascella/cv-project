import "./App.css";
import { Component } from "react/cjs/react.production.min";
import { GeneralInfo, GeneralInfoDisplay } from "./components/general_info";
import {
  EducationalInfo,
  EducationalInfoDisplay,
} from "./components/educational_experience";

class App extends Component {
  constructor() {
    super();

    this.state = {
      globalEdit: "",
      general_info: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        phone_number: "Phone Number",
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
      previousWorkInfo: {
        companyName: "",
        position: "",
        tasks: [],
        startDate: "",
        endDate: "",
      },
      workExperience: [],
    };
    this.parentSetStateGeneral = this.parentSetStateGeneral.bind(this);
    this.parentSetStateEducational = this.parentSetStateEducational.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  parentSetStateGeneral = (set) => {
    this.setState({
      general_info: set,
    });
  };

  parentSetStateEducational = (set) => {
    this.setState({
      educational_info: set,
    });
  };

  addEducation = (e) => {
    let educationObjCopy = { ...this.state.educational_info };
    this.setState({
      educational_experience:
        this.state.educational_experience.concat(educationObjCopy),
      educational_info: {
        university: "University",
        city: "City",
        from: "YYYY",
        to: "YYYY",
        degree: "degree or stream",
        further_details: "Further descriptions and acheivements",
      },
    });
    document.getElementById("university_entry").value = "";
    document.getElementById("city_entry").value = "";
    document.getElementById("start_date_entry").value = "";
    document.getElementById("end_date_entry").value = "";
    document.getElementById("degree_entry").value = "";
    document.getElementById("details_entry").value = "";
    e.preventDefault();
  };

  render() {
    const {
      general_info,
      educational_info,
      educational_experience,
      globalEdit,
    } = this.state;
    return (
      <div>
        <header></header>
        <body>
          <div id="inputData">
            <GeneralInfo
              general_info={general_info}
              parentSetState={this.parentSetStateGeneral}
            />
            <EducationalInfo
              addEducation={this.addEducation}
              parentSetStateEducational={this.parentSetStateEducational}
              educational_info={educational_info}
              educational_experience={educational_experience}
            />
          </div>
          <div id="outputData">
            <GeneralInfoDisplay general_info={general_info} />
            <div className="educationTitle">
              <b>
                <u>Education</u>
              </b>
            </div>
            <EducationalInfoDisplay
              educational_experience={educational_experience}
              globalEdit={globalEdit}
            />
          </div>
        </body>
      </div>
    );
  }
}

export default App;

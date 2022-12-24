import { useState } from "react";
import "./JobFilter.css";

const JobFilter = (props) => {
  const {onSearch} = props
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const onClickSearch = (e) => {
    e.preventDefault()
    onSearch({
      location : location,
      description : description
    })
  }
  return (
    <div className="job-filter-container">
      <form onSubmit={onClickSearch} >
        <div className="job-filter">
          <label htmlFor={"job-description"}>Job Description</label>
        <input
            onChange={onChangeDescription}
            type={"text"}
            id="job-description"
            placeholder="Search Job"
          />
        </div>
        <div className="job-filter">
          <label htmlFor={"job-description"}>Location</label>
          <input
            type={"text"}
            onChange={onChangeLocation}
            id="job-description"
            placeholder="Search location"
          />
        </div>
        <div className="job-filter-check">
          <input type={"checkbox"} id={"checked-fulltime"} />
          <label htmlFor={"checked-fulltime"}>Fulltime</label>
        </div>
        <div>
          <input className="button" type={"submit"} value={"search"} />
        </div>
      </form>
    </div>
  );
};

export default JobFilter;

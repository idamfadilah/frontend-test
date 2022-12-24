import "./JobBar.css";
const JobBar = (props) => {
  const { title, created_at, location, company, type } = props;
  return (
    <div className="job-bar-container">
      <div className="left">
        <p className="job-bar-title">{title}</p>
        <p>
          {company} - {type}
        </p>
      </div>
      <div className="right">
        <p>{location}</p>
        <p>{created_at}</p>
      </div>
      <p></p>
    </div>
  );
};

export default JobBar;

import { Outlet } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";
import "./Job.css";
const Job = () => {
  return (
    <>
      <Navigation />
      <div className="job-container">
        <Outlet />
      </div>
    </>
  );
};

export default Job;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobDetail } from "../../api/job";
import "./JobDetail.css";
import img from "../../img/company.png";

const JobDetail = () => {
  const [job, setJob] = useState({});
  const params = useParams();
  const fetchJobDetail = async (jobId) => {
    const JobDetail = await getJobDetail(jobId);
    setJob(JobDetail);
    console.log(JobDetail);
  };

  useEffect(() => {
    const { jobId } = params;
    fetchJobDetail(jobId);
  }, []);

  return (
    <div className="job-detail-container">
      <img className="logo" src={job.img} />
      <div>
        <h1>{job.title}</h1>
        <h5>{job.company}</h5>
      </div>
      <div>
        <button className="button">Apply now</button>
      </div>
      <div>
        <h3>Job description :</h3>
        <p dangerouslySetInnerHTML={{ __html: job.description }} />
      </div>
      <br></br>
    </div>
  );
};
export default JobDetail;

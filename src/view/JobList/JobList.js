import { useEffect, useState, useTransition } from "react";
import { Link } from "react-router-dom";
import { getJobList } from "../../api/job";
import JobBar from "../../component/JobBar/JobBar.js";
import JobFilter from "../../component/JobFilter/JobFilter";
const PAGE_LENGTH = 10;

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const [page, setPage] = useState(1);
  const [jobCount, setJobCount] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const fetchJob = async (page) => {
    setJobList([
      ...jobList,
      ...(await getJobList(page, location, description)),
    ]);
  };

  const fetchJobCount = async () => {
    setJobCount(
      await getJobList(0, location, description).then((result) => result.length)
    );
  };

  useEffect(() => {
    startTransition(() => {
      fetchJob(page);
      fetchJobCount();
    });
  }, [location, description]);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if(jobCount<=10) return
    const onScroll = async () => {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        setPage(page + 1);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [jobList]);

  useEffect(() => {
    startTransition(() => {
      fetchJob(page, location, description);
    });
  }, [page]);

  const onClickSearch = (data) => {
    const { location, description } = data;
    setPage(1);
    setJobList([]);
    setJobCount(0);
    setLocation(location);
    setDescription(description);
  };

  return (
    <>
      <JobFilter onSearch={onClickSearch} />
      <>{jobCount + " Jobs"}</>
      {jobList.map((job) => {
        if (!job) return;
        const { id, title, created_at, location, company, type } = job;
        return (
          <Link className="link" to={`/detail/${job.id}`}>
            <JobBar
              key={id}
              title={title}
              created_at={created_at}
              location={location}
              company={company}
              type={type}
            />
          </Link>
        );
      })}
      {/* {!isPending &&
        (PAGE_LENGTH * (page - 1) > jobCount ? <>Thats all</> : <>Loading..</>)}
      {console.log(PAGE_LENGTH * page)} */}
    </>
  );
};
export default JobList;

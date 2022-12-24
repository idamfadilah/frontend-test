import logo from "./logo.svg";
import "./App.css";
import JobList from "./view/JobList/JobList";
import { useEffect } from "react";
import JobDetail from "./view/JobDetail/JobDetail";
import Job from "./page/Job/Job";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={"job"} path={""} element={<Job />}>
          <Route key={"list"} path={""} element={<JobList />} />
          <Route key={"detail"} path={"/detail/:jobId"} element={<JobDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

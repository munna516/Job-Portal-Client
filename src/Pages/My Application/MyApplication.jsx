import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Auth Context/AuthContext";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);
  return (
    <div>
      <h1 className="font-bold text-center text-3xl my-10">My Applications ({jobs.length})</h1>
    </div>
  );
};

export default MyApplication;

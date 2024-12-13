import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Auth Context/AuthContext";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [myPostedJobs, setMyPostedJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPostedJobs(data);
      });
  }, []);
  return (
    <div className="text-4xl my-7 text-center font-bold">
      My posted jobs({myPostedJobs.length})
    </div>
  );
};

export default MyPostedJobs;

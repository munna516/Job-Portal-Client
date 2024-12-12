import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, applicationDeadline } = useLoaderData();
  return (
    <div className="flex flex-col justify-center items-center m-10 space-y-4">
      <h1 className="text-3xl font-bold">Apply role {title}</h1>
      <h1>Company : {company}</h1>
      <h1>Deadline : {applicationDeadline}</h1>
      <Link to={`/apply-jobs/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;

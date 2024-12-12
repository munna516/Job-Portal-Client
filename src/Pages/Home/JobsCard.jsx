import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    company_logo,
    company,
    location,
    description,
    requirements,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <div className="flex gap-5">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h3 className="text-2xl">{company}</h3>
          <h4 className="flex items-center gap-1 text-gray-400">
            <MdLocationOn />
            {location}
          </h4>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold text-xl">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {requirements.map((skill) => (
            <p className="border rounded-md text-center px-3 py-2 hover:text-blue-400 hover:bg-gray-200">
              {skill}
            </p>
          ))}
        </div>
        <div className="card-actions justify-end mt-8 items-center">
          <p className="font-semibold">
            Salary : {salaryRange.min} - {salaryRange.max}{" "}
            {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;

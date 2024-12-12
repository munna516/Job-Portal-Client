import { useContext } from "react";
import AuthContext from "../../Context/Auth Context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ApplyJobs = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams;
  const navigate = useNavigate();
  const handleApplyJobs = (e) => {
    e.preventDefault();
    const linkedin = e.target.LinkedIn.value;
    const github = e.target.Github.value;
    const resume = e.target.Resume.value;

    const application = {
      job_id: id,
      applicant_email: user?.email,
      linkedin,
      github,
      resume,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Application Successful",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/my-application");
        }
      });
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card w-full max-w-lg shrink-0 p-10">
          <h1 className="text-4xl font-bold text-center">Apply Jobs</h1>
          <form onSubmit={handleApplyJobs} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">LinkedIn</span>
              </label>
              <input
                name="LinkedIn"
                type="url"
                placeholder="LinkedIn url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Github</span>
              </label>
              <input
                name="Github"
                type="url"
                placeholder="Github url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Resume</span>
              </label>
              <input
                name="Resume"
                type="url"
                placeholder="Resume url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyJobs;

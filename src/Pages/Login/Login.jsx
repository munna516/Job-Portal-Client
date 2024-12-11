import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useContext, useState } from "react";
import AuthContext from "../../Context/Auth Context/AuthContext";
import GoogleLogin from "../Shared/GoogleLogin";

const Login = () => {
  const { userLogIn, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  //   Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogIn(email, password)
      .then((result) => {
        setUser(result?.user);
        // successfulToast("Login successfull");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        // errorToast("Invalid email or password")
      });
  };
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
          <h1 className="text-2xl font-bold text-center">
            Login to your account
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-lg absolute top-12 right-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <Link
                  href="#"
                  className="label-text-alt link link-hover text-blue-500 font-semibold"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <GoogleLogin></GoogleLogin>

          <h1 className="text-center">
            Don't have account?{"  "}
            <Link className="text-blue-400 font-bold" to="/register">
              Register
            </Link>{" "}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;

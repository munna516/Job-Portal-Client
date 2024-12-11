import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import registerLottieData from "../../assets/Lottie/RegisterLottie.json";
import AuthContext from "../../Context/Auth Context/AuthContext";
import GoogleLogin from "../Shared/GoogleLogin";

const Register = () => {
  const navigate = useNavigate();
  const { user, createUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Login Form
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setErrorMessage("password should be 6 characters");
      return;
    }
    const regularExp = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regularExp.test(password)) {
      setErrorMessage("must have uppercase & lowercase");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(user);
        setUser(result?.user);
      })
      .catch((error) => {
        console.log(error);
        // errorToast("Email already use")
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-7">
          <h1 className="text-2xl font-bold text-center">Register a account</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
              {errorMessage && (
                <p className="mt-2 text-red-400 font-bold">{errorMessage}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <GoogleLogin></GoogleLogin>
          <h1 className="text-center">
            Already have account?{" "}
            <Link className="text-blue-400 font-bold" to="/login">
              Login
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;

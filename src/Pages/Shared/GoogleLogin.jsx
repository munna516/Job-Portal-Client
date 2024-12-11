import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../Context/Auth Context/AuthContext";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex w-full flex-col border-opacity-50">
        <div className="divider mt-0 mb-5">OR</div>
      </div>
      <div className="text-center mb-5 px-8">
        <button onClick={handleGoogleLogin} className="btn btn-primary w-full">
          Sign Up With{" "}
          <span className="text-xl text-white">
            <FcGoogle />
          </span>
        </button>
      </div>
    </>
  );
};

export default GoogleLogin;

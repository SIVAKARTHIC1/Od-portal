import { Link } from "react-router-dom";
import { logoDark } from "../../assets/index";
import { useGoogleLogin } from "@react-oauth/google";

const LoginForm: React.FC = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (err) => console.log(err),
  });

  return (
    <div className="bg-gray-800 text-gray-300 p-10 rounded-md shadow-lg max-w-sm w-full">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-xl  mb-4">Welcome Back!</h1>
        <img
          src={logoDark}
          alt="Bannari Amman Institute of Technology Logo"
          className="mb-4"
        />
        <Link
          onClick={() => login()}
          className="bg-blue-500 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-600 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none text-center"
          to={""}
        >
          Google Sign In
        </Link>
        <p className="text-gray-400 mt-4 text-sm text-center">
          Sign in with your BIT account
        </p>
      </div>
    </div>
  );
};

export default LoginForm;

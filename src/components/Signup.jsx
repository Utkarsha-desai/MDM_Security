import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Please enter a valid email";
    if (!password.trim()) newErrors.password = "Please enter a password";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Signup successful");
      navigate("/"); // redirect to login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-xl w-[450px] p-10 space-y-8">
        <h2 className="text-3xl font-semibold text-center">Create an Account</h2>

        <button className="w-full flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-gray-100">
          <FcGoogle className="text-xl" />
          <span>Sign up with Google</span>
        </button>

        <div className="relative text-center ">
          <hr className="my-4 border-gray-300" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-gray-500">OR</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <div className="relative ">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}

          </div>

          <div className="space-y-1">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 ">
                <FaLock />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
              />
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}

          </div>


          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>

        <div className="text-center text-xs text-gray-500">
          <p>
            <a href="#" className="hover:underline">Terms of Use</a> |{" "}
            <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

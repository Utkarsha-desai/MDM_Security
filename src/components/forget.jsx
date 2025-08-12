import { useState } from "react";
import { FaEye, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Forgotpassword() {
  const navigate = useNavigate();
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    

    if (!newPassword.trim()) {
      newErrors.newPassword = "Please enter a new password";
    } else if (!validatePassword(newPassword)) {
      newErrors.newPassword = "Password must be at least 8 characters, include a number, uppercase letter, and special character.";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Password reset successful");
      navigate("/Login"); // redirect to login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-xl  w-[500] p-10 space-y-8">
        <h2 className="text-2xl font-semibold text-center">Reset Your Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">


          {/* New Password */}
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.newPassword && <p className="text-sm text-red-500 mt-1">{errors.newPassword}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>

        <div className="text-center text-sm">
          Back to login?{" "}
          <button
            onClick={() => navigate("/Login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

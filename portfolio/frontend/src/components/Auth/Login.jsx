import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import url from "../../url/url.js";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null); // ✅ new user state
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/users/login`, formData, {
        withCredentials: true,
      });

      setUser(response.data); // ✅ storing user response

      setSuccess("Login Successful.");

      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 1500);
    } catch (error) {
      toast.error(error.response?.data?.message, {
        position: "top-right",
        autoClose: 2000,
        fontSize: "18px",
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-180px)] flex items-center justify-center bg-gray-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl"
      >
        <h2 className="text-5xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="text-3xl block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full text-2xl px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-3xl block mb-1 font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border text-2xl rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-6 top-3 text-2xl text-blue-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full text-3xl bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200"
        >
          Login
        </button>
        <h1 className="text-center text-green-500 text-2xl my-2">{success}</h1>
      </form>

      {/* Toast container */}
      <ToastContainer style={{ fontSize: "17px" }} />
    </div>
  );
};

export default Login;

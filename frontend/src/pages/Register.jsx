import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "instructor",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post(
        "/auth/register",
        formData
      );

      alert(response.data.message);

      navigate("/");
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      
      <h1 className="text-3xl font-bold text-center text-slate-800 mb-2">
        Create Account
      </h1>

      <p className="text-center text-slate-500 mb-8">
        Register to continue
      </p>

      <form
        onSubmit={submitHandler}
        className="space-y-5"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={changeHandler}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="instructor">
              Instructor
            </option>

            <option value="admin">
              Admin
            </option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition duration-200 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <p className="text-center text-sm text-slate-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  </div>
);
};

export default Register;
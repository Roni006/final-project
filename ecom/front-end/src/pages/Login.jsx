import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";

const Login = () => {
  const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "rameem.me@gmail.com",
//     password: "123456",
//   });
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
            email, password
        }
      );
      console.log(res);
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/profile");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Login failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-[420px] w-full">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h1 className="text-3xl font-semibold text-slate-900 text-center">
            Sign in
          </h1>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">

            {error && (
              <p className="text-red-500 text-sm text-center">
                {error}
              </p>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={email}
                // onChange={handleChange}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm outline-blue-600"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={password}
                // onChange={handleChange}
                onChange={e => setPassword(e.target.value)}
                className="w-full border border-slate-300 rounded-md px-4 py-3 text-sm outline-blue-600"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 text-sm font-medium rounded-md text-white bg-slate-800 hover:bg-slate-900 transition disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-sm text-slate-600 text-center">
              Don&apos;t have an account?
              <Link
                to="/register"
                className="ml-1 text-blue-600 font-medium hover:underline"
              >
                Register here
              </Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
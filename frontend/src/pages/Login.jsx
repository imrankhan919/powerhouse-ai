import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (isError && message) {
      toast.error(message);
    }
  }, [user, message, isError]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[90vh] p-10">
      <div className="border border-gray-200 p-4">
        <h1 className="text-center text-2xl font-semibold">Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="border w-full my-2 p-2 placeholder:text-sm"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="border w-full my-2 p-2 placeholder:text-sm"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="duration-200  my-2 bg-black py-2 px-4 w-full text-white font-bold hover:bg-gray-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

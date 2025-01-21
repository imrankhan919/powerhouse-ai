import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";
import Loading from "../components/Loading";

const Register = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { name, email, phone, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if phone is correct
    if (phone.length !== 10) {
      toast.error("Phone Number Incorrect");
    }

    // Check Passwords
    if (password !== password2) {
      toast.error("Passwords Not Match");
    } else {
      // User Register
      dispatch(registerUser(formData));
    }
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
        <h1 className="text-center text-2xl font-semibold">Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border w-full my-2 p-2 placeholder:text-sm"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
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
            type="phone"
            className="border w-full my-2 p-2 placeholder:text-sm"
            placeholder="Phone"
            name="phone"
            value={phone}
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
          <input
            type="password"
            className="border w-full my-2 p-2 placeholder:text-sm"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="duration-200  my-2 bg-black py-2 px-4 w-full text-white font-bold hover:bg-gray-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

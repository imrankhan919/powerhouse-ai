import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../components/BackButton";
import { createPlan } from "../features/plans/planSlice";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const CreatePlan = () => {
  const { isSuccess, isLoading, isError, message, plans } = useSelector(
    (state) => state.plan
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    goal: "",
    prefrence: "",
  });

  const { height, weight, goal, prefrence } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPlan(formData));
  };

  useEffect(() => {
    if (plans && isSuccess) {
      navigate("/view-plans");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [plans, isSuccess, message, isError]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[90vh] p-10">
      <BackButton url={"/"} />
      <div className="border p-5 rounded-md">
        <h1 className="text-center text-lg font-bold">Enter Your Details</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="p-1 border my-2 w-full"
            placeholder="Height"
            required
            name="height"
            value={height}
            onChange={handleChange}
          />
          <input
            type="text"
            className="p-1 border my-2 w-full"
            placeholder="Weight"
            required
            name="weight"
            value={weight}
            onChange={handleChange}
          />
          <select
            className="border p-1 my-2 w-full"
            name="goal"
            value={goal}
            onChange={handleChange}
          >
            <option value="#">Select Your Goal</option>
            <option value="weight_gain">Weight Gain</option>
            <option value="weight_gain">Loose Weight</option>
            <option value="weight_gain">Maintain Weight</option>
          </select>
          <select
            className="border p-1 my-2 w-full"
            name="prefrence"
            value={prefrence}
            onChange={handleChange}
          >
            <option value="#">Diet Prefrence</option>
            <option value="non_vegiterian">Non-Vegiterian</option>
            <option value="vegiterian">Vegiterian</option>
            <option value="vegan">Vegan</option>
          </select>
          <button className="bg-black text-white w-full font-bold mt-2 hover:bg-green-500 duration-200 py-2 text-center">
            Create My Fitness Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePlan;

import React from "react";
import BackButton from "../components/BackButton";

const CreatePlan = () => {
  return (
    <div className="min-h-[90vh] p-10">
      <BackButton url={"/"} />
      <div className="border p-5 rounded-md">
        <h1 className="text-center text-lg font-bold">Enter Your Details</h1>
        <form>
          <input
            type="text"
            className="p-1 border my-2 w-full"
            placeholder="Height"
            requried
          />
          <input
            type="text"
            className="p-1 border my-2 w-full"
            placeholder="Weight"
            requried
          />
          <select className="border p-1 my-2 w-full">
            <option value="#">Select Your Goal</option>
            <option value="weight_gain">Weight Gain</option>
            <option value="weight_gain">Loose Weight</option>
            <option value="weight_gain">Maintain Weight</option>
          </select>
          <select className="border p-1 my-2 w-full">
            <option value="#">Diet Prefrence</option>
            <option value="weight_gain">Non-Vegiterian</option>
            <option value="weight_gain">Vegiterian</option>
            <option value="weight_gain">Vegan</option>
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

import React from "react";
import { Link } from "react-router-dom";

const PlanCard = ({ plan }) => {
  return (
    <div
      className={plan.goal === "gain" ? "p-5 bg-green-400" : "p-5 bg-blue-400"}
    >
      <h1 className="text-2xl font-semibold my-2 uppercase">
        {plan.goal} Plan
      </h1>
      <p className="text-sm text-gray-600 my-2">
        Date : {new Date(plan.createdAt).toLocaleDateString("en-IN")}
      </p>
      <Link to={`/plan/${plan._id}`}>
        <button className="bg-black text-white w-1/2 py-1 mt-5 hover:bg-gray-500 duration-200">
          View
        </button>
      </Link>
    </div>
  );
};

export default PlanCard;

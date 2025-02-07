import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { generatePlan, getPlan } from "../features/plans/planSlice";
import { useParams } from "react-router-dom";

const ViewPlan = () => {
  const { user } = useSelector((state) => state.auth);
  const { plan, generatedPlan, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.plan);

  const userData = {
    name: user.name,
    goal: plan.goal,
    height: plan.height,
    weight: plan.weight,
    prefrence: plan.prefrence,
  };

  const { pid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlan(pid));

    if (plan && user && isSuccess) {
      dispatch(generatePlan(userData));
    }
  }, [pid]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[90vh] p-10">
      <BackButton url={"/view-plans"} />
      <h1 className="text-center my-5 text-2xl font-bold">Your Plan</h1>

      <div className="p-5 rounded-md border">
        <p className="text-gray-500 text-sm">Your Personal Information : </p>
        <div className="flex items-center justify-between">
          <span>
            <h1 className="text-2xl font-semibold my-2">{user.name}</h1>
            <h1 className="text-xl font-semibold my-2">Goal : {plan.goal}</h1>
          </span>
          <span>
            <p className="text-sm font-semibold my-2">
              Height : {plan.height} ft
            </p>
            <p className="text-sm font-semibold my-2">
              Weight : {plan.weight} Kg
            </p>
            <p className="text-sm font-semibold my-2">{plan.prefrence}</p>
          </span>
        </div>
      </div>

      <div className="border p-5 my-2">
        <div dangerouslySetInnerHTML={{ __html: generatedPlan }}></div>
        <button className="py-1 w-full bg-black text-white my-2 font-bold">
          Print My Plan
        </button>
        <button className="py-1 w-full bg-green-500 text-white my-2 font-bold">
          Mark As Completed
        </button>
      </div>
    </div>
  );
};

export default ViewPlan;

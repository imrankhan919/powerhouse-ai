import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlanCard from "../components/PlanCard";
import BackButton from "../components/BackButton";
import { getPlans } from "../features/plans/planSlice";

const ViewPlans = () => {
  const { user } = useSelector((state) => state.auth);
  const { plans, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.plan
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlans(user.id));
  }, []);

  return (
    <div className="min-h-[90vh] p-10">
      <BackButton url={"/"} />
      <h1 className="text-center my-5 text-2xl font-bold">
        All Your Fitness Plans
      </h1>
      <div className="border p-5 rounded-md grid gap-4 grid-cols-1 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan._id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default ViewPlans;

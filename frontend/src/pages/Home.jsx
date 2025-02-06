import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { reset } from "../features/plans/planSlice";

const Home = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message);
    }

    dispatch(reset());
  }, [user, message, isError]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[90vh] p-10">
      <div className="border border-gray-200 p-4">
        <div className="my-4 text-center">
          <h1 className="text-2xl font-bold my-2">Welcome {user?.name}!</h1>
          <p className="text-gray-600 text-sm">
            Create Ai Powered Fitness Plan
          </p>
        </div>

        <Link to={"/create-plan"}>
          <button className="bg-black py-1 px-6 text-white w-full my-2 font-semibold hover:bg-gray-600 duration-200">
            Create New Fitness Plan
          </button>
        </Link>
        <Link to={"/view-plans"}>
          <button className="bg-white border border-black py-1 px-6 text-black w-full my-2 font-semibold hover:bg-black hover:text-white duration-200">
            View My Plans
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

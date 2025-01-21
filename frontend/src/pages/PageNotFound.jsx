import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-5 items-center justify-center">
      <h1 className="text-red-400 text-3xl font-bold my-2">
        404 Page Not Found!!
      </h1>
      <Link
        className="bg-black text-white py-1 px-4 rounded-md font-semibold"
        to={"/"}
      >
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;

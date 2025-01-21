import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ url }) => {
  return (
    <Link to={url}>
      <button className="bg-black text-white font-bold py-1 px-4 my-2">
        Go Back
      </button>
    </Link>
  );
};

export default BackButton;

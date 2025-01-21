import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="bg-black py-4 px-10 flex items-center justify-between">
      <Link to={"/"} className="text-white font-black shadow-lg">
        POWERHOUSE.AI
      </Link>

      <div>
        {!user ? (
          <>
            <Link
              to={"/login"}
              className="text-white bg-blue-500 py-1 px-4 text-sm font-semibold mx-1"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="text-white bg-blue-500 py-1 px-4 text-sm font-semibold mx-1"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogOut}
            className="text-white bg-red-500 py-1 px-4 text-sm font-semibold mx-1"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

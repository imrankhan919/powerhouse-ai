import React from "react";
import BackButton from "../components/BackButton";

const ViewPlan = () => {
  return (
    <div className="min-h-[90vh] p-10">
      <BackButton url={"/view-plans"} />
      <h1 className="text-center my-5 text-2xl font-bold">Your Plan</h1>

      <div className="p-5 rounded-md border">
        <p className="text-gray-500 text-sm">Your Personal Information : </p>
        <div className="flex items-center justify-between">
          <span>
            <h1 className="text-2xl font-semibold my-2">Peter Parker</h1>
            <h1 className="text-xl font-semibold my-2">Goal : Weight Gain</h1>
          </span>
          <span>
            <p className="text-sm font-semibold my-2">Height : 5.8 ft</p>
            <p className="text-sm font-semibold my-2">Weight : 65 Kg</p>
            <p className="text-sm font-semibold my-2">Vegiterian</p>
          </span>
        </div>
      </div>

      <div className="border p-5 my-2">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, qui nostrum. Odio debitis dignissimos mollitia
          provident, accusantium eveniet dolor magnam reprehenderit veritatis
          rerum. Nulla dolores laborum provident? Incidunt, accusantium
          expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, qui nostrum. Odio debitis dignissimos mollitia
          provident, accusantium eveniet dolor magnam reprehenderit veritatis
          rerum. Nulla dolores laborum provident? Incidunt, accusantium
          expedita? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, qui nostrum. Odio debitis dignissimos mollitia
          provident, accusantium eveniet dolor magnam reprehenderit veritatis
          rerum. Nulla dolores laborum provident? Incidunt, accusantium
          expedita?
        </p>
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

import React from "react";

function CountTask({ data }) {
  return (
    <div className="flex flex-wrap gap-6 justify-between mt-10">
      <div className="bg-red-500 w-full sm:w-[45%] md:w-[22%] px-8 py-6 rounded-md">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-yellow-500 w-full sm:w-[45%] md:w-[22%] px-8 py-6 rounded-md">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="bg-blue-500 w-full sm:w-[45%] md:w-[22%] px-8 py-6 rounded-md">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="bg-green-500 w-full sm:w-[45%] md:w-[22%] px-8 py-6 rounded-md">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default CountTask;

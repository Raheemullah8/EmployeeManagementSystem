import React from "react";

function CountTask({data}) {

  return (
    <div className="flex gap-10 justify-evenly flex-wrap mt-10 ">

      <div className="bg-red-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-yellow-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="bg-blue-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="bg-green-500 w-[20%] px-10 py-10 rounded-md ">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Faild Task</h3>
      </div>
      
    </div>
  );
}

export default CountTask;

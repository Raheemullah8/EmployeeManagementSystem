import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

function ListTask({ data }) {
  return (
    <div
      id="taskid"
      className="h-[55%] overflow-x-auto flex justify-center items-start gap-5 flex-wrap w-full py-5 mt-10 px-3 bg-gray-100 rounded-lg shadow-lg"
    >
      {data.tasks.map((task) => {
        // Render specific task based on its status
        if (task.active) {
          return (
            <div className="w-[300px] flex justify-center" key={task.id || task.name}>
              <AcceptTask data={task} />
            </div>
          );
        }

        if (task.newTask) {
          return (
            <div className="w-[300px] flex justify-center" key={task.id || task.name}>
              <NewTask data={task} />
            </div>
          );
        }

        if (task.completed) {
          return (
            <div className="w-[300px] flex justify-center" key={task.id || task.name}>
              <CompleteTask data={task} />
            </div>
          );
        }

        if (task.failed) {
          return (
            <div className="w-[300px] flex justify-center" key={task.id || task.name}>
              <FailedTask data={task} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export default ListTask;

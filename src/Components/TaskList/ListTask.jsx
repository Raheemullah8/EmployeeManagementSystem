import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

function ListTask({ data }) {
  return (
    <div
      id="taskid"
      className="h-[55%] overflow-x-auto flex justify-start items-center   gap-5 w-full py-5  mt-10  flex-nowrap"
    >
     {data.tasks.map((task,idx) => {
      
    if (task.active) {
        return <AcceptTask data={task} key={idx} />;
    }

    if (task.newTask) {
        return <NewTask data={task} key={idx} />;
    }

    if (task.completed) {
        return <CompleteTask data={task} key={idx} />;
    }

    if (task.failed) {
        return <FailedTask data={task} key={idx} />;
    }

    return null; // Ensure that we always return something, even if no conditions are met
})}

      
    </div>
  );
}

export default ListTask;

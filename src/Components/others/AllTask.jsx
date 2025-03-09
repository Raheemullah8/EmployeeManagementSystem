import React, { useContext } from 'react';
import { AuthContext } from '../../Context/ContextProvider';

function AllTask() {
  const [userdata, setUserdata] = useContext(AuthContext);

  // Function to determine the box color based on task counts
  const getBoxColor = (taskCounts) => {
    if (taskCounts.failed > 0) {
      return "bg-red-500"; // Red for failed tasks
    } else if (taskCounts.completed > 0) {
      return "bg-blue-500"; // Blue for completed tasks
    } else if (taskCounts.active > 0) {
      return "bg-green-500"; // Green for active tasks
    } else if (taskCounts.newTask > 0) {
      return "bg-yellow-500"; // Yellow for new tasks
    }
    return "bg-gray-500"; // Default color if no tasks
  };

  // Function to determine the font sizes for <h2> and <h3> based on task counts
  const getFontSize = (taskCounts) => {
    return taskCounts.active > 0 ? 'text-xl' : 'text-lg';
  };

  return (
    <div className="w-full bg-[#1c1c1c] mt-10 p-5 overflow-auto">
      <h1 className="text-white text-2xl font-bold mb-5">All Users</h1>

      {/* Grid Layout for Users */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userdata.map((user, idx) => {
          const boxColor = getBoxColor(user.taskCounts); // Get the box color based on task counts
          const fontSize = getFontSize(user.taskCounts); // Get the font size based on task counts
          
          return (
            <div key={idx} className={`p-4 rounded-lg shadow-lg ${boxColor} text-white`}>
              <h2 className={`${fontSize} font-semibold`}>{user.firstName}</h2>
              <h3 className={`text-md ${user.taskCounts.active > 0 ? 'font-bold' : 'font-light'}`}>Active: {user.taskCounts.active}</h3>
              <h3 className={`text-sm ${user.taskCounts.newTask > 0 ? 'font-bold' : 'font-light'} mt-1`}>New Task: {user.taskCounts.newTask}</h3>
              <h3 className={`text-sm ${user.taskCounts.completed > 0 ? 'font-bold' : 'font-light'} mt-1`}>Completed: {user.taskCounts.completed}</h3>
              <h3 className={`text-sm ${user.taskCounts.failed > 0 ? 'font-bold' : 'font-light'} mt-1`}>Failed: {user.taskCounts.failed}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;

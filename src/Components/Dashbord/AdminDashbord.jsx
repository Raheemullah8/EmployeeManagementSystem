import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

function AdminDashbord(props) {
  return (
    <div className="h-screen w-full p-10">
      
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDashbord;

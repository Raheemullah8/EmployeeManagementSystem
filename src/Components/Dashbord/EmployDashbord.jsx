import React from 'react';
import Header from '../others/Header';
import CountTask from '../others/CountTask';
import ListTask from '../TaskList/ListTask';

function EmployDashbord(props) {
  return (
    <div className='py-5 px-4 sm:px-6 md:px-10 lg:px-20 h-screen bg-[#1c1c1c]'>
      <Header changeUser={props.changeUser} data={props.data} />
      <CountTask data={props.data} />
      <ListTask data={props.data} />
    </div>
  );
}

export default EmployDashbord;

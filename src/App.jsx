import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployDashbord from "./Components/Dashbord/EmployDashbord";
import AdminDashbord from "./Components/Dashbord/AdminDashbord";
import { AuthContext } from "./Context/ContextProvider";

function App() {
  const [userdata, setUserdata] = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [lodginUser, setLogdinUser] = useState(null);

  // Initialize user from localStorage after page reload
  useEffect(() => {
    const employees = localStorage.getItem('LogdinUser');
    if (employees) {
      const userData = JSON.parse(employees);
      setUser(userData.role);
      setLogdinUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      setLogdinUser(null); // Admin doesn't have a user data object, so null.
      localStorage.setItem("LogdinUser", JSON.stringify({ role: "admin" }));
    } else if (userdata) {
      const employee = userdata.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser("employee");
        setLogdinUser(employee);
        localStorage.setItem("LogdinUser", JSON.stringify({ role: "employee", data: employee }));
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashbord changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployDashbord changeUser={setUser} data={lodginUser} />
      ) : null}
    </>
  );
}

export default App;

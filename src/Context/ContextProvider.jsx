import React, { createContext, useEffect, useState } from "react";
import { getLocalStroge, setLocalStroge } from "../Utils/LacalStroge";

export const AuthContext = createContext();

function ContextProvider({ children }) {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    setLocalStroge();
    
    const { employees } = getLocalStroge();
    setUserdata( employees );
  }, []);

  return (
    <AuthContext.Provider value={[userdata, setUserdata]}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextProvider;

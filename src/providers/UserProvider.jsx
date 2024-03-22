import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(false);
  
  return(
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

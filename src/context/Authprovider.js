import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const contexts = useFirebase();
  return (
    <AuthContext.Provider value={contexts}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;

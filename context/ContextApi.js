"use client";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [registerUser, setRegisterUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    console.log(registerUser);
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(loginUser);
  };
  return (
    <Context.Provider
      value={{
        loginUser,
        setLoginUser,
        registerUser,
        setRegisterUser,
        handleSignupSubmit,
        handleLoginSubmit,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;

"use client";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

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
  const router = useRouter();
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerUser.name,
          email: registerUser.email,
          password: registerUser.password,
        }),
      });
      const data = await res.json();
      if (data) {
        toast.success("Registration Successfull");
        router.push("/login");
        setRegisterUser({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginUser.email,
          password: loginUser.password,
        }),
      });
      const data = await res.json();
      if (data) {
        toast.success("Login Successfull");
        router.push("/dashboard");
        setLoginUser({
          email: "",
          password: "",
        });
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error(error.message);
    }
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

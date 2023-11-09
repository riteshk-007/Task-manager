"use client";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
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
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  // Signup User Function
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

  // Login User Function
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

  // Logout User Function
  const handleLogoutUser = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data) {
        toast.success("Logout Successfull");
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // get current user
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await fetch("/api/current-user");
        const data = await res.json();
        if (data) {
          setCurrentUser(data.detail);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    getCurrentUser();
  }, []);
  return (
    <Context.Provider
      value={{
        loginUser,
        setLoginUser,
        registerUser,
        setRegisterUser,
        handleSignupSubmit,
        handleLoginSubmit,
        handleLogoutUser,
        currentUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;

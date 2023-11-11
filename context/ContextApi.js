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
  const [change, setChange] = useState(false);
  const [createTask, setCreateTask] = useState({ title: "", content: "" });
  const [getTask, setGetTask] = useState([]);
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

      if (data.msg === "User created successfully") {
        toast.success("User created successfully");
        router.push("/login");
        setRegisterUser({
          name: "",
          email: "",
          password: "",
        });
      } else if (data.msg === "User already exists") {
        // Throw an error
        toast.error("User already exists");
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.msg);
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
      if (data.msg === "Login successful") {
        toast.success("Login successful");
        router.push("/dashboard");
        setLoginUser({
          email: "",
          password: "",
        });
      } else {
        toast.error(data.msg);
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
        toast.success("Logout Successfully");
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
  }, [loginUser]);

  // create task

  const CreateTask = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: createTask?.title,
          content: createTask?.content,
          userId: currentUser?._id,
        }),
      });
      const data = await res.json();
      if (data.msg === "Task created successfully") {
        toast.success("Task created successfully");
        setCreateTask({
          title: "",
          content: "",
        });
        window.location.reload();
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  // get task by user id
  useEffect(() => {
    const getTaskByUserId = async () => {
      try {
        const res = await fetch(`/api/all-user/${currentUser?._id}/tasks`);
        const data = await res.json();
        if (data.msg === "Get all tasks") {
          setGetTask(data.task);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTaskByUserId();
  }, [currentUser, router]);

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
        change,
        setChange,
        CreateTask,
        createTask,
        setCreateTask,
        getTask,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;

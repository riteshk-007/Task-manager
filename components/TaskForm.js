"use client";

import { Context } from "@/context/ContextApi";
import { useContext } from "react";
import { MdClose } from "react-icons/md";
const TaskForm = ({ setShow }) => {
  const { createTask, setCreateTask, CreateTask } = useContext(Context);
  const handleChnage = (e) => {
    setCreateTask({ ...createTask, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-black w-full md:w-[800px] h-full  md:h-[500px] rounded-lg shadow-lg z-[100] relative flex items-center justify-center">
      <button
        onClick={() => setShow(false)}
        className="absolute right-3 md:right-2 md:top-2 top-3 bg-gray-700 p-1 rounded-md shadow-lg cursor-pointer"
      >
        <MdClose fontSize={20} />
      </button>
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold text-white mb-6">Add Task</h1>
        <form className="md:w-1/2 w-3/4" onSubmit={CreateTask}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-white"
            >
              Title
            </label>
            <input
              type="title"
              id="title"
              name="title"
              className="shadow-sm  border 0 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
              placeholder="Title"
              required
              value={createTask?.title}
              onChange={handleChnage}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="content"
              className="block mb-2 text-sm font-medium text-white"
            >
              Content
            </label>
            <input
              type="text"
              id="content"
              name="content"
              placeholder="Content"
              className="shadow-sm  border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
              required
              value={createTask?.content}
              onChange={handleChnage}
            />
          </div>
          <button
            type="submit"
            className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-800"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

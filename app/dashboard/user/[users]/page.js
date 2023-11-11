"use client";
import { Context } from "@/context/ContextApi";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";

const TaskUpdate = () => {
  const { Task, setTask, UpdateTask, DeleteTask } = useContext(Context);
  const params = useParams();
  const { users } = params;
  // get task by id
  useEffect(() => {
    const getTaskByUserId = async () => {
      try {
        const res = await fetch(`/api/tasks/${users}`);
        const data = await res.json();

        if (data) {
          setTask(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTaskByUserId();
  }, [users, setTask]);

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setTask({ ...Task, [name]: value });
  };
  return (
    <div className="text-white w-full md:w-[calc(100%-256px)] h-screen p-2 px-3 flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold text-white mb-6">Update Task</h1>
        <form className="md:w-1/2 w-3/4" onSubmit={UpdateTask}>
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
              onChange={handleChnage}
              value={Task.title}
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
              onChange={handleChnage}
              value={Task.content}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-white"
            >
              Status
            </label>
            <select
              name="status"
              required
              onChange={handleChnage}
              defaultValue={"none"}
              value={Task.status}
              className="shadow-sm  border  text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
            >
              <option value={"none"} disabled>
                {"----- Select Status -----"}
              </option>
              <option value="pending">Pending</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div className="flex mx-auto items-center justify-center gap-4">
            <button
              type="submit"
              className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-800"
            >
              Update Task
            </button>
            <button
              onClick={DeleteTask}
              className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center bg-red-500 hover:bg-red-600 focus:ring-red-800"
            >
              Delete Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskUpdate;

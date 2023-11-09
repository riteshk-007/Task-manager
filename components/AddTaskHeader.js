"use client";

import { useState } from "react";
import TaskForm from "./TaskForm";

const AddTaskHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=" w-full h-16 flex items-center justify-end px-4 md:my-3">
        <button
          onClick={() => setShow(!show)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 md:py-2 px-3 md:px-4 rounded text-sm"
        >
          Add Task
        </button>
      </div>
      {show && (
        <div className="fixed top-0 left-0 bg-white/25 w-screen h-screen z-[60] flex items-center justify-center">
          <TaskForm setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default AddTaskHeader;

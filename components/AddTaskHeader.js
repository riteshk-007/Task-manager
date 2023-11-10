"use client";

import { useContext, useState } from "react";
import TaskForm from "./TaskForm";
import { TfiLayoutListThumbAlt, TfiLayoutGrid2 } from "react-icons/tfi";
import { Context } from "@/context/ContextApi";

const AddTaskHeader = () => {
  const [show, setShow] = useState(false);
  const { change, setChange } = useContext(Context);
  return (
    <>
      <div className=" w-full h-16 flex items-center justify-between md:justify-end px-3 md:px-10 md:my-3">
        <button
          onClick={() => setChange(!change)}
          className="flex md:hidden text-white bg-[#303030] p-[6px] rounded-md shadow-xl cursor-pointer text-sm"
        >
          {!change ? <TfiLayoutListThumbAlt /> : <TfiLayoutGrid2 />}
        </button>
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

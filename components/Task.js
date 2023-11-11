"use client";
import { Context } from "@/context/ContextApi";
import { useContext } from "react";

const Task = ({ task }) => {
  const { change } = useContext(Context);

  return (
    <div
      className={
        !change
          ? "lg:w-52 md:w-40 lg:h-52 md:h-40 h-32 w-32 cursor-pointer overflow-y-auto no-scrollbar relative bg-black rounded-lg shadow-lg hover:scale-105 transition-all duration-200 flex items-start justify-start flex-col p-2 md:p-3 overflow-hidden"
          : "w-full h-28  cursor-pointer overflow-y-auto no-scrollbar relative bg-black rounded-lg shadow-lg hover:scale-105 transition-all duration-200 flex items-start justify-start flex-col p-2 md:p-3 overflow-hidden"
      }
    >
      <span className="flex items-center justify-between w-full">
        <h1 className="text-sm md:text-lg w-3/4 overflow-hidden capitalize">
          {task?.title}
        </h1>
        {task?.status === "pending" ? (
          <p className="text-[8px] md:text-xs flex-wrap flex  py-1  px-2 text-gray-300 bg-yellow-500/80 rounded-xl">
            {task?.status}
          </p>
        ) : (
          <p className="text-[8px] md:text-xs flex-wrap flex  py-1  px-2 text-gray-300 bg-green-500/80 rounded-xl">
            {task?.status}
          </p>
        )}
      </span>
      <p className="text-[10px] md:text-sm flex-wrap flex  p-1">
        {task?.content}
      </p>
    </div>
  );
};

export default Task;

"use client";
import { useContext } from "react";
import Task from "./Task";
import { Context } from "@/context/ContextApi";
import Link from "next/link";

const Tasks = () => {
  const { getTask, change } = useContext(Context);
  return (
    <>
      {getTask && getTask?.length === 0 ? (
        <div className="w-full mx-auto text-center text-2xl text-gray-600 font-bold">
          No tasks created
        </div>
      ) : (
        <div className="w-[95%] md:w-[90%]  mx-auto p-5 flex items-center justify-start gap-5 md:gap-10 px-4  bg-[#131313] rounded-lg  flex-wrap">
          {getTask &&
            getTask?.map((task) => (
              <Link
                href={`/dashboard/user/${task._id}`}
                key={task._id}
                className={change ? "w-full" : "w-auto"}
              >
                <Task id={task?._id} task={task} />
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default Tasks;

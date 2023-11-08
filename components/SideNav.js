"use client";
import Link from "next/link";
import { FaHome, FaBars, FaUserTie } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
// import { FaUserTie } from "react-icons/gr";
import { MdLogout, MdClose } from "react-icons/md";
import { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm  rounded-lg sm:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <FaBars />
      </button>
      {isOpen && (
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed right-2 top-1 md:hidden items-center p-1  mt-2 ml-3 text-sm  rounded-lg sm:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        >
          <span className="sr-only">close sidebar</span>
          <MdClose fontSize={20} />
        </button>
      )}
      <aside
        className={
          isOpen
            ? "fixed top-0 left-0 z-40 w-64 h-screen transition-transform "
            : "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        }
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900">
          <Link href="/dashboard">
            {" "}
            <h1 className="font-bold text-white text-xl my-2">
              Task<span className="text-red-600">ly</span>
            </h1>
          </Link>
          <ul className="flex items-center justify-start my-5 flex-col gap-5 text-white">
            <li className="flex w-full rounded-md">
              <Link
                href="/dashboard"
                className="flex  items-center justify-start gap-2 p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md w-full hover:shadow-md"
              >
                <FaHome />
                Home
              </Link>
            </li>
            <li className="flex w-full rounded-md">
              <Link
                href="/dashboard"
                className="flex  items-center justify-start gap-2 p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md w-full hover:shadow-md"
              >
                <BsListTask />
                Task
              </Link>
            </li>
            <li className="flex w-full rounded-md">
              <Link
                href="/dashboard"
                className="flex  items-center justify-start gap-2 p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md w-full hover:shadow-md"
              >
                <FaUserTie />
                User
              </Link>
            </li>
            <li className="flex w-full rounded-md">
              <span className="flex  items-center justify-start gap-2 p-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md w-full hover:shadow-md">
                <MdLogout />
                Logout
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideNav;

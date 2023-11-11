"use client";

import { Context } from "@/context/ContextApi";
import { useContext, useState } from "react";

const User = () => {
  const { currentUser, updateUserInfo } = useContext(Context);
  const [user, setUser] = useState(currentUser);
  const handleChnage = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="text-white w-full md:w-[calc(100%-256px)] h-screen p-2 px-3 flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold text-white mb-6">{`Hi, ${user?.name}`}</h1>
        <form className="md:w-1/2 w-3/4" onSubmit={updateUserInfo}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="shadow-sm  border 0 text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
              placeholder="Name"
              required
              value={user?.name}
              onChange={handleChnage}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              className="shadow-sm  border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
              required
              value={user?.email}
              onChange={handleChnage}
            />
          </div>

          <div className="flex mx-auto items-center justify-center ">
            <button
              type="submit"
              className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-800"
            >
              Update User Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;

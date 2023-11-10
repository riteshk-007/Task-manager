"use client";
import { Context } from "@/context/ContextApi";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  const { currentUser } = useContext(Context);
  const name = currentUser?.name.replace(/ .*/, "");
  return (
    <div className="bg-[#131313] w-full h-14 md:h-16 flex items-center justify-between px-4 rounded-lg">
      <Link href="/">
        <h1 className="font-bold text-white md:text-xl text-md  text-center md:text-start">
          Task<span className="text-red-600">ly</span>
        </h1>
      </Link>
      <Link
        href="/dashboard/user"
        className="bg-black  px-3 py-2 rounded-md md:rounded-xl shadow-2xl cursor-pointer"
      >
        <p className="font-semibold text-xs md:text-sm">
          {currentUser ? `Hi, ${name}` : "User"}
        </p>
      </Link>
    </div>
  );
};

export default Header;

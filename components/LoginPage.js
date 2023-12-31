"use client";
import { Context } from "@/context/ContextApi";
import Link from "next/link";
import { useContext } from "react";

const LoginPage = () => {
  const { loginUser, setLoginUser, handleLoginSubmit } = useContext(Context);
  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  return (
    <section className="text-gray-600 body-font w-full flex items-center justify-center h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <h1 className="font-bold text-white md:text-8xl text-4xl mt-4 text-center md:text-start">
            Task<span className="text-red-600">ly</span>
          </h1>
          <p className="text-gray-300 text-sm font-semibold  mx-2 md:py-4 text-center md:text-start">
            Task management made easy. Create, assign, and track tasks with ease
            and simplicity.
          </p>
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              login to your account
            </h2>
          </div>

          <div className="md:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email address"
                    value={loginUser.email}
                    onChange={handleChange}
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-200"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#!"
                      className="font-semibold text-blue-500 hover:text-blue-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="********"
                    value={loginUser.password}
                    onChange={handleChange}
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Dont have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold leading-6 text-blue-500 hover:text-blue-600"
              >
                Sign Up
              </Link>
            </p>
            <div className="flex flex-col text-white mt-5 bg-gray-900 rounded-md p-2 shadow-md">
              <p className="mx-auto md:w-1/2 text-[13px]">
                Testing a/c : test@gmail.com
              </p>
              <p className="mx-auto md:w-1/2 text-[13px]">Password : test</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

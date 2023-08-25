import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

export default function SignIn() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="bg-white p-6 flex flex-col text-center justify-between">
      <h2 className="text-xl font-bold">Sign In</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-2 flex flex-col gap-5 "
      >
        <div className="relative flex items-center">
          <label
            className="absolute text-sky-500 top-[26%] left-4 text-xl "
            htmlFor="email"
          >
            <FaRegEnvelope />
          </label>
          <input
            className="w-full h-full text-base bg-transparent border border-gray-300 rounded-md py-4 px-16"
            type="text"
            placeholder="Email"
            id="email"
          />
        </div>
        <div className="relative flex items-center">
          <label
            onClick={() => setShowPass((prev) => !prev)}
            className="absolute text-sky-500 top-[26%] left-4 text-xl cursor-pointer "
          >
            {showPass ? <BiLockOpenAlt /> : <BiLockAlt />}
          </label>
          <input
            className="w-full h-full text-base bg-transparent border border-gray-300 rounded-md py-4 px-16"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            id="password"
          />
        </div>
        <div className="flex p-3 gap-3 items-center">
          <input
            className="bg-teal-50 b border border-gray-400 w-4 h-4"
            type="checkbox"
            id="saved"
          />
          <label htmlFor="saved" className="cursor-pointer select-none">
            Remember Me
          </label>
        </div>
        <button className="p-4 bg-teal-500 text-white  font-bold rounded-md transition ease-in-out duration-300 hover:bg-teal-400">
          Sign In
        </button>
        <div className="flex text-sm items-center justify-between my-2 font-medium text-gray-500">
          <a
            className="hover:underline"
            onClick={(e) => e.preventDefault()}
            href="#"
          >
            Create Account
          </a>
          <a
            className="hover:underline"
            onClick={(e) => e.preventDefault()}
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div className="flex flex-col  gap-6">
        <p className="font-medium text-sm text-gray-600">or connect with</p>
        <button className="p-4 bg-blue-500 text-white rounded-md font-semibold transition ease-in-out duration-300 hover:bg-blue-400">
          Facebook
        </button>
        <button className="p-4 bg-red-500 text-white rounded-md font-semibold transition ease-in-out duration-300 hover:bg-red-400">
          Gmail
        </button>
      </div>
    </div>
  );
}

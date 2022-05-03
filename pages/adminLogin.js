import React, { useRef, useContext } from "react";
import { useRouter } from "next/router";
import { MdAdminPanelSettings } from "react-icons/md";
import AuthContext from "../components/context/auth/authContext";

export default function AdminLogin() {
  // Get the auth context.
  const authContext = useContext(AuthContext);
  const { adminLogin } = authContext;

  // useRef Hooks.
  const email = useRef(null);
  const password = useRef(null);

  // Get the Next JS router.
  const router = useRouter();

  // This function is called when the login form is submitted.
  async function handleFormSubmit(event) {
    // Prevents default behaviour of form. It prevents page refresh.
    event.preventDefault();

    // Create login body.
    let loginBody = {
      email: email.current.value,
      password: password.current.value,
    };

    // Log in admin.
    const { success, message } = await adminLogin(loginBody);

    // Clear the login form.
    clearForm();

    if (success) {
      router.push("/admin");
    } else {
      alert("Login is not successfull!");
    }
  }

  // This function clears the login form.
  function clearForm() {
    email.current.value = "";
    password.current.value = "";
  }

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="px-10 xs:p-0 mx-auto w-full md:w-[40%]">
        <div className="text-4xl mb-5 flex flex-col items-center justify-center text-indigo-500 hover:text-indigo-400">
          <MdAdminPanelSettings />
          <span>Admin Login</span>
        </div>
        <div className="bgWhite w-full bg-gray-100 rounded-lg shadow-lg  divide-y divide-gray-200">
          <form className="px-5 py-7" onSubmit={handleFormSubmit}>
            <label className="font-semibold text-sm pb-1 block text-indigo-500 hover:text-indigo-400">
              E-mail
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              ref={email}
            />
            <label className="font-semibold text-sm pb-1 block text-indigo-500 hover:text-indigo-400">
              Password
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              ref={password}
            />
            <button
              type="submit"
              className="transition duration-200 bg-indigo-500  hover:bg-indigo-400 focus:bg-indigo-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 textWhite w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2 text-white">Admin Login</span>
            </button>
          </form>

          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:textLeft whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-indigo-500 hover:text-indigo-400 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

    // Show the response.
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
    <div className="flex flex-col justify-center my-20 p-8">
      <div className="px-10 xs:p-0 mx-auto w-full md:w-[40%]">
        <div className="text-4xl mb-5 flex flex-col items-center justify-center text-indigo-500 hover:text-purple-500">
          <MdAdminPanelSettings />
          <span>Admin Login</span>
        </div>
        <div className="w-full bg-gray-100 rounded-lg shadow-lg  divide-y divide-gray-200">
          <form className="px-5 py-7" onSubmit={handleFormSubmit}>
            <label className="font-semibold text-sm pb-1 block text-indigo-500 hover:text-purple-500">
              E-mail
            </label>
            <input
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              ref={email}
            />
            <label className="font-semibold text-sm pb-1 block text-indigo-500 hover:text-purple-500">
              Password
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              ref={password}
            />
            <button
              type="submit"
              className="transition duration-200 bg-indigo-500 hover:bg-purple-500 focus:bg-indigo-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 p-2.5 rounded-lg text-sm w-full shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block text-white">Admin Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "./context/auth/authContext";
import AlertContext from "./context/alert/alertContext";
import Spinner from "./Spinner";
import Footer from "./Footer";

export default function UserForm() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { createUser } = authContext;

  // Get the alert context.
  let alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  // useRef hooks for form text feilds.
  let userName = useRef(null);
  let email = useRef(null);
  let password = useRef(null);
  let confPasswd = useRef(null);

  // State hook for Gender Radio Button.
  const [gender, setGender] = useState("Others");

  // This function returns true is the radio is selected.
  function isSelected(value) {
    return gender === value;
  }

  // Loading hook.
  const [loading, setLoading] = useState(false);

  // Create router object.
  const router = useRouter();

  // This function set the radio button value.
  function handleRadio(event) {
    setGender(event.target.value);
  }

  // // This function clears the form data.
  // function clearForm() {
  //   userName.current.value = null;
  //   email.current.value = null;
  //   password.current.value = null;
  //   confPasswd.current.value = null;
  //   setGender("Others");
  // }

  // This function handles form submit event.
  async function handleFormSubmit(event) {
    // Prevents the default behaviour of the form.
    event.preventDefault();

    // Check if the password and confirm password does not match show error.
    if (password.current.value !== confPasswd.current.value) {
      password.current.value = null;
      confPasswd.current.value = null;
      showAlert("warning", "Confirm the password!");
      return;
    }

    // Create the user details.
    let userDetails = {
      userName: userName.current.value,
      email: email.current.value,
      password: password.current.value,
      gender: gender,
    };

    // Set loading to true.
    setLoading(true);

    // Call the function to create admin user.
    const { success, message } = await createUser(userDetails);

    // Show the response.
    if (success) {
      showAlert("success", message);
      router.push("/admin");
    } else {
      showAlert("error", message);
      // Set loading to false.
      setLoading(false);
    }
  }

  return (
    <section>
      {loading ? (
        <>
          <Spinner />
          <section className="fixed bottom-0 w-full">
            <Footer />
          </section>
        </>
      ) : (
        <>
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-8">
              <h1 className="sm:text-3xl text-2xl font-oswald font-medium text-indigo-500 hover:text-purple-500">
                Add new Admin User
              </h1>
            </div>
            <form
              onSubmit={handleFormSubmit}
              className="lg:w-1/2 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col justify-center items-center">
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      ref={userName}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      ref={email}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500"
                    >
                      Set Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      ref={password}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <label
                      htmlFor="confirm"
                      className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm"
                      ref={confPasswd}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-3/4">
                  <div className="relative">
                    <p className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500">
                      Sex
                    </p>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      checked={isSelected("Male")}
                      onChange={handleRadio}
                      value="Male"
                    />
                    <label
                      htmlFor="male"
                      className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500 mx-5"
                    >
                      Male
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      checked={isSelected("Female")}
                      onChange={handleRadio}
                      value="Female"
                    />
                    <label
                      htmlFor="female"
                      className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500 mx-5"
                    >
                      Female
                    </label>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      checked={isSelected("Others")}
                      onChange={handleRadio}
                      value="Others"
                    />
                    <label
                      htmlFor="other"
                      className="leading-7 text-lg font-zilla font-medium text-indigo-500 hover:text-purple-500 mx-5"
                    >
                      Others
                    </label>
                  </div>
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 flex flex-row space-x-2 justify-center items-center">
                  <div className="p-2">
                    <button
                      type="submit"
                      className="flex mx-auto font-montserrat font-semibold text-white bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black py-2 px-8 focus:outline-none rounded text-lg"
                    >
                      Add
                    </button>
                  </div>
                  <div className="p-2">
                    <button
                      type="reset"
                      className="flex mx-auto font-montserrat font-semibold text-white bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black py-2 px-8 focus:outline-none rounded text-lg"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </>
      )}
    </section>
  );
}

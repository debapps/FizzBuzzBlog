import React, { useRef, useContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { MdAdminPanelSettings } from "react-icons/md";
import AuthContext from "../components/context/auth/authContext";
import Footer from "../components/Footer";

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
    <>
      <Head>
        <title>FizzBuzz.Blog - Admin Login</title>
        <meta
          name="description"
          content="FizzBuzz is the personal blog to document learning experiences, Tips, Standard Procedures, Reusable components and links related to Web development, Data Analysis and Programming."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <main className="flex flex-col justify-center my-20 p-8">
        <div className="px-10 xs:p-0 mx-auto w-full md:w-[40%]">
          <div className="text-4xl mb-5 flex flex-col items-center justify-center text-indigo-500 hover:text-purple-500">
            <MdAdminPanelSettings />
            <span className="font-oswald">Admin Login</span>
          </div>
          <div className="w-full bg-gray-100 rounded-lg shadow-lg  divide-y divide-gray-200">
            <form className="px-5 py-7" onSubmit={handleFormSubmit}>
              <label className="font-semibold font-montserrat text-sm pb-1 block text-indigo-500 hover:text-purple-500">
                E-mail
              </label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-base text-purple-400 font-montserrat md:font-semibold w-full"
                ref={email}
              />
              <label className="font-semibold font-montserrat text-sm pb-1 block text-indigo-500 hover:text-purple-500">
                Password
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-base text-purple-400 font-montserrat md:font-semibold w-full"
                ref={password}
              />
              <button
                type="submit"
                className="transition duration-200 bg-indigo-500 hover:bg-purple-500 focus:bg-indigo-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 p-2.5 rounded-lg text-sm w-full shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block text-white font-montserrat">
                  Admin Login
                </span>
              </button>
            </form>
          </div>
        </div>
      </main>
      <section className="fixed bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
}

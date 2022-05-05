import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiLogoutCircleLine, RiFunctionFill } from "react-icons/ri";
import AuthContext from "./context/auth/authContext";

export default function Header() {
  // Get the auth context.
  const authContext = useContext(AuthContext);
  const { authToken, logOutUser } = authContext;

  // Get the router.
  const router = useRouter();

  // This function logs out the user.
  function handleLogout() {
    router.push("/");
    logOutUser();
  }

  return (
    <header className="shadow-md bg-gradient-to-r from-orange-300 via-yellow-300 to-cyan-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href={"/"} passHref>
            <a className="mr-5 font-montserrat font-semibold text-indigo-500 hover:text-purple-500 active:font-bold">
              Home
            </a>
          </Link>
          <Link href={"/about"} passHref>
            <a className="mr-5 font-montserrat font-semibold text-indigo-500 hover:text-purple-500 active:font-bold">
              About
            </a>
          </Link>
          <Link href={"/blogs"} passHref>
            <a className="mr-5 font-montserrat font-semibold text-indigo-500 hover:text-purple-500 active:font-bold">
              Blogs
            </a>
          </Link>
          <Link href={"/contact"} passHref>
            <a className="font-montserrat font-semibold text-indigo-500 hover:text-purple-500 active:font-bold">
              Contact
            </a>
          </Link>
        </nav>
        <Link href={"/"} passHref>
          <a className="flex order-first lg:order-none lg:w-1/5 font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image
              src={"/image/FizzBuzzLogo.png"}
              alt="FizzBuzzLogo"
              width={40}
              height={40}
              className="inline-block rounded-full"
            ></Image>
            <span className="ml-3 font-oswald text-4xl font-medium text-indigo-500 hover:text-purple-500">
              FizzBuzz
            </span>
          </a>
        </Link>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          {authToken ? (
            <div className="inline-flex justify-between items-center">
              <Link href={"/admin"} passHref>
                <a className="inline-flex bg-indigo-500 hover:bg-purple-500 text-white text-2xl items-center border-0 p-3 focus:outline-none rounded-full mt-4 md:mt-0">
                  <RiFunctionFill />
                </a>
              </Link>
              <button
                onClick={handleLogout}
                className="inline-flex ml-2 bg-indigo-500 hover:bg-purple-500 text-white text-2xl items-center border-0 p-3 focus:outline-none rounded-full mt-4 md:mt-0"
              >
                <RiLogoutCircleLine />
              </button>
            </div>
          ) : (
            <Link href={"/adminLogin"} passHref>
              <a className="inline-flex bg-indigo-500 hover:bg-purple-500 text-white text-2xl items-center border-0 p-3 focus:outline-none rounded-full mt-4 md:mt-0">
                <MdAdminPanelSettings />
              </a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

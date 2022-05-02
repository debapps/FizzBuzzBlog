import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href={"/"} passHref>
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>
          <Link href={"/about"} passHref>
            <a className="mr-5 hover:text-gray-900">About</a>
          </Link>
          <Link href={"/blogs"} passHref>
            <a className="mr-5 hover:text-gray-900">Blogs</a>
          </Link>
          <Link href={"/contact"} passHref>
            <a className="hover:text-gray-900">Contact</a>
          </Link>
        </nav>
        <Link href={"/"} passHref>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image
              src={"/FizzBuzzLogo.png"}
              alt="FizzBuzzLogo"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <span className="ml-3 text-xl text-emerald-500 hover:text-yellow-500">
              FizzBuzz Blog
            </span>
          </a>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="inline-flex text-blue-300 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <LoginIcon></LoginIcon>
          </button>
        </div>
      </div>
    </header>
  );
}

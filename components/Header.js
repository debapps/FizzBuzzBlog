import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";

export default function Header() {
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href={"/"} passHref>
            <a className="mr-5 text-indigo-500 hover:text-purple-500 active:font-bold">
              Home
            </a>
          </Link>
          <Link href={"/about"} passHref>
            <a className="mr-5 text-indigo-500 hover:text-purple-500 active:font-bold">
              About
            </a>
          </Link>
          <Link href={"/blogs"} passHref>
            <a className="mr-5 text-indigo-500 hover:text-purple-500 active:font-bold">
              Blogs
            </a>
          </Link>
          <Link href={"/contact"} passHref>
            <a className="text-indigo-500 hover:text-purple-500 active:font-bold">
              Contact
            </a>
          </Link>
        </nav>
        <Link href={"/"} passHref>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <Image
              src={"/image/FizzBuzzLogo.png"}
              alt="FizzBuzzLogo"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <span className="ml-3 text-xl text-indigo-500 hover:text-purple-500">
              FizzBuzz
            </span>
          </a>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link href={"/adminLogin"} passHref>
            <a className="inline-flex bg-indigo-500 hover:bg-purple-500 text-white text-2xl items-center border-0 p-3 focus:outline-none rounded-full mt-4 md:mt-0">
              <MdAdminPanelSettings />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

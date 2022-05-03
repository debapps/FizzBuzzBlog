import React from "react";
import { SiWritedotas } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import Link from "next/link";

export default function AdminPanel() {
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center text-gray-900 mb-4">
            Blog Administration
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Find the following admin functionalities to maintain your blogs.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-24 -mx-2">
          <Link href={"/composeBlogPage"} passHref>
            <a className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 text-indigo-500 hover:text-purple-500 rounded flex flex-row space-x-2 p-4 h-full items-center">
                <span className="text-2xl">
                  <SiWritedotas />
                </span>
                <span className="font-medium">Write Blog Post.</span>
              </div>
            </a>
          </Link>
          <Link href={"/account"} passHref>
            <a className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 text-indigo-500 hover:text-purple-500 rounded flex flex-row space-x-2 p-4 h-full items-center">
                <span className="text-2xl">
                  <MdOutlineManageAccounts />
                </span>
                <span className="font-medium">Account Details</span>
              </div>
            </a>
          </Link>
          <Link href={"/createUser"} passHref>
            <a className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 text-indigo-500 hover:text-purple-500 rounded flex flex-row space-x-2 p-4 h-full items-center">
                <span className="text-2xl">
                  <FaUserCircle />
                </span>
                <span className="font-medium">Create New Admin User.</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font w-full border-2">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <Link href={"/"} passHref>
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={"/image/FizzBuzzLogo.png"}
              alt="FizzBuzzLogo"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <span className="ml-3 text-xl text-emerald-500 hover:text-yellow-500">
              FizzBuzz
            </span>
          </a>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:borderL-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} Debaditya Bhar
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href={"https://www.facebook.com/debadityabhar/"} passHref>
            <a className="ml-3" target="_blank" rel="noreferrer">
              <span className="text-[#3b5998] text-2xl">
                <FaFacebookSquare />
              </span>
            </a>
          </Link>
          <Link href={"https://www.instagram.com/debadityabhar14/"} passHref>
            <a className="ml-3">
              <span className="text-[#d6249f] text-2xl">
                <FaInstagramSquare />
              </span>
            </a>
          </Link>
          <Link href={"https://github.com/debapps"} passHref>
            <a className="ml-3" target="_blank" rel="noreferrer">
              <span className="text-[#f4a261] text-2xl">
                <BsGithub />
              </span>
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
}

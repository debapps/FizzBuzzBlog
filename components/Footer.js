import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-200 via-yellow-300 to-orange-300 w-full border">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
        <Link href={"/"} passHref>
          <a className="flex font-medium items-center md:justify-start justify-center">
            <Image
              src={"/image/FizzBuzzLogo.png"}
              alt="FizzBuzzLogo"
              width={30}
              height={30}
              className="inline-block rounded-full"
            ></Image>
            <span className="ml-3 font-oswald text-xl font-medium text-indigo-500 hover:text-purple-500">
              FizzBuzz.Blog
            </span>
          </a>
        </Link>
        <p className="text-sm text-indigo-500 font-zilla sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-purple-300 sm:py-2 sm:mt-0 mt-4">
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
              <span className="text-[#b56f37] text-2xl">
                <BsGithub />
              </span>
            </a>
          </Link>
        </span>
      </div>
    </footer>
  );
}

import React from "react";
import Image from "next/image";

export default function HeroElement() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-oswald sm:text-4xl text-3xl mb-4 font-medium text-indigo-500 hover:text-purple-500">
            Welcome to FizzBuzz.blog!
          </h1>
          <p className="mb-8 leading-relaxed font-montserrat text-xl">
            <span className="text-indigo-500 hover:text-purple-500 font-semibold">
              FizzBuzz
            </span>{" "}
            is the popular programing problem which test the elementary
            knowledge of budding programmers. FizzBuzz blog is intended to
            provide elementary knowledge for the budding programmers. Check out
            our latest blog posts, stories and recipes of coding...
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/4 w-5/6">
          <Image
            className="object-cover object-center rounded-bl-3xl rounded-tl-xl rounded-tr-lg "
            alt="FizzBuzz Hero Image"
            src="/image/fizzbuzzhero.jpg"
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

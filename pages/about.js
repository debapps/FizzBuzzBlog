import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import HeadComponent from "../components/HeadComponent";

export default function About() {
  return (
    <>
      <HeadComponent title="FizzBuzz Blog - About Us" />
      <main className="flex flex-col justify-center items-center my-12 px-12 text-gray-600">
        <h1 className="text-3xl md:text-5xl font-oswald my-5 text-purple-500">
          About FizzBuzz Blog
        </h1>
        <hr className="w-3/4 md:w-[30%] border-t-0 border-x-0 border-b-2 mx-auto mb-10 border-dashed border-indigo-300" />
        <div className="flex flex-col space-y-2 md:flex-row">
          <article className="text-lg font-montserrat leading-8 flex flex-col space-y-4 order-2 md:order-1">
            <p>
              Hello Buddy!! I am glad that you check it out. I am{" "}
              <em>Debaditya Bhar</em>, Founder of this{" "}
              <span className="text-indigo-500 hover:text-purple-500 font-semibold">
                FizzBuzz.Blog
              </span>
              . I hope this blog will help you learn several topics in computer
              programming world.
            </p>
            <p>
              <span className="text-indigo-500 hover:text-purple-500 font-semibold">
                FizzBuzz
              </span>{" "}
              is the elementary problem in computer programming where the
              program will print the natural sequence of numbers, while it will
              print <strong>Fizz</strong> for multiple of 3, it will print{" "}
              <strong>Buzz</strong> for the multiple of 5 and it will print{" "}
              <strong>FizzBuzz</strong> for the multiple of 15 (3 * 5).
            </p>
            <p>
              In most of the job interview, FizzBuzz problem is asked to test
              the elementary knowledge of budding programers.
            </p>
            <p>
              <span className="text-indigo-500 hover:text-purple-500 font-semibold">
                FizzBuzz.Blog
              </span>{" "}
              is blog with the contents full of concept of computer science.
              Hope you will like it...
            </p>
          </article>
          <div className="md:ml-8 order-1 md:order-2">
            <Image
              className="rounded-full"
              src={"/image/profilePic.jpg"}
              alt="My Pic"
              width={900}
              height={900}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

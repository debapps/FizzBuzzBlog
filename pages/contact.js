import React, { useRef, useContext } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";
import FeedContext from "../components/context/feedback/feedContext";

export default function Contact() {
  // Get the reference hooks.
  let name = useRef(null);
  let email = useRef(null);
  let comments = useRef(null);

  // Get the feedback context.
  const feedContext = useContext(FeedContext);
  const { submitFeed } = feedContext;

  // This function called when button is clicked and the feedback will be submitted to database.
  async function handleOnClick(event) {
    event.preventDefault();

    // Create the feedback object.
    let feedObj = {
      name: name.current.value,
      email: email.current.value,
      message: comments.current.value,
    };

    // Submit the feedback into the database.
    const { success, message } = await submitFeed(feedObj);

    // Show the response.
    if (success) {
      clearFeed();
      alert(message);
    } else {
      alert(message);
    }
  }

  // This clears the contact page.
  function clearFeed() {
    name.current.value = null;
    email.current.value = null;
    comments.current.value = null;
  }

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Contact Us" />
      <section className="text-gray-600 font-montserrat relative">
        <div className="px-5 pt-10 pb-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl md:text-5xl font-oswald my-5 text-purple-500">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We like to hear from you. For any feedback, queries, career
              related information please reach out to us!
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    ref={name}
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    ref={email}
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    ref={comments}
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleOnClick}
                  className="flex mx-auto text-white bg-indigo-500 hover:bg-purple-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg"
                >
                  Reach Us
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">debaditya.bhar@gmail.com</a>
                <p className="leading-normal my-5">
                  420/2, G. T. Road,
                  <br />
                  Mahesh, Serampore, Hooghly, India, Pin - 712202
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

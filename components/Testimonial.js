import React from "react";
import { IoMdQuote } from "react-icons/io";

export default function Testimonial(props) {
  // Get the feedback details.
  const { name, email, message } = props.feed;

  return (
    <section className="text-gray-600 font-montserrat w-full md:w-1/2 p-10">
      <div className="h-full bg-gray-100 p-8 rounded">
        <IoMdQuote className="text-2xl" />
        <p className="leading-relaxed mb-6">{message}</p>
        <span className="flex-grow flex flex-col">
          <span className="title-font font-medium text-gray-900">{name}</span>
          <span className="text-gray-500 text-sm">{email}</span>
        </span>
      </div>
    </section>
  );
}

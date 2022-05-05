import Link from "next/link";
import React from "react";
import { formatDate } from "../utilities/dateFormat";

export default function BlogItem(props) {
  // Get all the props.
  const { _id, title, category, introduction, dateCreated } = props.blog;

  // Format the date.
  let publishDate = formatDate(dateCreated);

  return (
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold text-indigo-500 font-zilla">
            {category.toUpperCase()}
          </span>
          <span className="mt-1 text-gray-500 font-zilla text-sm">
            {publishDate}
          </span>
        </div>
        <div className="md:flex-grow">
          <Link href={`/blogpost/${_id}`} passHref>
            <h2 className="text-2xl font-semibold text-purple-500 hover:text-indigo-500 font-oswald mb-2 cursor-pointer">
              {title}
            </h2>
          </Link>
          <p className="leading-relaxed font-medium font-montserrat text-base md:text-lg">
            {introduction}
          </p>
        </div>
      </div>
    </div>
  );
}

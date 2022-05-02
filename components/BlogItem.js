import Link from "next/link";
import React from "react";

export default function BlogItem(props) {
  // Get all the props.
  const { _id, title, category, introduction, dateCreated } = props.blog;

  // Months list.
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Format the date.
  let publishedDate = new Date(dateCreated);
  let formattedDate = `${publishedDate.getDate()}-${
    months[publishedDate.getMonth()]
  }-${publishedDate.getFullYear()}`;

  return (
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">
            {category.toUpperCase()}
          </span>
          <span className="mt-1 text-gray-500 text-sm">{formattedDate}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            {title}
          </h2>
          <p className="leading-relaxed">{introduction}</p>
          <Link href={`/blogpost/${_id}`} passHref>
            <a className="text-indigo-500 inline-flex items-center mt-4 hover:underline hover:text-indigo-600">
              Read Blog
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

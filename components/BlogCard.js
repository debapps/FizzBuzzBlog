import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard(props) {
  const { _id, category, title, introduction } = props.blog;
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <Image
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://picsum.photos/720/400"
          alt="content"
          width={720}
          height={400}
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium font-zilla mb-1">
          {category.toUpperCase()}
        </h3>
        <h2 className="text-lg text-purple-500 font-oswald font-normal mb-4">
          {title.slice(0, 20)} ...
        </h2>
        <p className="text-base font-montserrat text-gray-600">
          {introduction.slice(0, 70)}...
        </p>
        <Link href={`/blogpost/${_id}`} passHref>
          <a className="block w-fit mt-2 p-2 rounded-lg text-white bg-indigo-500 hover:bg-purple-500">
            Read Blog
          </a>
        </Link>
      </div>
    </div>
  );
}

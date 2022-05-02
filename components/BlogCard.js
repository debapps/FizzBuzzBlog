import React from "react";
import Image from "next/image";

export default function BlogCard(props) {
  const { category, title, content } = props.blog;
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
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {category.toUpperCase()}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {title.slice(0, 20)} ...
        </h2>
        <p className="leading-relaxed text-base">{content.slice(0, 80)}</p>
      </div>
    </div>
  );
}

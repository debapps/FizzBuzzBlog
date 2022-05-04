import React from "react";

export default function ComposeBlog() {
  return (
    <main className="bg-gray-50 flex flex-col justify-center items-center p-10">
      <h2 className="text-xl md:text-4xl text-indigo-500 hover:text-purple-500 mb-5">
        Write Blog Post
      </h2>
      <form className="bg-gray-100 border rounded-lg shadow-md p-5 flex flex-col justify-between items-center space-y-5 w-[90%]">
        <div className="flex flex-col md:flex-row md:justify-between items-start">
          <section className="flex flex-col items-start space-y-5 w-1/2">
            <div className="flex flex-col">
              <label
                className="text-lg leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="w-full px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400"
                type="text"
                id="title"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-lg leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <input
                className="w-full px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400"
                type="text"
                id="category"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-lg leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                htmlFor="synopsis"
              >
                Synopsis
              </label>
              <textarea
                className="overflow-auto px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400 bg-gray-600 text-indigo-100"
                type="text"
                id="synopsis"
                rows="6"
                cols="50"
              />
            </div>
          </section>
          <section className="flex flex-col space-y-5 ml-32">
            <div className="flex flex-col">
              <label
                className="text-lg leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                className="overflow-auto px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400 bg-slate-900 text-white"
                type="text"
                id="content"
                rows="15"
                cols="50"
              />
            </div>
          </section>
        </div>
        <section className="flex space-x-2">
          <button
            className="text-white text-md bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black p-2 rounded-lg"
            type="submit"
          >
            Submit Post
          </button>
          <button
            className="text-white text-md bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black p-2 rounded-lg"
            type="reset"
          >
            Cancel
          </button>
        </section>
      </form>
    </main>
  );
}

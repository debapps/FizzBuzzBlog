import React, { useContext, useRef, useState, useEffect } from "react";
import ShowDown from "showdown";
import { useRouter } from "next/router";
import Spinner from "./Spinner";
import Footer from "./Footer";
import AuthContext from "./context/auth/authContext";
import BlogContext from "./context/blog/blogContext";
import AlertContext from "./context/alert/alertContext";
import { callCloudAPI } from "../utilities/callAPI";

const cloudURL = process.env.NEXT_PUBLIC_CLOUD_URL;

export default function ComposeBlog() {
  // File Upload hooks.
  const [uploadFile, setUploadFile] = useState(null);

  // Loading hook.
  const [loading, setLoding] = useState(false);

  // Showdown converter configurations.
  const converter = new ShowDown.Converter({
    openLinksInNewWindow: true,
    noHeaderId: true,
  });

  // Get the Next JS router.
  const router = useRouter();

  // Get the blog context.
  let blogContext = useContext(BlogContext);
  const { submitBlogPost } = blogContext;

  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { user, getUserDetails } = authContext;

  // Get the alert context.
  let alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  // Load the user Details.
  useEffect(() => {
    getUserDetails();
  });

  // Initialize the reference of the form field.
  let title = useRef(null);
  let category = useRef(null);
  let introduction = useRef(null);
  let content = useRef(null);
  let imageFile = useRef(null);

  // This function triggers when the file input changes.
  async function handleImage(event) {
    setUploadFile(event.target.files[0]);
  }

  // This function upload the image into cloudiary.
  async function uploadImg() {
    // Create Form Data Object to upload the image file into cloudinary.
    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "fizzbuzz");

    // Create the cloudinary api url for image upload.
    let APIEndPoint = "/image/upload";
    let cloudAPIURL = cloudURL + APIEndPoint;

    try {
      // Upload the Image into Cloudinary and get the image URL.
      const cloudResponse = await callCloudAPI(cloudAPIURL, formData);
      return cloudResponse;
    } catch (error) {
      console.log(error.message);
    }
  }
  // This function submits the blog post.
  async function handleSubmit(event) {
    // Prevents default behaviour of the form.
    event.preventDefault();

    // Get the author name.
    // await getUserDetails();
    let authorName = user.userName;

    // Get image upload response.
    let imgResponse = await uploadImg();

    // Prepare the blog post object.
    const blogPostObj = {
      title: title.current.value,
      category: category.current.value,
      author: authorName,
      introduction: introduction.current.value,
      blogImageURL: imgResponse.secure_url,
      blogImageID: imgResponse.public_id,
      content: getHTML(content.current.value),
    };

    // Set loading to true.
    setLoding(true);

    // Submit the blog into database.
    let { success, message } = await submitBlogPost(blogPostObj);

    // Show the response.
    if (success) {
      // clearForm();
      showAlert("success", message);
      router.push("/blogs");
    } else {
      showAlert("error", message);
      // Set loading to false.
      setLoding(false);
    }
  }

  // This function clears the input form.
  function clearForm() {
    title.current.value = null;
    category.current.value = null;
    introduction.current.value = null;
    content.current.value = null;
    setUploadFile(null);
  }

  // This function converts markdown text to HTML text.
  function getHTML(inputText) {
    let htmlText = converter.makeHtml(inputText);
    return htmlText;
  }

  return (
    <>
      {loading ? (
        <div>
          <Spinner />
          <section className="fixed bottom-0 w-full">
            <Footer />
          </section>
        </div>
      ) : (
        <main className="bg-gray-50 flex flex-col justify-center items-center p-3 md:p-10 w-full">
          <h2 className="text-xl md:text-4xl font-oswald text-indigo-500 hover:text-purple-500 mb-5">
            Write Blog Post
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 border rounded-lg shadow-md md:p-5 flex flex-col justify-center md:justify-between items-center space-y-5 w-full md:w-[90%]"
          >
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
              <section className="flex flex-col items-center md:items-start mt-5 space-y-5 w-full md:w-1/2">
                <div className="flex flex-col">
                  <label
                    className="text-base md:text-lg font-zilla leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                    htmlFor="title"
                  >
                    Title *
                  </label>
                  <input
                    className="w-full px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400"
                    type="text"
                    id="title"
                    ref={title}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-base md:text-lg font-zilla leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <input
                    className="w-full px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400"
                    type="text"
                    id="category"
                    ref={category}
                  />
                </div>
                <div className="flex flex-col">
                  {uploadFile ? (
                    <p className="text-base md:text-lg font-zilla leading-7 text-indigo-500 hover:text-purple-500 mb-2">
                      Image selected
                    </p>
                  ) : (
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        imageFile.current.click();
                      }}
                      className="text-white font-montserrat font-semibold bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black p-2 rounded-lg"
                    >
                      Upload Image
                    </button>
                  )}
                  <input
                    className="hidden"
                    type="file"
                    name="blogImg"
                    ref={imageFile}
                    onChange={handleImage}
                  />
                </div>
                <div className="flex flex-col mb-2 md:mb-0">
                  <label
                    className="text-base md:text-lg font-zilla leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                    htmlFor="synopsis"
                  >
                    Synopsis *
                  </label>
                  <textarea
                    className="text-sm md:text-lg overflow-auto px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400 bg-gray-600 text-indigo-100"
                    type="text"
                    id="synopsis"
                    rows="6"
                    cols="40"
                    ref={introduction}
                  />
                </div>
              </section>
              <section className="flex flex-col space-y-5 md:ml-32">
                <div className="flex flex-col">
                  <label
                    className="text-base md:text-lg font-zilla leading-7 text-indigo-500 hover:text-purple-500 mb-2"
                    htmlFor="content"
                  >
                    Content *
                  </label>
                  <textarea
                    className="text-sm md:text-lg overflow-auto px-5 py-2 rounded-md caret-purple-400 border-2 border-indigo-400 hover:border-purple-400 bg-slate-900 text-white"
                    type="text"
                    id="content"
                    rows="17"
                    cols="45"
                    ref={content}
                  />
                </div>
              </section>
            </div>
            <section className="flex space-x-2 pb-3">
              <button
                className="text-white font-montserrat font-semibold bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black p-2 rounded-lg"
                type="submit"
              >
                Submit Post
              </button>
              <button
                className="text-white font-montserrat font-semibold bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black p-2 rounded-lg"
                type="reset"
                onClick={clearForm}
              >
                Cancel
              </button>
            </section>
          </form>
          <Footer />
        </main>
      )}
    </>
  );
}

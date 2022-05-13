import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import AdminLogin from "./adminLogin";
import HeadComponent from "../components/HeadComponent";
import Testimonial from "../components/Testimonial";
import AuthContext from "../components/context/auth/authContext";
import FeedContext from "../components/context/feedback/feedContext";

export default function Feedbacks() {
  // Get the auth context.
  const authContext = useContext(AuthContext);
  const { authToken } = authContext;

  // Get the feedback context.
  const feedContext = useContext(FeedContext);
  const { feeds, fetchFeedbacks } = feedContext;

  // Get all the feedbacks.
  useEffect(() => {
    fetchFeedbacks();
  });

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Feedbacks" />
      {authToken ? (
        <main className="py-10">
          <h2 className="text-xl md:text-4xl text-center font-oswald text-indigo-500 hover:text-purple-500 mb-5">
            Feedbacks
          </h2>
          <div className="flex flex-wrap justify-start items-center">
            {feeds.map((feedback, idx) => {
              return <Testimonial key={idx} feed={feedback} />;
            })}
          </div>
        </main>
      ) : (
        <AdminLogin />
      )}
      <section className="static md:fixed md:bottom-0 md:w-full">
        <Footer />
      </section>
    </>
  );
}

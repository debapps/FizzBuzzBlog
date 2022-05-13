import { useState } from "react";
import { callBlogAPI, getJSONHeader } from "../../../utilities/callAPI";
import FeedContext from "./feedContext";

const host = process.env.NEXT_PUBLIC_APP_HOST;

export default function FeedState(props) {
  // Feedback hook.
  const [feeds, setFeeds] = useState([]);

  // This function fetches all feedbacks.
  const fetchFeedbacks = async () => {
    // Get the Request header.
    const myHeader = getJSONHeader();

    // Get the host address and create the URL.
    let apiEndPoint = "/api/getFeedbacks";
    const url = host + apiEndPoint;

    // Call the API to get blog feedbacks.
    let feedBacks = await callBlogAPI(url, myHeader);

    // Set the blog list.
    setFeeds(feedBacks);
  };

  // This function gets user feedbacks from contact page and store it to database using API EndPoint.
  async function submitFeed(feedObj) {
    // Get the auth header.
    const myHeader = getJSONHeader();

    // Get the host address and create the URL.
    let apiEndPoint = "/api/addFeedback";
    const url = host + apiEndPoint;

    // Call the API to post the feedback.
    let response = await callBlogAPI(url, myHeader, "POST", feedObj);

    return response;
  }

  return (
    <FeedContext.Provider value={{ feeds, fetchFeedbacks, submitFeed }}>
      {props.children}
    </FeedContext.Provider>
  );
}

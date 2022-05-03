import { useState } from "react";
import { callBlogAPI, getJSONHeader } from "../../../utilities/callAPI";
import AuthContext from "./authContext";

const host = process.env.NEXT_PUBLIC_APP_HOST;

export default function AuthState(props) {
  // Storing auth token as application state.
  const [authToken, setAuthToken] = useState(null);

  // This function is called to login admin user.
  async function adminLogin(loginInfo) {
    // Get the login URL from API endpoint.
    let apiEndPoint = "/api/login";
    let url = host + apiEndPoint;

    // Get the request header.
    let header = getJSONHeader();

    // Call the Blog API.
    let response = await callBlogAPI(url, header, "POST", loginInfo);

    // Send the response from API.
    if (response.success) {
      setAuthToken(response.authToken);
      return { success: response.success, message: "Login Successful" };
    } else {
      return { success: response.success, message: response.message };
    }
  }

  return (
    <AuthContext.Provider value={{ authToken, adminLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

import { useState } from "react";
import {
  callBlogAPI,
  getJSONHeader,
  getAuthHeader,
} from "../../../utilities/callAPI";
import AuthContext from "./authContext";

const host = process.env.NEXT_PUBLIC_APP_HOST;

export default function AuthState(props) {
  // Storing auth token as application state.
  const [authToken, setAuthToken] = useState(null);

  // Storing the user details as application state.
  const [user, setUser] = useState({});

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

  // This function creates the new admin user.
  async function createUser(userInfo) {
    // Get the login URL from API endpoint.
    let apiEndPoint = "/api/createAdmin";
    let url = host + apiEndPoint;

    // Get the request header.
    let header = getAuthHeader(authToken);

    // Call the Blog API.
    let response = await callBlogAPI(url, header, "POST", userInfo);

    // Send the response from API.
    if (response.success) {
      return {
        success: response.success,
        message: "New admin user is created.",
      };
    } else {
      return { success: response.success, message: response.message };
    }
  }

  // This function fetches the currently logged in Admin Details.
  async function getUserDetails() {
    // Get the login URL from API endpoint.
    let apiEndPoint = "/api/getAdminDetails";
    let url = host + apiEndPoint;

    // Get the request header.
    let header = getAuthHeader(authToken);

    // Call the Blog API.
    let response = await callBlogAPI(url, header);

    // Send the response from API.
    if (response.success) {
      setUser(response.userDetails);
      return {
        success: response.success,
        message: "Get user successfully",
      };
    } else {
      return { success: response.success, message: response.message };
    }
  }

  // This function log out the existing admin user.
  const logOutUser = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        adminLogin,
        createUser,
        logOutUser,
        user,
        getUserDetails,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

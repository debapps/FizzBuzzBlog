import React, { useContext } from "react";
import AuthContext from "../components/context/auth/authContext";
import ComposeBlog from "../components/ComposeBlog";
import AdminLogin from "./adminLogin";
import HeadComponent from "../components/HeadComponent";

export default function ComposeBlogPage() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Write Blog" />
      <main>{authToken ? <ComposeBlog /> : <AdminLogin />}</main>
    </>
  );
}

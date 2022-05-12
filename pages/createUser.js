import React, { useContext } from "react";
import Head from "next/head";
import UserForm from "../components/UserForm";
import AuthContext from "../components/context/auth/authContext";
import AdminLogin from "./adminLogin";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";

export default function CreateUser() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Create Admin" />
      {authToken ? <UserForm /> : <AdminLogin />}
      <Footer />
    </>
  );
}

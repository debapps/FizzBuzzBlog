import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import AuthContext from "../components/context/auth/authContext";
import AdminLogin from "./adminLogin";
import HeadComponent from "../components/HeadComponent";

export default function CreateUser() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Create Admin" />
      {authToken ? <UserForm /> : <AdminLogin />}
    </>
  );
}

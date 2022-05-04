import React, { useContext } from "react";
import UserAccount from "../components/UserAccount";
import AdminLogin from "./adminLogin";
import AuthContext from "../components/context/auth/authContext";

export default function Account() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return <div>{authToken ? <UserAccount /> : <AdminLogin />}</div>;
}

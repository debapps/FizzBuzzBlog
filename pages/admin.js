import React, { useContext, useRef } from "react";
import AdminPanel from "../components/AdminPanel";
import AuthContext from "../components/context/auth/authContext";
import AdminLogin from "./adminLogin";

function AdminPage() {
  // Get the auth context.
  const authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return <div>{authToken ? <AdminPanel /> : <AdminLogin />}</div>;
}

export default AdminPage;

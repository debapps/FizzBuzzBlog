import React, { useContext } from "react";
import AuthContext from "../components/context/auth/authContext";
import AdminPanel from "../components/AdminPanel";
import AdminLogin from "./adminLogin";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";

function AdminPage() {
  // Get the auth context.
  const authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Admin" />
      {authToken ? <AdminPanel /> : <AdminLogin />}
      <section className="fixed bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
}

export default AdminPage;

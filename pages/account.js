import React, { useContext } from "react";
import UserAccount from "../components/UserAccount";
import AdminLogin from "./adminLogin";
import AuthContext from "../components/context/auth/authContext";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";

export default function Account() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Account" />
      {authToken ? <UserAccount /> : <AdminLogin />}
      <section className="fixed bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
}

import React, { useContext } from "react";
import Head from "next/head";
import UserAccount from "../components/UserAccount";
import AdminLogin from "./adminLogin";
import AuthContext from "../components/context/auth/authContext";
import Footer from "../components/Footer";

export default function Account() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <Head>
        <title>FizzBuzz.Blog - Account</title>
        <meta
          name="description"
          content="FizzBuzz is the personal blog to document learning experiences, Tips, Standard Procedures, Reusable components and links related to Web development, Data Analysis and Programming."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      {authToken ? <UserAccount /> : <AdminLogin />}
      <section className="fixed bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
}

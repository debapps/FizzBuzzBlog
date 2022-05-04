import React, { useContext } from "react";
import Head from "next/head";
import AuthContext from "../components/context/auth/authContext";
import ComposeBlog from "../components/ComposeBlog";
import AdminLogin from "./adminLogin";

export default function ComposeBlogPage() {
  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <Head>
        <title>FizzBuzz Blog - Write Blog</title>
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
      <main>{authToken ? <ComposeBlog /> : <AdminLogin />}</main>
    </>
  );
}

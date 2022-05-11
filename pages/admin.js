import React, { useContext, useRef } from "react";
import Head from "next/head";
import AdminPanel from "../components/AdminPanel";
import AuthContext from "../components/context/auth/authContext";
import AdminLogin from "./adminLogin";
import Footer from "../components/Footer";

function AdminPage() {
  // Get the auth context.
  const authContext = useContext(AuthContext);
  const { authToken } = authContext;

  return (
    <>
      <Head>
        <title>FizzBuzz.Blog - Admin</title>
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
      {authToken ? <AdminPanel /> : <AdminLogin />}
      <section className="fixed bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
}

export default AdminPage;

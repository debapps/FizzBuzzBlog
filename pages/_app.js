import Footer from "../components/Footer";
import Header from "../components/Header";
import BlogState from "../components/context/blog/blogState";
import AuthState from "../components/context/auth/authState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthState>
        <BlogState>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </BlogState>
      </AuthState>
    </>
  );
}

export default MyApp;

import Footer from "../components/Footer";
import Header from "../components/Header";
import BlogState from "../components/context/blog/blogState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BlogState>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </BlogState>
    </>
  );
}

export default MyApp;

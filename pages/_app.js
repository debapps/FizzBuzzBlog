import Header from "../components/Header";
import BlogState from "../components/context/blog/blogState";
import AuthState from "../components/context/auth/authState";
import FeedState from "../components/context/feedback/feedState";
import AlertState from "../components/context/alert/alertState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthState>
        <BlogState>
          <FeedState>
            <AlertState>
              <Header />
              <Component {...pageProps} />
            </AlertState>
          </FeedState>
        </BlogState>
      </AuthState>
    </>
  );
}

export default MyApp;

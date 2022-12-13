import "../styles/globals.css";
import "../styles/animations.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="scroll-smooth">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

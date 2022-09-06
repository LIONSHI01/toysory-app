import "../styles/globals.css";
import "../styles/nprogress.css";
import "../styles/ProductCard.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

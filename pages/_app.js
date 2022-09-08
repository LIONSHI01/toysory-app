import { Provider } from "react-redux";
import { store } from "../store/store";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";
import "../styles/cart.css";
import "../styles/CartBar.css";
import "../styles/CartItem.css";
import "../styles/nprogress.css";
import "../styles/ProductCard.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

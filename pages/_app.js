import { Provider } from "react-redux";
import { store } from "../store/store";
import { Toaster } from "react-hot-toast";

import "../styles/globals.css";
import "../styles/cart.css";
import "../styles/CartBar.css";
import "../styles/CartItem.css";
import "../styles/nprogress.css";
import "../styles/ProductCard.css";
import "../styles/Hero.css";
import "../styles/InputForm.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  function CommonLayout(page) {
    return (
      <Provider store={store}>
        <Layout>
          <Toaster />
          {page}
        </Layout>
      </Provider>
    );
  }

  const getLayout = Component.getLayout || CommonLayout;

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

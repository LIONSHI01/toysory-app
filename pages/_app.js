import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../store/store";
import { Toaster } from "react-hot-toast";

import "react-loading-skeleton/dist/skeleton.css";
import "../styles/globals.css";
import "../styles/cart.css";
import "../styles/CartBar.css";
import "../styles/CartItem.css";
import "../styles/nprogress.css";
import "../styles/ProductCard.css";
import "../styles/Hero.css";
import "../styles/Navbar.css";
import "../styles/InputForm.css";

import { Layout } from "../components/index";

function MyApp({ Component, pageProps }) {
  function CommonLayout(page) {
    return (
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Layout>{page}</Layout>
        </Provider>
      </SessionProvider>
    );
  }

  const getLayout = Component.getLayout || CommonLayout;

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;

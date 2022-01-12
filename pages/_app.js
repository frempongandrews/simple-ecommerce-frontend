import { useRouter } from "next/router";
import { motion } from "framer-motion";
import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import AppContextProvider from "../context/AppContext";

function MyApp({ Component, pageProps, router }) {
  return (
    <AppContextProvider>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,

            transition: {
              duration: 0.5,
            },
          },
          pageAnimate: {
            opacity: 1,

            transition: {
              duration: 0.6,
            },
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AppContextProvider>
  );
}

export default MyApp;

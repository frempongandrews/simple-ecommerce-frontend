import { useRouter } from "next/router";
import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import AppContextProvider from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log("*********Router in myApp", router);

  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;

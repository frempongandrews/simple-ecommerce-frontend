import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { getProducts } from "../lib/api";
import Home from "../components/Home";
import Layout from "../components/Layout";

export default function HomePage({ products, message }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div style={{ minHeight: "60vh" }}>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <>
      {message && <p>{message}</p>}
      <Home products={products} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await getProducts();
  if (res?.status >= 400) {
    return {
      props: {
        products: [],
        message: res?.data?.message || "Error while fetching products",
      },
    };
  }
  const products = res?.data?.products || [];
  console.log("*******Products", products);
  return {
    props: {
      products,
      message: "",
    },
  };
};

// export const getStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

HomePage.propTypes = {
  message: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

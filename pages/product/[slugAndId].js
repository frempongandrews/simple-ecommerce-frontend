import { getProductById } from "../../lib/api";

const ProductPage = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <h1>Product Page</h1>
    </div>
  );
};

export const getStaticProps = async (ctx) => {
  console.log("*******Product page context", ctx);
  const { slugAndId } = ctx.params;
  const slugAndIdArr = slugAndId.split("-");
  const productId = slugAndIdArr[slugAndIdArr.length - 1];
  console.log("*******ProductId", productId);
  // fetch product here
  const productRes = await getProductById(productId);
  // error
  if (productRes.status >= 400) {
    return {
      props: {
        product: null,
        message: productRes?.data?.message || "Error fetching product",
      },
    };
  }

  const product = productRes.data.product;
  return {
    props: {
      product,
      message: "",
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default ProductPage;

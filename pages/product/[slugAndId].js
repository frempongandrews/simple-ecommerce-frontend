import PropTypes from "prop-types";
import { getProductById } from "../../lib/api";
import Product from "../../components/Product";

const ProductPage = ({ product, message }) => {
  return (
    <>
      <Product product={product} message={message} />
    </>
  );
};

export const getStaticProps = async (ctx) => {
  const { slugAndId } = ctx.params;
  const slugAndIdArr = slugAndId.split("-");
  const productId = slugAndIdArr[slugAndIdArr.length - 1];

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

ProductPage.propTypes = {
  // product can be null
  product: PropTypes.object,
  // message can be empty string
  message: PropTypes.string,
};

export default ProductPage;

import cookie from "cookie";

export const generateShorterProductTitle = (title) => {
  if (title?.length > 42) {
    return title.slice(0, 42) + "...";
  }
  return title;
};

export const generateShortProductTitle = ({ title, length }) => {
  if (title?.length > length) {
    return title.slice(0, length) + "...";
  }
  return title;
};

export const centsToPounds = (cents) => {
  return Math.round(cents / 100).toFixed(2);
};

export const calculateTotal = (cartArr) => {
  let total = 0;
  cartArr.forEach((prodObj) => {
    total = total + prodObj.product.price * prodObj.quantity;
  });
  return centsToPounds(total);
};

export const getCartItemsNumber = (cartArr) => {
  let total = 0;
  cartArr.forEach((prodObj) => {
    total = total + prodObj.quantity;
  });
  return total;
};

export const checkUserAuthStatus = async (context) => {
  const { req } = context;
  const cookieInHeaders = req.headers.cookie || "";
  const cookieObj = cookie.parse(cookieInHeaders);
  // on the server - redirect to home when user is logged in
  let isTokenPresentAndValid = false;
  if (cookieObj.hasOwnProperty("access_token")) {
    // user is logged in
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      isTokenPresentAndValid,
    },
  };
};

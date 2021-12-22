export const generateShorterProductTitle = (title) => {
  if (title?.length > 42) {
    return title.slice(0, 42) + "...";
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

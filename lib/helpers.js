export const generateShorterProductTitle = (title) => {
  if (title?.length > 42) {
    return title.slice(0, 42) + "...";
  }
  return title;
};

export const centsToPounds = (cents) => {
  return Math.round(cents / 100).toFixed(2);
};

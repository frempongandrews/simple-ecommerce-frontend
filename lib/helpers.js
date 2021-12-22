export const generateShorterProductTitle = (title) => {
  if (title?.length > 42) {
    return title.slice(0, 42) + "...";
  }
  return title;
};

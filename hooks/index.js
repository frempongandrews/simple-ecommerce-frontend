import { useRef, useEffect } from "react";
// use previous
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useScroll = () => {
  const elRef = useRef(null);
  const executeScroll = () => {
    if (elRef.current) {
      elRef.current.scrollIntoView();
    }
  };

  return [executeScroll, elRef];
};

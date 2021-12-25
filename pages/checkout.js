import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Checkout from "../components/Checkout";
import { AppContext } from "../context/AppContext";

const CheckoutPage = () => {
  const router = useRouter();
  console.log("*********router", router);
  let cartArr = [];
  if (typeof window !== "undefined") {
    cartArr = JSON.parse(window.localStorage.getItem("cart"));
  }

  useEffect(() => {
    if (cartArr.length === 0) {
      router.push("/");
    }
  }, []);

  return (
    <div style={{ minHeight: "70vh" }}>
      <Checkout cartArr={cartArr} />
    </div>
  );
};

export default CheckoutPage;

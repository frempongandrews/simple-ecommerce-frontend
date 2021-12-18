import { useEffect, useContext } from "react";
import Cart from "../components/Cart";
import { AppContext, HIDE_CART } from "../context/AppContext";

const CartPage = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({
      type: HIDE_CART,
    });
  }, []);

  return (
    <div style={{ minHeight: "70vh" }}>
      <Cart />
    </div>
  );
};

export default CartPage;

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { getStripeSessionOrderDetails } from "../lib/api";
import Link from "next/link";
import {
  calculateTotal,
  centsToPounds,
  generateShorterProductTitle,
} from "../lib/helpers";
import { AppContext, SET_CART_ARR } from "../context/AppContext";
import Loader from "../components/common/Loader";

const PaymentCompleted = () => {
  const [completedOrder, setCompletedOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { dispatch } = useContext(AppContext);

  // removing the {} from stripe session id
  // {cs_test_.......i}
  // stripeSessionID will be "" when component first mounts hence add to dependency array
  // as its value will change causing a re-render
  const stripeSessionID =
    router?.query?.session_id?.slice(1, router?.query?.session_id.length - 1) ||
    "";
  useEffect(() => {
    if (stripeSessionID) {
      getStripeSessionOrderDetails(stripeSessionID).then((res) => {
        if (res.status >= 400) {
          setErrorMessage(res.data.message);
          return;
        }
        setCompletedOrder(res.data.order);
        dispatch({
          type: SET_CART_ARR,
          cart: [],
        });
      });
    }
  }, [stripeSessionID]);

  const renderOrderItems = () => {
    const cartArr = completedOrder?.items.map((item) => {
      return {
        quantity: item.quantity,
        product: item.product,
      };
    });
    return cartArr?.map((cartItem) => {
      return (
        <tr key={cartItem.product.id}>
          <td className="product-thumbnail">
            <a href="shop-product-basic.html">
              <img src={cartItem.product.image} className="img-fluid" alt="" />
            </a>
          </td>
          <td className="product-name">
            <a href="shop-product-basic.html">
              {generateShorterProductTitle(cartItem.product.title)}
            </a>
          </td>
          <td className="product-price">
            <span className="price">
              £{centsToPounds(cartItem.product.price)}
            </span>
          </td>
          <td className="product-quantity">
            <div className="pro-qty d-inline-block mx-0">
              <select name="quantity" disabled={true}>
                <option value={cartItem.quantity}>{cartItem.quantity}</option>
              </select>
            </div>
          </td>
          <td className="total-price">
            <span className="price">£{calculateTotal([cartItem])}</span>
          </td>
        </tr>
      );
    });
  };

  if (!stripeSessionID) {
    return <Loader />;
  }

  return (
    <div style={{ minHeight: "60vh" }}>
      {/*=======  breadcrumb area =======*/}
      <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="breadcrumb-title">Order</h1>
              {/*=======  breadcrumb list  =======*/}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-list__item">
                  <Link href={`/`}>
                    <a>HOME</a>
                  </Link>
                </li>
                <li className="breadcrumb-list__item breadcrumb-list__item--active">
                  Payment successful
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=======  End of breadcrumb area =======*/}

      <div className="container" style={{ marginTop: -60, marginBottom: 40 }}>
        {errorMessage && <p>{errorMessage}</p>}
        {completedOrder && (
          <>
            <p>
              Payment succeeded - Thanks for your order. We are now processing
              your order and it will be with you in the next{" "}
              <span style={{ fontWeight: "bold" }}>2-3 business days</span>
            </p>
            <p>Order id: {completedOrder?._id}</p>
            <p>Customer details: {completedOrder?.customerDetails}</p>
            <p>Shipping address: {completedOrder?.shippingAddress}</p>
          </>
        )}
      </div>

      {completedOrder && (
        <div className="shopping-cart-area mb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-30">
                {/*=======  cart table  =======*/}
                <div className="cart-table-container">
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th className="product-name" colSpan={2}>
                          Product
                        </th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>{renderOrderItems()}</tbody>
                  </table>
                </div>
                {/*=======  End of cart table  =======*/}
              </div>

              <div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7">
                <div className="cart-calculation-area">
                  <h2 className="mb-40">TOTAL</h2>
                  <table className="cart-calculation-table mb-30">
                    <tbody>
                      <tr>
                        <th>TOTAL</th>
                        <td className="total">
                          £{calculateTotal(completedOrder?.items || [])}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCompleted;

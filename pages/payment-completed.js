import { useEffect, useState, useContext } from "react";
import useIsMounted from "react-is-mounted-hook";
import { useRouter } from "next/router";
import { getStripeSessionOrderDetails } from "../lib/api";
import Link from "next/link";
import {
  calculateTotal,
  centsToPounds,
  generateShorterProductTitle,
} from "../lib/helpers";
import { AppContext, SET_CART_ARR } from "../context/AppContext";

const PaymentCompleted = () => {
  const isMounted = useIsMounted();
  const [completedOrder, setCompletedOrder] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { dispatch } = useContext(AppContext);
  console.log("************PaymentCompleted router", router);
  // removing the {} from stripe session id
  // {cs_test_.......i}
  // stripeSessionID will be "" when component first mounts hence add to dependency array
  // as its value will change causing a re-render
  const stripeSessionID =
    router?.query?.session_id?.slice(1, router?.query?.session_id.length - 1) ||
    "";
  console.log("************PaymentCompleted stripeSessionID", stripeSessionID);
  // console.log("************PaymentCompleted stripeSessionId", stripeSessionId);
  useEffect(() => {
    // todo: get stripe session id from backend => gets customerId and orderId =>
    // todo: return customer and order to this page
    if (stripeSessionID) {
      getStripeSessionOrderDetails(stripeSessionID).then((res) => {
        console.log("**********PaymentCompleted Res", res);
        if (res.status >= 400) {
          setErrorMessage(res.data.message);
          return;
        }
        if (isMounted()) {
          setCompletedOrder(res.data.order);
          dispatch({
            type: SET_CART_ARR,
            cart: [],
          });
        }
      });
    }
  }, [isMounted, stripeSessionID]);

  const renderOrderItems = () => {
    const cartArr = completedOrder?.items.map((item) => {
      return {
        quantity: item.quantity,
        product: item.product,
      };
    });
    return cartArr?.map((cartItem) => {
      console.log("**********cartItem", cartItem);
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
            {/*<span className="product-variation">Color: Black</span>*/}
          </td>
          <td className="product-price">
            <span className="price">
              £{centsToPounds(cartItem.product.price)}
            </span>
          </td>
          <td className="product-quantity">
            <div className="pro-qty d-inline-block mx-0">
              {/*<input type="number" step={1} defaultValue={1} />*/}
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

  if (!isMounted()) {
    return null;
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

      {/*{JSON.stringify(completedOrder, null, 4)}*/}

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
                    <tbody>
                      {renderOrderItems()}

                      {/*<tr>*/}
                      {/*  <td className="product-thumbnail">*/}
                      {/*    <a href="shop-product-basic.html">*/}
                      {/*      <img*/}
                      {/*        src="assets/images/products/watch-1-1-600x800.jpg"*/}
                      {/*        className="img-fluid"*/}
                      {/*        alt=""*/}
                      {/*      />*/}
                      {/*    </a>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-name">*/}
                      {/*    <a href="shop-product-basic.html">Brown watch</a>*/}
                      {/*    <span className="product-variation">Color: Brown</span>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-price">*/}
                      {/*    <span className="price">$150.00</span>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-quantity">*/}
                      {/*    <div className="pro-qty d-inline-block mx-0">*/}
                      {/*      /!*<input type="number" step={1} defaultValue={1} />*!/*/}
                      {/*      <select name="quantity">*/}
                      {/*        <option value="1">1</option>*/}
                      {/*        <option value="2">2</option>*/}
                      {/*        <option value="3">3</option>*/}
                      {/*        <option value="4">4</option>*/}
                      {/*        <option value="5">5</option>*/}
                      {/*      </select>*/}
                      {/*    </div>*/}
                      {/*  </td>*/}
                      {/*  <td className="total-price">*/}
                      {/*    <span className="price">$250.00</span>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-remove">*/}
                      {/*    <a href="#">*/}
                      {/*      <i className="ion-android-close" />*/}
                      {/*    </a>*/}
                      {/*  </td>*/}
                      {/*</tr>*/}

                      {/*<tr>*/}
                      {/*  <td className="product-thumbnail">*/}
                      {/*    <a href="shop-product-basic.html">*/}
                      {/*      <img*/}
                      {/*        src="assets/images/products/cloth-1-1-600x800.jpg"*/}
                      {/*        className="img-fluid"*/}
                      {/*        alt=""*/}
                      {/*      />*/}
                      {/*    </a>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-name">*/}
                      {/*    <a href="shop-product-basic.html">High weist pant</a>*/}
                      {/*    <span className="product-variation">Color: Blue</span>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-price">*/}
                      {/*    <span className="price">$10.00</span>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-quantity">*/}
                      {/*    <div className="pro-qty d-inline-block mx-0">*/}
                      {/*      /!*<input*!/*/}
                      {/*      /!*  type="number"*!/*/}
                      {/*      /!*  step={1}*!/*/}
                      {/*      /!*  defaultValue={1}*!/*/}
                      {/*      /!*  min={1}*!/*/}
                      {/*      /!*  max={99}*!/*/}
                      {/*      /!*/
                      /*/}
                      {/*      <select name="quantity">*/}
                      {/*        <option value="1">1</option>*/}
                      {/*        <option value="2">2</option>*/}
                      {/*        <option value="3">3</option>*/}
                      {/*        <option value="4">4</option>*/}
                      {/*        <option value="5">5</option>*/}
                      {/*      </select>*/}
                      {/*    </div>*/}
                      {/*  </td>*/}
                      {/*  <td className="total-price">*/}
                      {/*    <span className="price">$260.00</span>*/}
                      {/*  </td>*/}
                      {/*  <td className="product-remove">*/}
                      {/*    <a href="#">*/}
                      {/*      <i className="ion-android-close" />*/}
                      {/*    </a>*/}
                      {/*  </td>*/}
                      {/*</tr>*/}
                    </tbody>
                  </table>
                </div>
                {/*=======  End of cart table  =======*/}
              </div>

              {/*<div className="col-lg-12 mb-80">*/}
              {/*  /!*=======  coupon area  =======*!/*/}
              {/*  <div className="cart-coupon-area pb-30">*/}
              {/*    <div className="row align-items-center">*/}
              {/*      <div className="col-lg-6 mb-md-30 mb-sm-30">*/}
              {/*        /!*=======  coupon form  =======*!/*/}
              {/*        <div className="lezada-form coupon-form">*/}
              {/*          /!*<form action="#">*!/*/}
              {/*          /!*  <div className="row">*!/*/}
              {/*          /!*    <div className="col-md-7 mb-sm-10">*!/*/}
              {/*          /!*      <input*!/*/}
              {/*          /!*        type="text"*!/*/}
              {/*          /!*        placeholder="Enter your coupon code"*!/*/}
              {/*          /!*      />*!/*/}
              {/*          /!*    </div>*!/*/}
              {/*          /!*    <div className="col-md-5">*!/*/}
              {/*          /!*      <button className="lezada-button lezada-button--medium">*!/*/}
              {/*          /!*        apply coupon*!/*/}
              {/*          /!*      </button>*!/*/}
              {/*          /!*    </div>*!/*/}
              {/*          /!*  </div>*!/*/}
              {/*          /!*</form>*!/*/}
              {/*        </div>*/}
              {/*        /!*=======  End of coupon form  =======*!/*/}
              {/*      </div>*/}
              {/*      <div className="col-lg-6 text-left text-lg-right">*/}
              {/*        /!*=======  update cart button  =======*!/*/}
              {/*        /!*<button className="lezada-button lezada-button--medium">*!/*/}
              {/*        /!*  update cart*!/*/}
              {/*        /!*</button>*!/*/}
              {/*        /!*=======  End of update cart button  =======*!/*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*  /!*=======  End of coupon area  =======*!/*/}
              {/*</div>*/}
              <div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7">
                <div className="cart-calculation-area">
                  <h2 className="mb-40">TOTAL</h2>
                  <table className="cart-calculation-table mb-30">
                    <tbody>
                      {/*<tr>*/}
                      {/*  <th>SUBTOTAL</th>*/}
                      {/*  <td className="subtotal">£{calculateTotal(cartArr)}</td>*/}
                      {/*</tr>*/}
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

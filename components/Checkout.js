import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import {
  calculateTotal,
  generateShortProductTitle,
  centsToPounds,
} from "../lib/helpers";
import { checkoutCart } from "../lib/api";
import { AppContext } from "../context/AppContext";

// shop-checkout.html

const Checkout = ({ cartArr }) => {
  const appState = useContext(AppContext);
  const currentUser = appState?.state?.currentUser;
  const [state, setState] = useState({
    firstName: "Andrews",
    lastName: "Frempong",
    email: `${currentUser?.email || "frempongandrews@yahoo.com"}`,
    phoneNumber: "074123456789",
    addressLine1: "City tower",
    addressLine2: "flat 23",
    city: "Manchester",
    country: "U.K",
    postcode: "M1 4AJ",
    // for res from server
    error: null,
    message: "",
  });

  useEffect(() => {}, [currentUser]);

  const renderCartItems = () => {
    return cartArr.map((cartItem) => {
      return (
        <li key={cartItem.product.id}>
          {generateShortProductTitle({
            title: cartItem.product.title,
            length: 30,
          })}{" "}
          <span>x {cartItem.quantity}</span>{" "}
          <span>{centsToPounds(cartItem.product.price)}</span>
        </li>
      );
    });
  };

  const onInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onCheckout = async () => {
    const cart = JSON.parse(window.localStorage.getItem("cart"));
    const inputValues = {
      ...state,
    };
    delete inputValues.error;
    delete inputValues.message;

    const res = await checkoutCart({ cart, inputValues });
    const url = res?.data?.url;
    window.location = url;
  };
  return (
    <>
      {/*=======  breadcrumb area =======*/}
      <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="breadcrumb-title">Checkout</h1>
              {/*=======  breadcrumb list  =======*/}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-list__item">
                  <Link href={`/`}>
                    <a>HOME</a>
                  </Link>
                </li>
                <li className="breadcrumb-list__item breadcrumb-list__item--active">
                  checkout
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=======  End of breadcrumb area =======*/}

      {/*=============================================
	=            checkout page content         =
	=============================================*/}
      <div className="checkout-page-area mb-130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="lezada-form">
                {/* Checkout Form s*/}
                <form className="checkout-form">
                  <div className="row row-40">
                    <div className="col-lg-7 mb-20">
                      {/* Shipping Address */}
                      <div id="billing-form" className="mb-40">
                        <h4 className="checkout-title">Shipping Address</h4>
                        <div className="row">
                          <div className="col-md-6 col-12 mb-20">
                            <label>First Name*</label>
                            <input
                              type="text"
                              placeholder="First Name"
                              name="firstName"
                              value={state.firstName}
                              onChange={onInputChange}
                            />
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Last Name*</label>
                            <input
                              type="text"
                              placeholder="Last Name"
                              name="lastName"
                              value={state.lastName}
                              onChange={onInputChange}
                            />
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Email Address*</label>
                            <input
                              type="email"
                              placeholder="Email Address"
                              name="email"
                              value={state.email}
                              onChange={onInputChange}
                            />
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Phone no</label>
                            <input
                              type="text"
                              placeholder="Phone number"
                              name="phoneNumber"
                              value={state.phoneNumber}
                              onChange={onInputChange}
                            />
                          </div>

                          <div className="col-12 mb-20">
                            <label>Address*</label>
                            <input
                              type="text"
                              placeholder="Address line 1"
                              name="addressLine1"
                              value={state.addressLine1}
                              onChange={onInputChange}
                            />
                            <input
                              type="text"
                              placeholder="Address line 2"
                              style={{ marginTop: 30 }}
                              name="addressLine2"
                              value={state.addressLine2}
                              onChange={onInputChange}
                            />
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Country*</label>
                            <select className="nice-select">
                              <option>United Kingdom</option>
                            </select>
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Town/City*</label>
                            <input
                              type="text"
                              placeholder="Town/City"
                              name="city"
                              value={state.city}
                              onChange={onInputChange}
                            />
                          </div>

                          <div className="col-md-6 col-12 mb-20">
                            <label>PostCode*</label>
                            <input
                              type="text"
                              placeholder="PostCode"
                              name="postCode"
                              value={state.postcode}
                              onChange={onInputChange}
                            />
                          </div>
                          <div className="col-12 mb-20"></div>
                        </div>
                      </div>
                      {/* End Shipping Address */}
                    </div>
                    <div className="col-lg-5">
                      <div className="row">
                        {/* Cart Total */}
                        <div className="col-12 mb-60">
                          <h4 className="checkout-title">Cart Total</h4>
                          <div className="checkout-cart-total">
                            <h4>
                              Product <span>Total</span>
                            </h4>
                            <ul>{renderCartItems()}</ul>
                            <p>
                              Sub Total <span>??{calculateTotal(cartArr)}</span>
                            </p>
                            <p>
                              Shipping Fee <span>Free</span>
                            </p>
                            <h4>
                              Grand Total{" "}
                              <span>??{calculateTotal(cartArr)}</span>
                            </h4>
                          </div>
                        </div>
                        {/* Payment Method */}
                        <div className="col-12">
                          <button
                            type="button"
                            className="lezada-button lezada-button--medium mt-30"
                            style={{ position: "absolute", right: 15 }}
                            onClick={onCheckout}
                          >
                            Place order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of checkout page content  ======*/}
    </>
  );
};

Checkout.propTypes = {
  cartArr: PropTypes.array.isRequired,
};

export default Checkout;

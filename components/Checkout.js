import Link from "next/link";
import PropTypes from "prop-types";
import {
  calculateTotal,
  generateShortProductTitle,
  centsToPounds,
} from "../lib/helpers";

// shop-checkout.html

const Checkout = ({ cartArr }) => {
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
                            <input type="text" placeholder="First Name" />
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Last Name*</label>
                            <input type="text" placeholder="Last Name" />
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email Address" />
                          </div>
                          <div className="col-md-6 col-12 mb-20">
                            <label>Phone no*</label>
                            <input type="text" placeholder="Phone number" />
                          </div>
                          {/*<div className="col-12 mb-20">*/}
                          {/*  <label>Company Name</label>*/}
                          {/*  <input type="text" placeholder="Company Name" />*/}
                          {/*</div>*/}
                          <div className="col-12 mb-20">
                            <label>Address*</label>
                            <input type="text" placeholder="Address line 1" />
                            <input
                              type="text"
                              placeholder="Address line 2"
                              style={{ marginTop: 30 }}
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
                            <input type="text" placeholder="Town/City" />
                          </div>
                          {/*<div className="col-md-6 col-12 mb-20">*/}
                          {/*  <label>County*</label>*/}
                          {/*  <input type="text" placeholder="County" />*/}
                          {/*</div>*/}
                          <div className="col-md-6 col-12 mb-20">
                            <label>PostCode*</label>
                            <input type="text" placeholder="PostCode" />
                          </div>
                          <div className="col-12 mb-20">
                            {/*<div className="check-box">*/}
                            {/*  <input type="checkbox" id="create_account" />*/}
                            {/*  <label htmlFor="create_account">*/}
                            {/*    Create an Acount?*/}
                            {/*  </label>*/}
                            {/*</div>*/}
                            {/*<div className="check-box">*/}
                            {/*  <input*/}
                            {/*    type="checkbox"*/}
                            {/*    id="shiping_address"*/}
                            {/*    data-shipping*/}
                            {/*  />*/}
                            {/*  <label htmlFor="shiping_address">*/}
                            {/*    Ship to Different Address*/}
                            {/*  </label>*/}
                            {/*</div>*/}
                          </div>
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
                            <ul>
                              {renderCartItems()}
                              {/*<li>*/}
                              {/*  Cillum dolore tortor nisl X 01{" "}*/}
                              {/*  <span>$25.00</span>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*  Auctor gravida pellentesque X 02{" "}*/}
                              {/*  <span>$50.00</span>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*  Condimentum posuere consectetur X 01{" "}*/}
                              {/*  <span>$29.00</span>*/}
                              {/*</li>*/}
                              {/*<li>*/}
                              {/*  Habitasse dictumst elementum X 01{" "}*/}
                              {/*  <span>$10.00</span>*/}
                              {/*</li>*/}
                            </ul>
                            <p>
                              Sub Total <span>£{calculateTotal(cartArr)}</span>
                            </p>
                            <p>
                              Shipping Fee <span>Free</span>
                            </p>
                            <h4>
                              Grand Total{" "}
                              <span>£{calculateTotal(cartArr)}</span>
                            </h4>
                          </div>
                        </div>
                        {/* Payment Method */}
                        <div className="col-12">
                          {/*<h4 className="checkout-title">Payment Method</h4>*/}
                          {/*<div className="checkout-payment-method">*/}
                          {/*  <div className="single-method">*/}
                          {/*    <input*/}
                          {/*      type="radio"*/}
                          {/*      id="payment_check"*/}
                          {/*      name="payment-method"*/}
                          {/*      defaultValue="check"*/}
                          {/*    />*/}
                          {/*    <label htmlFor="payment_check">*/}
                          {/*      Check Payment*/}
                          {/*    </label>*/}
                          {/*    <p data-method="check">*/}
                          {/*      Please send a Check to Store name with Store*/}
                          {/*      Street, Store Town, Store State, Store Postcode,*/}
                          {/*      Store Country.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="single-method">*/}
                          {/*    <input*/}
                          {/*      type="radio"*/}
                          {/*      id="payment_bank"*/}
                          {/*      name="payment-method"*/}
                          {/*      defaultValue="bank"*/}
                          {/*    />*/}
                          {/*    <label htmlFor="payment_bank">*/}
                          {/*      Direct Bank Transfer*/}
                          {/*    </label>*/}
                          {/*    <p data-method="bank">*/}
                          {/*      Please send a Check to Store name with Store*/}
                          {/*      Street, Store Town, Store State, Store Postcode,*/}
                          {/*      Store Country.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="single-method">*/}
                          {/*    <input*/}
                          {/*      type="radio"*/}
                          {/*      id="payment_cash"*/}
                          {/*      name="payment-method"*/}
                          {/*      defaultValue="cash"*/}
                          {/*    />*/}
                          {/*    <label htmlFor="payment_cash">*/}
                          {/*      Cash on Delivery*/}
                          {/*    </label>*/}
                          {/*    <p data-method="cash">*/}
                          {/*      Please send a Check to Store name with Store*/}
                          {/*      Street, Store Town, Store State, Store Postcode,*/}
                          {/*      Store Country.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="single-method">*/}
                          {/*    <input*/}
                          {/*      type="radio"*/}
                          {/*      id="payment_paypal"*/}
                          {/*      name="payment-method"*/}
                          {/*      defaultValue="paypal"*/}
                          {/*    />*/}
                          {/*    <label htmlFor="payment_paypal">Paypal</label>*/}
                          {/*    <p data-method="paypal">*/}
                          {/*      Please send a Check to Store name with Store*/}
                          {/*      Street, Store Town, Store State, Store Postcode,*/}
                          {/*      Store Country.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="single-method">*/}
                          {/*    <input*/}
                          {/*      type="radio"*/}
                          {/*      id="payment_payoneer"*/}
                          {/*      name="payment-method"*/}
                          {/*      defaultValue="payoneer"*/}
                          {/*    />*/}
                          {/*    <label htmlFor="payment_payoneer">Payoneer</label>*/}
                          {/*    <p data-method="payoneer">*/}
                          {/*      Please send a Check to Store name with Store*/}
                          {/*      Street, Store Town, Store State, Store Postcode,*/}
                          {/*      Store Country.*/}
                          {/*    </p>*/}
                          {/*  </div>*/}
                          {/*  <div className="single-method">*/}
                          {/*    <input type="checkbox" id="accept_terms" />*/}
                          {/*    <label htmlFor="accept_terms">*/}
                          {/*      I’ve read and accept the terms &amp; conditions*/}
                          {/*    </label>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                          <button
                            type="button"
                            className="lezada-button lezada-button--medium mt-30"
                            style={{ position: "absolute", right: 15 }}
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

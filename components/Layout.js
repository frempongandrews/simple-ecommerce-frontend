import { useContext, useEffect, useState } from "react";
import { AiFillInfoCircle, AiFillCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppContext,
  HIDE_CART,
  LOGOUT_USER,
  REMOVE_PRODUCT_FROM_CART,
  SET_SHOW_INFO,
  SHOW_CART,
} from "../context/AppContext";
import {
  centsToPounds,
  generateShorterProductTitle,
  calculateTotal,
  getCartItemsNumber,
} from "../lib/helpers";
import "react-toastify/dist/ReactToastify.min.css";
import { logoutUser } from "../lib/api";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  const { showCart, cartArr, showInfo } = state;
  const currentUser = state.currentUser;
  const router = useRouter();
  const [notificationMessage, setNotificationMessage] = useState("");
  useEffect(() => {
    window.addEventListener("offline", handleInternetConnectionChange);
    window.addEventListener("online", handleInternetConnectionChange);

    const handleRouteChangeCompleted = () => {
      dispatch({
        type: HIDE_CART,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChangeCompleted);

    // If the component is unmounted, unsubscribe
    // from the event:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeCompleted);
      window.removeEventListener("offline", handleInternetConnectionChange);
      window.removeEventListener("online", handleInternetConnectionChange);
    };
  }, []);

  const handleInternetConnectionChange = (e) => {
    if (e.type === "offline") {
      setNotificationMessage(
        "You are offline. This page is cached and will remain available."
      );
      return;
    }
    if (e.type === "online") {
      setNotificationMessage("");
      window.location.reload();
    }
  };

  const onHideCart = () => {
    dispatch({
      type: HIDE_CART,
    });
  };
  const onShowCart = () => {
    if (cartArr.length > 0 && router.pathname !== "/checkout") {
      dispatch({
        type: SHOW_CART,
      });
      return;
    }
    router.push("/cart");
  };

  const onRemoveProductFromCart = (productId) => {
    if (cartArr.length === 1) {
      dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        productId,
      });
      dispatch({
        type: HIDE_CART,
      });
      return;
    }

    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      productId,
    });
  };

  const renderCartItems = () => {
    return cartArr.map((prodObj) => {
      return (
        <div className="single-cart-product" key={prodObj?.product?.id}>
          <span
            className="cart-close-icon"
            onClick={() => onRemoveProductFromCart(prodObj.product.id)}
          >
            <a>
              <i className="ti-close" />
            </a>
          </span>
          <div className="image">
            <Link href={`/product/${prodObj?.product?.id}`}>
              <a>
                <Image
                  src={`${prodObj?.product?.publicImage}`}
                  width={76}
                  height={98}
                  objectFit="contain"
                />
                {/* <img
                  src={`${prodObj?.product?.image}`}
                  className="img-fluid"
                  alt=""
                /> */}
              </a>
            </Link>
          </div>
          <div className="content">
            <h5>
              <Link href={`/product/${prodObj?.product?.id}`}>
                <a>{generateShorterProductTitle(prodObj?.product?.title)}</a>
              </Link>
            </h5>
            <p>
              <span className="cart-count">{prodObj.quantity} x </span>{" "}
              <span className="discounted-price">
                ??
                {(
                  prodObj.quantity *
                  parseInt(centsToPounds(prodObj.product.price))
                ).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      );
    });
  };

  const onLogoutUser = async () => {
    const res = await logoutUser();
    if (res.status >= 400 && res.status < 500) {
      toast.error(res?.data?.message || "Error logging out");
      return;
    }
    if (res.status >= 500) {
      toast.error(
        res?.data?.message ||
          "Error logging out - Please check your internet connection"
      );
      return;
    }
    if (router.pathname === "/profile") {
      router.push("/");
    }
    toast.success(res?.data?.message || "Successfully logged out");
    dispatch({
      type: LOGOUT_USER,
    });
  };
  return (
    <div>
      {notificationMessage && (
        <div
          style={{
            textAlign: "center",
            padding: "10px 0",
            backgroundColor: "#e3e8ee",
          }}
        >
          {notificationMessage}
        </div>
      )}

      {!showInfo && (
        <AiFillInfoCircle
          style={{
            fontSize: 20,
            cursor: "pointer",
            position: "absolute",
            top: 20,
            right: 50,
          }}
          onClick={() => dispatch({ type: SET_SHOW_INFO, payload: true })}
        />
      )}

      {showInfo && (
        <div
          className="show-info-container"
          style={{
            textAlign: "center",
            padding: "10px 0",
            position: "sticky",
            top: 0,
            zIndex: 100,
            width: "100%",
            backgroundColor: "#e3e8ee",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <div>
              <p>Card details for stripe checkout:</p>
              <p>
                <span>Card Number: </span>
                <b>4242 4242 4242 4242</b>
              </p>
              <p>
                <span>CVC: </span>
                <b>123</b>
              </p>
              <p>
                <span>Expiry: </span>
                <b>04/24</b>
              </p>
            </div>
          </div>

          <span>
            <AiFillCloseCircle
              style={{
                fontSize: 20,
                cursor: "pointer",
                position: "absolute",
                right: 30,
                top: "40%",
              }}
              onClick={() => dispatch({ type: SET_SHOW_INFO, payload: false })}
            />
          </span>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Elegant store</title>
        <meta name="description" content="elegant commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <base href="/" />
        <link rel="icon" href="assets/images/favicon.png" />
        {/* CSS ================================ */}
        {/* Bootstrap CSS */}
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        {/* FontAwesome CSS */}
        <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
        {/* Ionicons CSS */}
        <link href="assets/css/ionicons.min.css" rel="stylesheet" />
        {/* Themify CSS */}
        <link href="assets/css/themify-icons.css" rel="stylesheet" />
        {/* Plugins CSS */}
        <link href="assets/css/plugins.css" rel="stylesheet" />
        {/* Helper CSS */}
        <link href="assets/css/helper.css" rel="stylesheet" />
        {/* Main CSS */}
        <link href="assets/css/main.css" rel="stylesheet" />
      </Head>
      <header className="header header-nontransparent-overlay-menu header-sticky static-header">
        {/*=======  header bottom  =======*/}
        <div className="header-bottom pt-80 pb-40">
          <div className="container wide">
            {/*=======  header bottom container  =======*/}
            <div className="header-bottom-container">
              {/*=======  logo with off canvas  =======*/}
              <div className="logo-with-offcanvas d-flex">
                {/*=======  overlay menu icon  =======*/}
                <div className="overlay-menu-icon mr-20 d-lg-block">
                  <Link href={`/`}>
                    <a>
                      <h2>MINIMAL SHOP</h2>
                    </a>
                  </Link>
                </div>
                {/*=======  End of overlay menu icon  =======*/}
              </div>
              {/*=======  End of logo with off canvas  =======*/}
              {/*=======  header bottom navigation  =======*/}
              {/*=======  End of header bottom navigation  =======*/}
              {/*=======  logo   =======*/}
              <div className="logo"></div>
              {/*=======  End of logo   =======*/}
              {/*=======  headeer right container  =======*/}
              <div className="header-right-container">
                {/*=======  header right icons  =======*/}
                <div className="header-right-icons d-flex justify-content-end align-items-center h-100">
                  {/*=======  single-icon  =======*/}
                  <div
                    className="single-icon user-login"
                    style={{ position: "relative" }}
                  >
                    {currentUser !== null && (
                      <i
                        className="ion-android-person"
                        style={{
                          marginRight: 10,
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                        title={currentUser?.email}
                      />
                    )}

                    {currentUser !== null && (
                      <div className="user-sub-menu">
                        <Link href={`/profile`}>
                          <a>
                            <p className="greeting">Hi, {currentUser?.email}</p>
                          </a>
                        </Link>
                        <ul>
                          <li onClick={onLogoutUser}>logout</li>
                        </ul>
                      </div>
                    )}

                    {!currentUser && (
                      <Link href={`/auth`}>
                        <a>Register / Login</a>
                      </Link>
                    )}
                  </div>
                  {/*=======  End of single-icon  =======*/}

                  {/*=======  single-icon  =======*/}
                  <div className="single-icon cart" onClick={onShowCart}>
                    <a id="offcanvas-cart-icon">
                      <i className="ion-ios-cart" />
                      <span className="count">
                        {getCartItemsNumber(cartArr)}
                      </span>
                    </a>
                  </div>
                  {/*=======  End of single-icon  =======*/}
                </div>
                {/*=======  End of header right icons  =======*/}
              </div>
              {/*=======  End of headeer right container  =======*/}
            </div>
            {/*=======  End of header bottom container  =======*/}
          </div>
        </div>
        {/*=======  End of header bottom  =======*/}
      </header>

      {children}

      {/*=============================================
	=            footer area         =
	=============================================*/}
      <div className="footer-container footer-one pt-100 pb-50 ">
        <div className="container wide">
          <div className="row">
            <div className="col footer-single-widget">
              {/*=======  copyright text  =======*/}
              {/*=======  logo  =======*/}
              <div className="logo">
                <h3>MINIMAL SHOP</h3>
              </div>
              {/*=======  End of logo  =======*/}
              {/*=======  copyright text  =======*/}
              <div className="copyright-text">
                <p>
                  {" "}
                  ?? 2021. <span>All Rights Reserved</span>
                </p>
              </div>
              {/*=======  End of copyright text  =======*/}
              {/*=======  End of copyright text  =======*/}
            </div>
            <div className="col footer-single-widget">
              {/*=======  single widget  =======*/}
              <h5 className="widget-title">ABOUT</h5>
              {/*=======  footer navigation container  =======*/}
              <div className="footer-nav-container">
                <nav>
                  <ul>
                    <li>
                      <a>About us</a>
                    </li>
                    <li>
                      <a>Store location</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                    <li>
                      <a>Orders tracking</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*=======  End of footer navigation container  =======*/}
              {/*=======  single widget  =======*/}
            </div>
            <div className="col footer-single-widget">
              {/*=======  single widget  =======*/}
              <h5 className="widget-title">USEFUL LINKS</h5>
              {/*=======  footer navigation container  =======*/}
              <div className="footer-nav-container">
                <nav>
                  <ul>
                    <li>
                      <a>Returns</a>
                    </li>
                    <li>
                      <a>Support Policy</a>
                    </li>
                    <li>
                      <a>Size guide</a>
                    </li>
                    <li>
                      <a>FAQs</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*=======  End of footer navigation container  =======*/}
              {/*=======  single widget  =======*/}
            </div>
            <div className="col footer-single-widget">
              {/*=======  single widget  =======*/}
              <h5 className="widget-title">FOLLOW US ON</h5>
              {/*=======  footer navigation container  =======*/}
              <div className="footer-nav-container footer-social-links">
                <nav>
                  <ul>
                    <li>
                      <a href="//twitter.com" target="_blank">
                        <i className="fa fa-twitter" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="//facebook.com" target="_blank">
                        {" "}
                        <i className="fa fa-facebook" /> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="//instagram.com" target="_blank">
                        <i className="fa fa-instagram" /> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="//youtube.com" target="_blank">
                        {" "}
                        <i className="fa fa-youtube" /> Youtube
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*=======  End of footer navigation container  =======*/}
              {/*=======  single widget  =======*/}
            </div>
            <div className="col footer-single-widget">
              {/*=======  single widget  =======*/}
              <div className="footer-subscription-widget">
                <h2 className="footer-subscription-title">Follow us</h2>
                <p className="subscription-subtitle">
                  Follow our social media to receive news on update.
                </p>
              </div>
              {/*=======  End of single widget  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of footer area  ======*/}

      <div>
        {/*=============================================
	=            overlay items         =
    =============================================*/}
        {/*=======  overlay-navigation-menu  =======*/}
        <div
          className="overlay-navigation-menu overlay-navigation-inactive"
          id="overlay-navigation-menu"
        >
          {/*=======  close icon  =======*/}
          <span className="close-icon overlay-menu-close-icon">
            <a href="#" id="overlay-menu-close-icon">
              <i className="ti-close" />
            </a>
          </span>
          {/*=======  End of close icon  =======*/}
        </div>
        {/*=======  End of overlay-navigation-menu  =======*/}

        {/*=======  wishlist overlay  =======*/}
        <div className="wishlist-overlay" id="wishlist-overlay">
          <div className="wishlist-overlay-close inactive" />
          <div className="wishlist-overlay-content">
            {/*=======  close icon  =======*/}
            <span className="close-icon" id="wishlist-close-icon">
              <a href="#">
                <i className="ion-android-close" />
              </a>
            </span>

            {/*=======  End of offcanvas wishlist content container   =======*/}
          </div>
        </div>
        {/*=======  End of wishlist overlay  =======*/}
        {/*=======  cart overlay  =======*/}
        <div
          className={`${showCart && "active-cart-overlay"} cart-overlay`}
          id="cart-overlay"
        >
          <div
            className={`cart-overlay-close ${showCart ? "active" : "inactive"}`}
            onClick={onHideCart}
          />
          <div className="cart-overlay-content">
            {/*=======  close icon  =======*/}
            <span
              className="close-icon"
              id="cart-close-icon"
              onClick={onHideCart}
            >
              <a>
                <i className="ion-android-close" />
              </a>
            </span>
            {/*=======  End of close icon  =======*/}
            {/*=======  offcanvas cart content container  =======*/}
            <div className="offcanvas-cart-content-container">
              <h3 className="cart-title">Cart</h3>
              <div className="cart-product-wrapper">
                <div className="cart-product-container  ps-scroll">
                  {renderCartItems()}
                </div>
                {/*=======  subtotal calculation  =======*/}
                <p className="cart-subtotal">
                  <span className="subtotal-title">Subtotal:</span>
                  <span className="subtotal-amount">
                    ??{calculateTotal(cartArr)}
                  </span>
                </p>
                {/*=======  End of subtotal calculation  =======*/}
                {/*=======  cart buttons  =======*/}
                <div className="cart-buttons">
                  <Link href={`/cart`}>
                    <a>view cart</a>
                  </Link>
                  {/*<Link>*/}
                  {/*  <a href="shop-checkout.html">checkout</a>*/}
                  {/*</Link>*/}
                </div>
                {/*=======  End of cart buttons  =======*/}
                {/*=======  free shipping text  =======*/}
                <p className="free-shipping-text">
                  Free Shipping on All Orders!
                </p>
                {/*=======  End of free shipping text  =======*/}
              </div>
            </div>
            {/*=======  End of offcanvas cart content container   =======*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

import { useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppContext,
  HIDE_CART,
  REMOVE_PRODUCT_FROM_CART,
  SHOW_CART,
} from "../context/AppContext";
import {
  centsToPounds,
  generateShorterProductTitle,
  calculateTotal,
  getCartItemsNumber,
} from "../lib/helpers";

const Layout = ({ children }) => {
  console.log("**********centsToPounds ==> ", centsToPounds(1000));
  const { state, dispatch } = useContext(AppContext);
  const { showCart, cartArr } = state;
  const router = useRouter();
  console.log("*********State", state);

  useEffect(() => {
    const handleRouteChangeCompleted = () => {
      dispatch({
        type: HIDE_CART,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChangeCompleted);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeCompleted);
    };
  }, []);

  const onHideCart = () => {
    dispatch({
      type: HIDE_CART,
    });
  };
  const onShowCart = () => {
    if (cartArr.length > 0) {
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
                <img
                  src={`${prodObj?.product?.image}`}
                  className="img-fluid"
                  alt=""
                />
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
                £
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
  return (
    <div>
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
        {/* Modernizer JS */}
        {/*<script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>*/}
      </Head>
      <header className="header header-nontransparent-overlay-menu header-sticky static-header">
        {/*=======  header bottom  =======*/}
        <div className="header-bottom pt-40 pb-40">
          <div className="container wide">
            {/*=======  header bottom container  =======*/}
            <div className="header-bottom-container">
              {/*=======  logo with off canvas  =======*/}
              <div className="logo-with-offcanvas d-flex">
                {/*=======  overlay menu icon  =======*/}
                <div className="overlay-menu-icon mr-20 d-lg-block">
                  {/*<a href="#" id="overlay-menu-icon">*/}
                  {/*  <i className="ion-navicon" />*/}
                  {/*</a>*/}
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
              <div className="logo">
                {/*<Link href={`/`}>*/}
                {/*  <a>*/}
                {/*    <img*/}
                {/*      src="assets/images/logo.png"*/}
                {/*      className="img-fluid"*/}
                {/*      alt=""*/}
                {/*    />*/}
                {/*  </a>*/}
                {/*</Link>*/}
              </div>
              {/*=======  End of logo   =======*/}
              {/*=======  headeer right container  =======*/}
              <div className="header-right-container">
                {/*=======  header right icons  =======*/}
                <div className="header-right-icons d-flex justify-content-end align-items-center h-100">
                  {/*=======  single-icon  =======*/}
                  {/*<div className="single-icon search">*/}
                  {/*  <a href="#" id="search-icon">*/}
                  {/*    <i className="ion-ios-search-strong" />*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                  {/*=======  End of single-icon  =======*/}
                  {/*=======  single-icon  =======*/}
                  <div className="single-icon user-login">
                    <Link href={`/auth`}>
                      <a>
                        {/*<i className="ion-android-person" />*/}
                        Register / Login
                      </a>
                    </Link>
                  </div>
                  {/*=======  End of single-icon  =======*/}
                  {/*=======  single-icon  =======*/}
                  {/*<div className="single-icon wishlist">*/}
                  {/*  <a href="#" id="offcanvas-wishlist-icon">*/}
                  {/*    <i className="ion-android-favorite-outline" />*/}
                  {/*    <span className="count">2</span>*/}
                  {/*  </a>*/}
                  {/*</div>*/}
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
                {/*<img*/}
                {/*  src="assets/images/logo.png"*/}
                {/*  className="img-fluid"*/}
                {/*  alt=""*/}
                {/*/>*/}
                <h3>MINIMAL SHOP</h3>
              </div>
              {/*=======  End of logo  =======*/}
              {/*=======  copyright text  =======*/}
              <div className="copyright-text">
                <p>
                  {" "}
                  © 2021. <span>All Rights Reserved</span>
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
                <h2 className="footer-subscription-title">Subscribe.</h2>
                <p className="subscription-subtitle">
                  Follow our social media to receive news on update.
                </p>
                {/*=======  subscription form  =======*/}
                {/*<div className="subscription-form">*/}
                {/*  <form id="mc-form" className="mc-form">*/}
                {/*    <input*/}
                {/*      type="email"*/}
                {/*      placeholder="Your email address"*/}
                {/*      required*/}
                {/*    />*/}
                {/*    <button type="submit">*/}
                {/*      <i className="ion-ios-arrow-thin-right" />*/}
                {/*    </button>*/}
                {/*  </form>*/}
                {/*</div>*/}
                {/*=======  End of subscription form  =======*/}
                {/* mailchimp-alerts Start */}
                {/*<div className="mailchimp-alerts">*/}
                {/*  <div className="mailchimp-submitting" />*/}
                {/*  /!* mailchimp-submitting end *!/*/}
                {/*  <div className="mailchimp-success" />*/}
                {/*  /!* mailchimp-success end *!/*/}
                {/*  <div className="mailchimp-error" />*/}
                {/*  /!* mailchimp-error end *!/*/}
                {/*</div>*/}
                {/* mailchimp-alerts end */}
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
            {/*=======  End of close icon  =======*/}
            {/*=======  offcanvas wishlist content container  =======*/}
            {/*<div className="offcanvas-cart-content-container">*/}
            {/*  <h3 className="cart-title">Wishlist</h3>*/}
            {/*  <div className="cart-product-wrapper">*/}
            {/*    <div className="cart-product-container  ps-scroll">*/}
            {/*      /!*=======  single cart product  =======*!/*/}
            {/*      <div className="single-cart-product">*/}
            {/*        <span className="cart-close-icon">*/}
            {/*          <a>*/}
            {/*            <i className="ti-close" />*/}
            {/*          </a>*/}
            {/*        </span>*/}
            {/*        <div className="image">*/}
            {/*          <a href="shop-product-basic.html">*/}
            {/*            <img*/}
            {/*              src="assets/images/cart-product-image/01.jpg"*/}
            {/*              className="img-fluid"*/}
            {/*              alt=""*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*        <div className="content">*/}
            {/*          <h5>*/}
            {/*            <a href="shop-product-basic.html">*/}
            {/*              Dark Brown Leather Watch*/}
            {/*            </a>*/}
            {/*          </h5>*/}
            {/*          <p>*/}
            {/*            <span className="main-price discounted">$200.00</span>{" "}*/}
            {/*            <span className="discounted-price">$180.00</span>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      /!*=======  End of single cart product  =======*!/*/}
            {/*      /!*=======  single cart product  =======*!/*/}
            {/*      <div className="single-cart-product">*/}
            {/*        <span className="cart-close-icon">*/}
            {/*          <a href="#">*/}
            {/*            <i className="ti-close" />*/}
            {/*          </a>*/}
            {/*        </span>*/}
            {/*        <div className="image">*/}
            {/*          <a href="shop-product-basic.html">*/}
            {/*            <img*/}
            {/*              src="assets/images/cart-product-image/02.jpg"*/}
            {/*              className="img-fluid"*/}
            {/*              alt=""*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*        <div className="content">*/}
            {/*          <h5>*/}
            {/*            <a href="shop-product-basic.html">Dining Chair</a>*/}
            {/*          </h5>*/}
            {/*          <p>*/}
            {/*            <span className="main-price discounted">$300.00</span>{" "}*/}
            {/*            <span className="discounted-price">$220.00</span>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      /!*=======  End of single cart product  =======*!/*/}
            {/*      /!*=======  single cart product  =======*!/*/}
            {/*      <div className="single-cart-product">*/}
            {/*        <span className="cart-close-icon">*/}
            {/*          <a href="#">*/}
            {/*            <i className="ti-close" />*/}
            {/*          </a>*/}
            {/*        </span>*/}
            {/*        <div className="image">*/}
            {/*          <a href="shop-product-basic.html">*/}
            {/*            <img*/}
            {/*              src="assets/images/cart-product-image/03.jpg"*/}
            {/*              className="img-fluid"*/}
            {/*              alt=""*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*        <div className="content">*/}
            {/*          <h5>*/}
            {/*            <a href="shop-product-basic.html">*/}
            {/*              Creative Wooden Stand*/}
            {/*            </a>*/}
            {/*          </h5>*/}
            {/*          <p>*/}
            {/*            <span className="main-price discounted">$100.00</span>{" "}*/}
            {/*            <span className="discounted-price">$80.00</span>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      /!*=======  End of single cart product  =======*!/*/}
            {/*      /!*=======  single cart product  =======*!/*/}
            {/*      <div className="single-cart-product">*/}
            {/*        <span className="cart-close-icon">*/}
            {/*          <a href="#">*/}
            {/*            <i className="ti-close" />*/}
            {/*          </a>*/}
            {/*        </span>*/}
            {/*        <div className="image">*/}
            {/*          <a href="shop-product-basic.html">*/}
            {/*            <img*/}
            {/*              src="assets/images/cart-product-image/01.jpg"*/}
            {/*              className="img-fluid"*/}
            {/*              alt=""*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*        <div className="content">*/}
            {/*          <h5>*/}
            {/*            <a href="shop-product-basic.html">*/}
            {/*              Dark Brown Leather Watch*/}
            {/*            </a>*/}
            {/*          </h5>*/}
            {/*          <p>*/}
            {/*            <span className="main-price discounted">$200.00</span>{" "}*/}
            {/*            <span className="discounted-price">$180.00</span>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      /!*=======  End of single cart product  =======*!/*/}
            {/*      /!*=======  single cart product  =======*!/*/}
            {/*      <div className="single-cart-product">*/}
            {/*        <span className="cart-close-icon">*/}
            {/*          <a href="#">*/}
            {/*            <i className="ti-close" />*/}
            {/*          </a>*/}
            {/*        </span>*/}
            {/*        <div className="image">*/}
            {/*          <a href="shop-product-basic.html">*/}
            {/*            <img*/}
            {/*              src="assets/images/cart-product-image/02.jpg"*/}
            {/*              className="img-fluid"*/}
            {/*              alt=""*/}
            {/*            />*/}
            {/*          </a>*/}
            {/*        </div>*/}
            {/*        <div className="content">*/}
            {/*          <h5>*/}
            {/*            <a href="shop-product-basic.html">*/}
            {/*              Creative Wooden Stand*/}
            {/*            </a>*/}
            {/*          </h5>*/}
            {/*          <p>*/}
            {/*            <span className="main-price discounted">$200.00</span>{" "}*/}
            {/*            <span className="discounted-price">$180.00</span>*/}
            {/*          </p>*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      /!*=======  End of single cart product  =======*!/*/}
            {/*    </div>*/}
            {/*    /!*=======  cart buttons  =======*!/*/}
            {/*    <div className="cart-buttons">*/}
            {/*      <a href="shop-wishlist.html">view wishlist</a>*/}
            {/*    </div>*/}
            {/*    /!*=======  End of cart buttons  =======*!/*/}
            {/*  </div>*/}
            {/*</div>*/}
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
                    £{calculateTotal(cartArr)}
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

        {/*=======  End of cart overlay  =======*/}
        {/*=======  search overlay  =======*/}
        {/*<div className="search-overlay" id="search-overlay">*/}
        {/*  /!*=======  close icon  =======*!/*/}
        {/*  <span className="close-icon search-close-icon">*/}
        {/*    <a href="#" id="search-close-icon">*/}
        {/*      <i className="ti-close" />*/}
        {/*    </a>*/}
        {/*  </span>*/}
        {/*  /!*=======  End of close icon  =======*!/*/}
        {/*  /!*=======  search overlay content  =======*!/*/}
        {/*  <div className="search-overlay-content">*/}
        {/*    <div className="input-box">*/}
        {/*      <form action="index.html">*/}
        {/*        <input type="search" placeholder="Search Products..." />*/}
        {/*      </form>*/}
        {/*    </div>*/}
        {/*    <div className="search-hint">*/}
        {/*      <span># Hit enter to search or ESC to close</span>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!*=======  End of search overlay content  =======*!/*/}
        {/*</div>*/}
        {/*=======  End of search overlay  =======*/}
        {/*=====  End of overlay items  ======*/}
      </div>

      {/** Scroll to Top**/}
      {/*<a className="scroll-top"></a>*/}

      {/**<!-- jQuery JS -->**/}
      {/*<script src="assets/js/vendor/jquery.min.js"></script>*/}
      {/**<!-- Popper JS --> **/}
      {/*<script src="assets/js/popper.min.js"></script>*/}
      {/**<!-- Bootstrap JS --> **/}
      {/*<script src="assets/js/bootstrap.min.js"></script>*/}
      {/** <!-- Plugins JS -->**/}
      {/*<script src="assets/js/plugins.js"></script>*/}
      {/** <!-- Main JS -->**/}
      {/*<script src="assets/js/main.js"></script>*/}
    </div>
  );
};

export default Layout;

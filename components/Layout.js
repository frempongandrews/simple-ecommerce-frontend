import { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { AppContext, HIDE_CART, SHOW_CART } from "../context/AppContext";

const Layout = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);
  const { showCart } = state;
  console.log("*********State", state);
  const onHideCart = () => {
    dispatch({
      type: HIDE_CART,
    });
  };
  const onShowCart = () => {
    dispatch({
      type: SHOW_CART,
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
                      <span className="count">3</span>
                    </a>
                  </div>
                  {/*=======  End of single-icon  =======*/}
                </div>
                {/*=======  End of header right icons  =======*/}
              </div>
              {/*=======  End of headeer right container  =======*/}
            </div>
            {/*=======  End of header bottom container  =======*/}

            {/*Mobile Navigation Start Here */}
            {/*<div className="site-mobile-navigation d-block d-lg-none">*/}
            {/*  <div id="dl-menu" className="dl-menuwrapper site-mobile-nav">*/}
            {/*    /!*Site Mobile Menu Toggle Start*!/*/}
            {/*    <button className="dl-trigger hamburger hamburger--spin">*/}
            {/*      <span className="hamburger-box">*/}
            {/*        <span className="hamburger-inner" />*/}
            {/*      </span>*/}
            {/*    </button>*/}
            {/*    /!*Site Mobile Menu Toggle End*!/*/}
            {/*    <ul className="dl-menu dl-menu-toggle">*/}
            {/*      <li className="a">*/}
            {/*        <a href="#">Home</a>*/}
            {/*        <ul className="dl-submenu">*/}
            {/*          <li className="a">*/}
            {/*            {" "}*/}
            {/*            <a href="#">Home Group One</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="index-trending.html">Trending</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-collection.html">My collection</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-special.html">Special</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-concept.html">concept</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-smart.html">smart design</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            {" "}*/}
            {/*            <a href="#">Home Group Two</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="index-furniture.html">Furniture </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-essentials.html">Essentials</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-lookbook.html">Lookbook</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-wearables.html">Wearables</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-accessories.html">Accessories</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            {" "}*/}
            {/*            <a href="#">Home Group three</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="index-shoppable.html">Shoppable</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-fashion.html">Fashion</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-perfumes.html">Perfumes</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-cosmetics.html">Cosmetics</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            {" "}*/}
            {/*            <a href="#">Home Group four</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="index-decor.html">Home Decor</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="index-creative.html">Creative</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#">Shop</a>*/}
            {/*        <ul className="dl-submenu">*/}
            {/*          <li className="a">*/}
            {/*            {" "}*/}
            {/*            <a href="#">Shop Pages</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="shop-no-sidebar.html">Shop No Sidebar</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-left-sidebar.html">*/}
            {/*                  Shop Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-right-sidebar.html">*/}
            {/*                  Shop Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-fullwidth-no-space.html">*/}
            {/*                  Shop Fullwidth No Space*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-fullwidth-no-sidebar.html">*/}
            {/*                  Shop Fullwidth No Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-fullwidth-left-sidebar.html">*/}
            {/*                  Shop Fullwidth Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-fullwidth-right-sidebar.html">*/}
            {/*                  Shop Fullwidth Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li className="a">*/}
            {/*            {" "}*/}
            {/*            <a href="#">Product Details Pages</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-basic.html">Basic </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-fullwidth.html">Fullwidth</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-sticky-details.html">*/}
            {/*                  Sticky details*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-with-sidebar.html">*/}
            {/*                  With Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-extra-content.html">*/}
            {/*                  Extra Content*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-variation-image.html">*/}
            {/*                  Variation Image*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-bought-together.html">*/}
            {/*                  Bought Together*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li className="a">*/}
            {/*            {" "}*/}
            {/*            <a href="#">Other Shop Pages</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="shop-product-with-background.html">*/}
            {/*                  Product with background*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-cart.html">Shopping Cart</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-checkout.html">Checkout</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-order-tracking.html">*/}
            {/*                  Order Tracking*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-wishlist.html">Wishlist</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-customer-login.html">*/}
            {/*                  Customer Login*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="shop-by-brand.html">Shop by Brand</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#">Elements</a>*/}
            {/*        <ul className="dl-submenu">*/}
            {/*          <li className="a">*/}
            {/*            {" "}*/}
            {/*            <a href="#">Shop / Products</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="element-product-categories.html">*/}
            {/*                  Product Categories*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-product-sliders.html">*/}
            {/*                  Product Sliders*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-product-tabs.html">Product Tabs</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-product-widget.html">*/}
            {/*                  Product Widget*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-recent-products.html">*/}
            {/*                  Recent Products*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li className="a">*/}
            {/*            {" "}*/}
            {/*            <a href="#">Shop / Products</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="element-sale-products.html">*/}
            {/*                  Sale Products{" "}*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-featured-products.html">*/}
            {/*                  Featured products*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-top-rated-products.html">*/}
            {/*                  Top Rated products*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-bestselling-products.html">*/}
            {/*                  Best Selling products*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-product-attributes.html">*/}
            {/*                  Product Attributes*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li className="a">*/}
            {/*            {" "}*/}
            {/*            <a href="#">Theming</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="element-blog-posts.html">Blog Posts</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-mailchimp-form.html">*/}
            {/*                  Mailchimp Form*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-icon-box.html">Icon Box</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-team-member.html">Team Member</a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="element-instagram.html">Instagram</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#">Pages</a>*/}
            {/*        <ul className="dl-submenu">*/}
            {/*          <li>*/}
            {/*            <a href="about-us.html">About Us</a>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="about-us-2.html">About Us 2</a>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="contact-us.html">Contact Us</a>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="faq.html">F.A.Q</a>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="coming-soon.html">Coming Soon</a>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="404.html">404</a>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="my-account.html">My account</a>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="compare.html">Compare</a>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <a href="#">Blog</a>*/}
            {/*        <ul className="dl-submenu">*/}
            {/*          <li>*/}
            {/*            <a href="#">Standard Layout</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="blog-standard-right-sidebar.html">*/}
            {/*                  Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-standard-left-sidebar.html">*/}
            {/*                  Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-standard-full-width.html">*/}
            {/*                  Full Width*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="#">Grid Layout</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="blog-grid-right-sidebar.html">*/}
            {/*                  Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-grid-left-sidebar.html">*/}
            {/*                  Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-grid-full-width.html">Full Width</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="#">List Layout</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="blog-list-right-sidebar.html">*/}
            {/*                  Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-list-left-sidebar.html">*/}
            {/*                  Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-list-full-width.html">Full Width</a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="#">Masonry Layout</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="blog-masonry-right-sidebar.html">*/}
            {/*                  Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-masonry-left-sidebar.html">*/}
            {/*                  Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-masonry-full-width.html">*/}
            {/*                  Full Width*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="#">1st Full Then Grid</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="blog-full-then-grid-right-sidebar.html">*/}
            {/*                  Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-full-then-grid-left-sidebar.html">*/}
            {/*                  Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-full-then-grid-full-width.html">*/}
            {/*                  Full Width*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*          <li>*/}
            {/*            <a href="#">Single Post Layout</a>*/}
            {/*            <ul className="dl-submenu">*/}
            {/*              <li>*/}
            {/*                <a href="blog-single-post-right-sidebar.html">*/}
            {/*                  Right Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-single-post-left-sidebar.html">*/}
            {/*                  Left Sidebar*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*              <li>*/}
            {/*                <a href="blog-single-post-full-width.html">*/}
            {/*                  Full Width*/}
            {/*                </a>*/}
            {/*              </li>*/}
            {/*            </ul>*/}
            {/*          </li>*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/* Mobile Navigation End Here */}
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
                <img
                  src="assets/images/logo.png"
                  className="img-fluid"
                  alt=""
                />
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
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Store location</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Orders tracking</a>
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
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Size guide</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
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
                      <a href="//twitter.com">
                        <i className="fa fa-twitter" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="//facebook.com">
                        {" "}
                        <i className="fa fa-facebook" /> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="//instagram.com">
                        <i className="fa fa-instagram" /> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="//youtube.com">
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
                  Subscribe to our newsletter to receive news on update.
                </p>
                {/*=======  subscription form  =======*/}
                <div className="subscription-form">
                  <form id="mc-form" className="mc-form">
                    <input
                      type="email"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit">
                      <i className="ion-ios-arrow-thin-right" />
                    </button>
                  </form>
                </div>
                {/*=======  End of subscription form  =======*/}
                {/* mailchimp-alerts Start */}
                <div className="mailchimp-alerts">
                  <div className="mailchimp-submitting" />
                  {/* mailchimp-submitting end */}
                  <div className="mailchimp-success" />
                  {/* mailchimp-success end */}
                  <div className="mailchimp-error" />
                  {/* mailchimp-error end */}
                </div>
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
          {/*=======  overlay navigation menu  =======*/}
          <div className="overlay-navigation-menu-container">
            <nav>
              <ul id="vertical-collapsible-menu">
                <li className="has-children">
                  <a href="#">Homepage</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index-trending.html">Trending</a>
                    </li>
                    <li>
                      <a href="index-collection.html">My collection</a>
                    </li>
                    <li>
                      <a href="index-special.html">Special</a>
                    </li>
                    <li>
                      <a href="index-concept.html">concept</a>
                    </li>
                    <li>
                      <a href="index-smart.html">smart design</a>
                    </li>
                    <li>
                      <a href="index-furniture.html">Furniture </a>
                    </li>
                    <li>
                      <a href="index-essentials.html">Essentials</a>
                    </li>
                    <li>
                      <a href="index-lookbook.html">Lookbook</a>
                    </li>
                    <li>
                      <a href="index-wearables.html">Wearables</a>
                    </li>
                    <li>
                      <a href="index-accessories.html">Accessories</a>
                    </li>
                    <li>
                      <a href="index-shoppable.html">Shoppable</a>
                    </li>
                    <li>
                      <a href="index-fashion.html">Fashion</a>
                    </li>
                    <li>
                      <a href="index-perfumes.html">Perfumes</a>
                    </li>
                    <li>
                      <a href="index-cosmetics.html">Cosmetics</a>
                    </li>
                    <li>
                      <a href="index-decor.html">Home Decor</a>
                    </li>
                    <li>
                      <a href="index-creative.html">Creative</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li className="has-children-submenu">
                      {" "}
                      <a href="#">Shop Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-no-sidebar.html">Shop No Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">
                            Shop Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-no-space.html">
                            Shop Fullwidth No Space
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-no-sidebar.html">
                            Shop Fullwidth No Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-left-sidebar.html">
                            Shop Fullwidth Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-right-sidebar.html">
                            Shop Fullwidth Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      {" "}
                      <a href="#">Product Details Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-product-basic.html">Basic </a>
                        </li>
                        <li>
                          <a href="shop-product-fullwidth.html">Fullwidth</a>
                        </li>
                        <li>
                          <a href="shop-product-sticky-details.html">
                            Sticky details
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-with-sidebar.html">
                            With Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-extra-content.html">
                            Extra Content
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-variation-image.html">
                            Variation Image
                          </a>
                        </li>
                        <li>
                          <a href="shop-product-bought-together.html">
                            Bought Together
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      {" "}
                      <a href="#">Other Shop Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="shop-product-with-background.html">
                            Product with background
                          </a>
                        </li>
                        <li>
                          <a href="shop-cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="shop-checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="shop-order-tracking.html">Order Tracking</a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="shop-customer-login.html">Customer Login</a>
                        </li>
                        <li>
                          <a href="shop-by-brand.html">Shop by Brand</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Elements</a>
                  <ul className="sub-menu">
                    <li className="has-children-submenu">
                      {" "}
                      <a href="#">Shop / Products</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="element-product-categories.html">
                            Product Categories
                          </a>
                        </li>
                        <li>
                          <a href="element-product-sliders.html">
                            Product Sliders
                          </a>
                        </li>
                        <li>
                          <a href="element-product-tabs.html">Product Tabs</a>
                        </li>
                        <li>
                          <a href="element-product-widget.html">
                            Product Widget
                          </a>
                        </li>
                        <li>
                          <a href="element-recent-products.html">
                            Recent Products
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      {" "}
                      <a href="#">Shop / Products</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="element-sale-products.html">
                            Sale Products{" "}
                          </a>
                        </li>
                        <li>
                          <a href="element-featured-products.html">
                            Featured products
                          </a>
                        </li>
                        <li>
                          <a href="element-top-rated-products.html">
                            Top Rated products
                          </a>
                        </li>
                        <li>
                          <a href="element-bestselling-products.html">
                            Best Selling products
                          </a>
                        </li>
                        <li>
                          <a href="element-product-attributes.html">
                            Product Attributes
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      {" "}
                      <a href="#">Theming</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="element-blog-posts.html">Blog Posts</a>
                        </li>
                        <li>
                          <a href="element-mailchimp-form.html">
                            Mailchimp Form
                          </a>
                        </li>
                        <li>
                          <a href="element-icon-box.html">Icon Box</a>
                        </li>
                        <li>
                          <a href="element-team-member.html">Team Member</a>
                        </li>
                        <li>
                          <a href="element-instagram.html">Instagram</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="about-us-2.html">About Us 2</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="faq.html">F.A.Q</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="my-account.html">My account</a>
                    </li>
                    <li>
                      <a href="compare.html">Compare</a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <a href="#">Blog</a>
                  <ul className="sub-menu">
                    <li className="has-children-submenu">
                      <a href="#">Standard Layout</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-standard-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-standard-left-sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-standard-full-width.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      <a href="#">Grid Layout</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-grid-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-grid-left-sidebar.html">Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-grid-full-width.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      <a href="#">List Layout</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-list-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-list-left-sidebar.html">Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-list-full-width.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      <a href="#">Masonry Layout</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-masonry-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-left-sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-full-width.html">Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      <a href="#">1st Full Then Grid</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-full-then-grid-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-full-then-grid-left-sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-full-then-grid-full-width.html">
                            Full Width
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children-submenu">
                      <a href="#">Single Post Layout</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-single-post-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-post-left-sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-single-post-full-width.html">
                            Full Width
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          {/*=======  End of overlay navigation menu  =======*/}
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
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Dark Brown Leather Watch
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">Dining Chair</a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$220.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/03.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Creative Wooden Stand
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$80.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/01.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Dark Brown Leather Watch
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                  {/*=======  single cart product  =======*/}
                  <div className="single-cart-product">
                    <span className="cart-close-icon">
                      <a href="#">
                        <i className="ti-close" />
                      </a>
                    </span>
                    <div className="image">
                      <a href="shop-product-basic.html">
                        <img
                          src="assets/images/cart-product-image/02.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h5>
                        <a href="shop-product-basic.html">
                          Creative Wooden Stand
                        </a>
                      </h5>
                      <p>
                        <span className="cart-count">2 x </span>{" "}
                        <span className="discounted-price">$180.00</span>
                      </p>
                    </div>
                  </div>
                  {/*=======  End of single cart product  =======*/}
                </div>
                {/*=======  subtotal calculation  =======*/}
                <p className="cart-subtotal">
                  <span className="subtotal-title">Subtotal:</span>
                  <span className="subtotal-amount">$200.00</span>
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
                  Free Shipping on All Orders Over $100!
                </p>
                {/*=======  End of free shipping text  =======*/}
              </div>
            </div>
            {/*=======  End of offcanvas cart content container   =======*/}
          </div>
        </div>

        {/*=======  End of cart overlay  =======*/}
        {/*=======  search overlay  =======*/}
        <div className="search-overlay" id="search-overlay">
          {/*=======  close icon  =======*/}
          <span className="close-icon search-close-icon">
            <a href="#" id="search-close-icon">
              <i className="ti-close" />
            </a>
          </span>
          {/*=======  End of close icon  =======*/}
          {/*=======  search overlay content  =======*/}
          <div className="search-overlay-content">
            <div className="input-box">
              <form action="index.html">
                <input type="search" placeholder="Search Products..." />
              </form>
            </div>
            <div className="search-hint">
              <span># Hit enter to search or ESC to close</span>
            </div>
          </div>
          {/*=======  End of search overlay content  =======*/}
        </div>
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

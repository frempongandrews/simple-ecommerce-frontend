import Link from "next/link";
import Layout from "./Layout";
// index-accessories.html
const Home = () => {
  return (
    <>
      {/*=============================================
	=            section title  container      =
	=============================================*/}
      <div className="section-title-container section-title-container--instagram mb-80 mt-100 mb-md-60 mb-sm-60 mt-md-80 mt-sm-80">
        <div className="container wide">
          <div className="row">
            <div className="col-xl-3 d-none d-xl-block">
              <div className="section-title__label section-title__label-style2 section-title__label--left section-title__label-style2--left">
                <p>SS-2018 <span className="line">84</span></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 offset-lg-1 offset-xl-0">
              {/*=======  section title  =======*/}
              <div className="section-title text-center">
                <h1>Best selling products</h1>
                <p>Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo estibulum issim
                  Lorem ipsum dolor sit amet, consectetur cing elit.</p>
              </div>
              {/*=======  End of section title  =======*/}
            </div>
            <div className="col-xl-3 d-none d-xl-block text-right">
              <div className="section-title__label  section-title__label-style2 section-title__label--right section-title__label-style2--right">
                <p>BASIC <br /> MINIMALISM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of section title container ======*/}
      {/*=============================================
	=            accessories home content         =
	=============================================*/}
      <div className="home-content--accessories mb-100 mb-md-80 mb-sm-80">
        <div className="container">
          
          <div className="row align-items-center">
            
            <div className="col-lg-5 offset-lg-1 col-md-10 offset-md-2 mb-100">
              <div className="accessories-single-category wow zoomIn">
                <Link href={`/product`}>
                  <a className="banner-hover" />
                </Link>
                <span className="number">01/</span>
                <img src="assets/images/category/banner-best-seller-1.jpg" className="img-fluid" alt="" />
                <div className="accessories-single-category__content">
                  <p className="name">Minimal Leather Watch</p>
                  <p className="price"><span className="main-price discounted">$100.00</span> <span className="discounted-price">$80.00</span></p>
                </div>
              </div>
            </div>
            
            
            <div className="col-lg-4 offset-lg-1 col-md-8 offset-md-2 mb-100">
              <div className="accessories-single-category wow zoomIn">
                <Link href={`/product`}>
                  <a className="banner-hover" />
                </Link>
                <span className="number">02/</span>
                <img src="assets/images/category/banner-bestseller-2.jpg" className="img-fluid" alt="" />
                <div className="accessories-single-category__content">
                  <p className="name">Hoho Bag</p>
                  <p className="price"><span className="main-price">$100.00</span></p>
                </div>
              </div>
            </div>
  
  
            <div className="col-lg-4 offset-lg-1 col-md-8 offset-md-2 mb-100">
              <div className="accessories-single-category wow zoomIn">
                <Link href={`/product`}>
                  <a className="banner-hover" />
                </Link>
                <span className="number">02/</span>
                <img src="assets/images/category/banner-bestseller-2.jpg" className="img-fluid" alt="" />
                <div className="accessories-single-category__content">
                  <p className="name">Hoho Bag</p>
                  <p className="price"><span className="main-price">$100.00</span></p>
                </div>
              </div>
            </div>
            
  
            <div className="col-lg-5 offset-lg-1 col-md-10 offset-md-2 mb-100">
              <div className="accessories-single-category wow zoomIn">
                <Link href={`/product`}>
                  <a className="banner-hover" />
                </Link>
                <span className="number">01/</span>
                <img src="assets/images/category/banner-best-seller-1.jpg" className="img-fluid" alt="" />
                <div className="accessories-single-category__content">
                  <p className="name">Minimal Leather Watch</p>
                  <p className="price"><span className="main-price discounted">$100.00</span> <span className="discounted-price">$80.00</span></p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-5 offset-lg-1 col-md-10 offset-md-2 mb-100">
              <div className="accessories-single-category wow zoomIn">
                <Link href={`/product`}>
                  <a className="banner-hover" />
                </Link>
                <span className="number">01/</span>
                <img src="assets/images/category/banner-best-seller-1.jpg" className="img-fluid" alt="" />
                <div className="accessories-single-category__content">
                  <p className="name">Minimal Leather Watch</p>
                  <p className="price"><span className="main-price discounted">$100.00</span> <span className="discounted-price">$80.00</span></p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 offset-lg-1 col-md-8 offset-md-2 mb-100">
              <div className="accessories-single-category wow zoomIn">
                <Link href={`/product`}>
                  <a className="banner-hover" />
                </Link>
                <span className="number">02/</span>
                <img src="assets/images/category/banner-bestseller-2.jpg" className="img-fluid" alt="" />
                <div className="accessories-single-category__content">
                  <p className="name">Hoho Bag</p>
                  <p className="price"><span className="main-price">$100.00</span></p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-12">
              {/*=======  shop button  =======*/}
              <div className="shop-button text-center">
                <a className="lezada-button lezada-button--medium lezada-button--icon--left" href="shop-left-sidebar.html"> <i className="icon-left ion-plus" /> Online store</a>
              </div>
              {/*=======  End of shop button  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of accessories home content  ======*/}
  
      {/*=============================================
	=            instagram slider area         =
	=============================================*/}
      <div className="instagram-slider-area mb-100 mb-md-80 mb-sm-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 order-2 order-lg-1">
              {/*=============================================
					=            instagram image slider         =
					=============================================*/}
              <div className="instagram-image-slider-area">
                {/*=======  instagram image container  =======*/}
                <div className="instagram-image-slider-container">
                  <div className="instagram-feed-thumb">
                    <div id="instagramFeedThree" className="instagram-carousel">
                    </div>
                  </div>
                </div>
                {/*=======  End of instagram image container  =======*/}
              </div>
              {/*=====  End of instagram image slider  ======*/}
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              {/*=======  instagram intro  =======*/}
              <div className="instagram-section-intro pl-50 pl-lg-50 pl-md-0 pl-sm-0 pl-xs-0 pl-xxs-0 mb-0 mb-lg-0 mb-md-50 mb-sm-50 mb-xs-50 mb-xxs-50">
                <p><a href="#">@lezada_shop</a></p>
                <h3>Follow us on Instagram</h3>
              </div>
              {/*=======  End of instagram intro  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of instagram slider area  ======*/}
  
  
      {/*=====  cart-overlay  ======*/}
      <div className="cart-overlay active-cart-overlay" id="cart-overlay">
        <div className="cart-overlay-close inactive" />
        <div className="cart-overlay-content">
          {/*=======  close icon  =======*/}
          <span className="close-icon" id="cart-close-icon">
            <a href="#">
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
                      <a href="shop-product-basic.html">Creative Wooden Stand</a>
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
                      <a href="shop-product-basic.html">Creative Wooden Stand</a>
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
                <a href="shop-cart.html">view cart</a>
                <a href="shop-checkout.html">checkout</a>
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
      {/*===== End cart-overlay  ======*/}
      
    </>
  )
}

export default Home
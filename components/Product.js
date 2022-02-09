import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import { generateShorterProductTitle, centsToPounds } from "../lib/helpers";
import { useContext, useEffect } from "react";
import { useScroll } from "../hooks";
import {
  ADD_PRODUCT_TO_CART,
  AppContext,
  SHOW_CART,
} from "../context/AppContext";
import { usePrevious } from "../hooks";
// shop-product-fullwidth.html

const Product = ({ product, message }) => {
  const { state, dispatch } = useContext(AppContext);
  const [executeScroll, elRef] = useScroll();
  useEffect(executeScroll, []); // Runs after component mounts

  const onAddProductToCart = () => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      product,
    });
    dispatch({
      type: SHOW_CART,
    });
  };
  return (
    <div style={{ minHeight: "80vh" }}>
      {/*=======  breadcrumb area =======*/}
      <div
        className="breadcrumb-area breadcrumb-bg-2 pt-50 pb-70"
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="breadcrumb-title">Shop</h1>
              {/*=======  breadcrumb list  =======*/}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-list__item">
                  <Link href={`/`}>
                    <a>HOME</a>
                  </Link>
                </li>
                <li className="breadcrumb-list__item breadcrumb-list__item--active">
                  {generateShorterProductTitle(product?.title)}
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 20 }} ref={elRef}>
          <h1></h1>
        </div>
      </div>
      {/*=======  End of breadcrumb area =======*/}

      <div className="shop-page-wrapper mt-100 mb-100">
        <div className="container wide">
          <div className="row">
            <div className="col-lg-12">
              {message && <h3>{message}</h3>}
              {/*=======  shop product content  =======*/}
              {product && (
                <div className="shop-product">
                  <div className="row pb-100 pb-md-0 pb-sm-0 pb-xs-0 pb-xxs-0">
                    <div className="col-xl-6 col-lg-6 mb-md-70 mb-sm-70">
                      <div className="row">
                        <div className="col-md-3 order-2 order-md-1">
                          {/*=======  shop product small image gallery  =======*/}
                          <div className="shop-product__small-image-gallery-wrapper"></div>
                          {/*=======  End of shop product small image gallery  =======*/}
                        </div>
                        <div className="col-md-9 order-1 order-sm-1">
                          {/*=======  shop product big image gallery  =======*/}
                          <div className="shop-product__big-image-gallery-wrapper mb-0 mb-sm-30">
                            {/*=======  shop product gallery icons  =======*/}

                            <div className="shop-product-rightside-icons">
                              <span className="wishlist-icon"></span>
                            </div>
                            {/*=======  End of shop product gallery icons  =======*/}
                            <div className="shop-product__big-image-gallery-slider">
                              {/*=======  single image  =======*/}
                              <div
                                className="single-image"
                                style={{ display: "block" }}
                              >
                                <Image
                                  src={product.publicImage}
                                  width={330}
                                  height={421}
                                  layout="responsive"
                                  objectFit="contain"
                                />
                              </div>
                            </div>
                          </div>
                          {/*=======  End of shop product big image gallery  =======*/}
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 mb-md-70 mb-sm-70">
                      {/*=======  shop product description  =======*/}
                      <div className="shop-product__description">
                        <div className="shop-product__title mb-15">
                          <h2>{product?.title}</h2>
                        </div>
                        {/*=======  End of shop product title  =======*/}
                        {/*=======  shop product price  =======*/}
                        <div className="shop-product__price mb-30">
                          {/*<span className="main-price discounted">$160.00</span>*/}
                          <span className="discounted-price">
                            £{centsToPounds(product?.price)}
                          </span>
                        </div>
                        {/*=======  End of shop product price  =======*/}
                        {/*=======  shop product short description  =======*/}
                        <div className="shop-product__short-desc mb-50">
                          <p>{product.description}</p>
                        </div>
                        {/*=======  End of shop product short description  =======*/}
                        {/*=======  shop product size block  =======*/}
                        <div className="shop-product__block shop-product__block--size mb-20"></div>

                        {/*=======  shop product buttons  =======*/}
                        <div className="shop-product__buttons mb-40">
                          <a
                            className="lezada-button lezada-button--medium"
                            onClick={onAddProductToCart}
                          >
                            add to cart
                          </a>
                        </div>
                        {/*=======  End of shop product buttons  =======*/}
                        {/*=======  shop product brands  =======*/}
                        <div className="shop-product__brands mb-20"></div>
                      </div>
                      {/*=======  End of shop product description  =======*/}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      {/*=======  shop product description tab  =======*/}
                      <div className="shop-product__description-tab pt-100">
                        {/*=======  tab navigation  =======*/}
                        <div className="tab-product-navigation tab-product-navigation--product-desc mb-50">
                          <div
                            className="nav nav-tabs justify-content-center"
                            id="nav-tab2"
                            role="tablist"
                          >
                            <a
                              className="nav-item nav-link active"
                              id="product-tab-1"
                              data-toggle="tab"
                              href="#product-series-1"
                              role="tab"
                              aria-selected="true"
                            >
                              Description
                            </a>
                          </div>
                        </div>
                        {/*=======  End of tab navigation  =======*/}
                        {/*=======  tab content  =======*/}
                        <div className="tab-content" id="nav-tabContent2">
                          <div
                            className="tab-pane fade show active"
                            id="product-series-1"
                            role="tabpanel"
                            aria-labelledby="product-tab-1"
                          >
                            {/*=======  shop product long description  =======*/}
                            <div className="shop-product__long-desc shop-product__long-desc--wide mb-30">
                              <p>{product.shortDescription}</p>
                            </div>
                            {/*=======  End of shop product long description  =======*/}
                          </div>
                        </div>
                        {/*=======  End of tab content  =======*/}
                      </div>
                      {/*=======  End of shop product description tab  =======*/}
                    </div>
                  </div>
                </div>
              )}
              {/*=======  End of shop product content  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of shop page content  ======*/}
    </div>
  );
};

Product.propTypes = {
  // product can be null
  product: PropTypes.object,
  // message can be empty string
  message: PropTypes.string,
};

export default Product;

import Link from "next/link";
// shop-product-fullwidth.html

const Product = () => {
  return (
    <div style={{ minHeight: "80vh" }}>
      {/*=======  breadcrumb area =======*/}
      <div className="breadcrumb-area breadcrumb-bg-2 pt-50 pb-70">
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
                  SHOP PRODUCT
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=======  End of breadcrumb area =======*/}

      <div className="shop-page-wrapper mt-100 mb-100">
        <div className="container wide">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  shop product content  =======*/}
              <div className="shop-product">
                <div className="row pb-100 pb-md-0 pb-sm-0 pb-xs-0 pb-xxs-0">
                  <div className="col-xl-6 col-lg-6 mb-md-70 mb-sm-70">
                    <div className="row">
                      <div className="col-md-3 order-2 order-md-1">
                        {/*=======  shop product small image gallery  =======*/}
                        <div className="shop-product__small-image-gallery-wrapper">
                          <div className="shop-product__small-image-gallery-slider--vertical">
                            {/*=======  single image  =======*/}
                            <div className="single-image">
                              <img
                                src="assets/images/shop-product/soccer-1-170x225.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            <div className="single-image">
                              <img
                                src="assets/images/shop-product/soccer-2-170x225.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            <div className="single-image">
                              <img
                                src="assets/images/shop-product/soccer-3-170x225.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            {/*<div className="single-image">*/}
                            {/*  <img*/}
                            {/*    src="assets/images/shop-product/soccer-4-170x225.jpg"*/}
                            {/*    className="img-fluid"*/}
                            {/*    alt=""*/}
                            {/*  />*/}
                            {/*</div>*/}
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            {/*<div className="single-image">*/}
                            {/*  <img*/}
                            {/*    src="assets/images/shop-product/soccer-5-170x225.png"*/}
                            {/*    className="img-fluid"*/}
                            {/*    alt=""*/}
                            {/*  />*/}
                            {/*</div>*/}
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            {/*<div className="single-image">*/}
                            {/*  <img*/}
                            {/*    src="assets/images/shop-product/trendcoat-1-170x225.jpg"*/}
                            {/*    className="img-fluid"*/}
                            {/*    alt=""*/}
                            {/*  />*/}
                            {/*</div>*/}
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            {/*<div className="single-image">*/}
                            {/*  <img*/}
                            {/*    src="assets/images/shop-product/trendcoat-2-170x225.jpg"*/}
                            {/*    className="img-fluid"*/}
                            {/*    alt=""*/}
                            {/*  />*/}
                            {/*</div>*/}
                            {/*=======  End of single image  =======*/}
                          </div>
                        </div>
                        {/*=======  End of shop product small image gallery  =======*/}
                      </div>
                      <div className="col-md-9 order-1 order-sm-1">
                        {/*=======  shop product big image gallery  =======*/}
                        <div className="shop-product__big-image-gallery-wrapper mb-0 mb-sm-30">
                          {/*=======  shop product gallery icons  =======*/}
                          <div className="single-product__floating-badges single-product__floating-badges--shop-product">
                            <span className="hot">hot</span>
                          </div>
                          <div className="shop-product-rightside-icons">
                            <span className="wishlist-icon">
                              <a
                                href="#"
                                data-tippy="Add to wishlist"
                                data-tippy-placement="left"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay={50}
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="ion-android-favorite-outline" />
                              </a>
                            </span>
                            <span className="enlarge-icon">
                              <a
                                className="btn-zoom-popup"
                                href="#"
                                data-tippy="Click to enlarge"
                                data-tippy-placement="left"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay={50}
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="ion-android-expand" />
                              </a>
                            </span>
                          </div>
                          {/*=======  End of shop product gallery icons  =======*/}
                          <div className="shop-product__big-image-gallery-slider">
                            {/*=======  single image  =======*/}
                            <div className="single-image">
                              <img
                                src="assets/images/shop-product/soccer-1.png"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            {/*<div className="single-image">*/}
                            {/*  <img*/}
                            {/*    src="assets/images/shop-product/soccer-2.png"*/}
                            {/*    className="img-fluid"*/}
                            {/*    alt=""*/}
                            {/*  />*/}
                            {/*</div>*/}
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            {/*<div className="single-image">*/}
                            {/*  <img*/}
                            {/*    src="assets/images/shop-product/soccer-3.png"*/}
                            {/*    className="img-fluid"*/}
                            {/*    alt=""*/}
                            {/*  />*/}
                            {/*</div>*/}
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            {/*<div className="single-image">*/}
                            {/*  <img*/}
                            {/*    src="assets/images/shop-product/soccer-4.jpg"*/}
                            {/*    className="img-fluid"*/}
                            {/*    alt=""*/}
                            {/*  />*/}
                            {/*</div>*/}
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            <div className="single-image">
                              {/*<img*/}
                              {/*  src="assets/images/shop-product/soccer-5.png"*/}
                              {/*  className="img-fluid"*/}
                              {/*  alt=""*/}
                              {/*/>*/}
                            </div>
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            <div className="single-image">
                              {/*<img*/}
                              {/*  src="assets/images/shop-product/trendcoat-1.jpg"*/}
                              {/*  className="img-fluid"*/}
                              {/*  alt=""*/}
                              {/*/>*/}
                            </div>
                            {/*=======  End of single image  =======*/}
                            {/*=======  single image  =======*/}
                            <div className="single-image">
                              {/*<img*/}
                              {/*  src="assets/images/shop-product/trendcoat-2.jpg"*/}
                              {/*  className="img-fluid"*/}
                              {/*  alt=""*/}
                              {/*/>*/}
                            </div>
                            {/*=======  End of single image  =======*/}
                          </div>
                        </div>
                        {/*=======  End of shop product big image gallery  =======*/}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 mb-md-70 mb-sm-70">
                    {/*=======  shop product description  =======*/}
                    <div className="shop-product__description">
                      {/*=======  shop product navigation  =======*/}
                      {/*<div className="shop-product__navigation">*/}
                      {/*  <a href="shop-product-basic.html">*/}
                      {/*    <i className="ion-ios-arrow-thin-left" />*/}
                      {/*  </a>*/}
                      {/*  <a href="shop-product-basic.html">*/}
                      {/*    <i className="ion-ios-arrow-thin-right" />*/}
                      {/*  </a>*/}
                      {/*</div>*/}
                      {/*=======  End of shop product navigation  =======*/}
                      {/*=======  shop product rating  =======*/}
                      {/*<div className="shop-product__rating mb-15">*/}
                      {/*  <span className="product-rating">*/}
                      {/*    <i className="active ion-android-star" />*/}
                      {/*    <i className="active ion-android-star" />*/}
                      {/*    <i className="active ion-android-star" />*/}
                      {/*    <i className="active ion-android-star" />*/}
                      {/*    <i className="ion-android-star-outline" />*/}
                      {/*  </span>*/}
                      {/*  <span className="review-link ml-20">*/}
                      {/*    <a href="#">(3 customer reviews)</a>*/}
                      {/*  </span>*/}
                      {/*</div>*/}
                      {/*=======  End of shop product rating  =======*/}
                      {/*=======  shop product title  =======*/}
                      <div className="shop-product__title mb-15">
                        <h2>High waist trousers</h2>
                      </div>
                      {/*=======  End of shop product title  =======*/}
                      {/*=======  shop product price  =======*/}
                      <div className="shop-product__price mb-30">
                        <span className="main-price discounted">$160.00</span>
                        <span className="discounted-price">$180.00</span>
                      </div>
                      {/*=======  End of shop product price  =======*/}
                      {/*=======  shop product short description  =======*/}
                      <div className="shop-product__short-desc mb-50">
                        Hurley Dry-Fit Chino Short. Men's chino short. Outseam
                        Length: 19 Dri-FIT Technology helps keep you dry and
                        comfortable. Made with sweat-wicking fabric. Fitted
                        waist with belt loops. Button waist with zip fly
                        provides a classic look and feel . Back welt pockets and
                        coin pocket for storage. Dual side seam pockets. Heat
                        transferred logos. 70% nylon 24% polyester 6% spandex.
                        Imported.
                      </div>
                      {/*=======  End of shop product short description  =======*/}
                      {/*=======  shop product size block  =======*/}
                      <div className="shop-product__block shop-product__block--size mb-20">
                        {/*<div className="shop-product__block__title">Size: </div>*/}
                        {/*<div className="shop-product__block__value">*/}
                        {/*  <span>OneSize</span>*/}
                        {/*  <div className="shop-product-size-list">*/}
                        {/*    <span className="single-size">L</span>*/}
                        {/*    <span className="single-size">M</span>*/}
                        {/*    <span className="single-size">S</span>*/}
                        {/*    <span className="single-size">XS</span>*/}
                        {/*  </div>*/}
                        {/*</div>*/}
                      </div>
                      {/*=======  End of shop product size block  =======*/}
                      {/*=======  shop product color block  =======*/}
                      {/*<div className="shop-product__block shop-product__block--color mb-20">*/}
                      {/*  <div className="shop-product__block__title">*/}
                      {/*    Color:{" "}*/}
                      {/*  </div>*/}
                      {/*  <div className="shop-product__block__value">*/}
                      {/*    <div className="shop-product-color-list">*/}
                      {/*      <ul className="single-filter-widget--list single-filter-widget--list--color">*/}
                      {/*        <li className="mb-0 pt-0 pb-0 mr-10">*/}
                      {/*          <a className="active" href="#">*/}
                      {/*            <span className="color-picker black" />*/}
                      {/*          </a>*/}
                      {/*        </li>*/}
                      {/*        <li className="mb-0 pt-0 pb-0 mr-10">*/}
                      {/*          <a href="#">*/}
                      {/*            <span className="color-picker blue" />*/}
                      {/*          </a>*/}
                      {/*        </li>*/}
                      {/*        <li className="mb-0 pt-0 pb-0 mr-10">*/}
                      {/*          <a href="#">*/}
                      {/*            <span className="color-picker brown" />*/}
                      {/*          </a>*/}
                      {/*        </li>*/}
                      {/*      </ul>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      {/*=======  End of shop product color block  =======*/}
                      {/*=======  shop product quantity block  =======*/}
                      {/*<div className="shop-product__block shop-product__block--quantity mb-40">*/}
                      {/*  <div className="shop-product__block__title">*/}
                      {/*    Quantity:{" "}*/}
                      {/*  </div>*/}
                      {/*  <div className="shop-product__block__value">*/}
                      {/*    <div className="pro-qty d-inline-block mx-0 pt-0">*/}
                      {/*      <input type="text" defaultValue={1} />*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</div>*/}
                      {/*=======  End of shop product quantity block  =======*/}
                      {/*=======  shop product buttons  =======*/}
                      <div className="shop-product__buttons mb-40">
                        <a
                          className="lezada-button lezada-button--medium"
                          href="#"
                        >
                          add to cart
                        </a>
                        {/*<a*/}
                        {/*  className="lezada-compare-button ml-20"*/}
                        {/*  href="#"*/}
                        {/*  data-tippy="Compare"*/}
                        {/*  data-tippy-inertia="true"*/}
                        {/*  data-tippy-animation="shift-away"*/}
                        {/*  data-tippy-delay={50}*/}
                        {/*  data-tippy-placement="left"*/}
                        {/*  data-tippy-arrow="true"*/}
                        {/*  data-tippy-theme="sharpborder"*/}
                        {/*>*/}
                        {/*  <i className="ion-ios-shuffle" />*/}
                        {/*</a>*/}
                      </div>
                      {/*=======  End of shop product buttons  =======*/}
                      {/*=======  shop product brands  =======*/}
                      <div className="shop-product__brands mb-20">
                        {/*<a href="#">*/}
                        {/*  <img*/}
                        {/*    src="assets/images/brands/brand-1.png"*/}
                        {/*    className="img-fluid"*/}
                        {/*    alt=""*/}
                        {/*  />*/}
                        {/*</a>*/}
                        {/*<a href="#">*/}
                        {/*  <img*/}
                        {/*    src="assets/images/brands/brand-2.png"*/}
                        {/*    className="img-fluid"*/}
                        {/*    alt=""*/}
                        {/*  />*/}
                        {/*</a>*/}
                      </div>
                      {/*=======  End of shop product brands  =======*/}
                      {/*=======  other info table  =======*/}
                      {/*<div className="quick-view-other-info pb-0">*/}
                      {/*  <table>*/}
                      {/*    <tbody>*/}
                      {/*      <tr className="single-info">*/}
                      {/*        <td className="quickview-title">SKU: </td>*/}
                      {/*        <td className="quickview-value">12345</td>*/}
                      {/*      </tr>*/}
                      {/*      <tr className="single-info">*/}
                      {/*        <td className="quickview-title">Categories: </td>*/}
                      {/*        <td className="quickview-value">*/}
                      {/*          <a href="#">Fashion</a>,<a href="#">Men</a>,*/}
                      {/*          <a href="#">Sunglasses</a>*/}
                      {/*        </td>*/}
                      {/*      </tr>*/}
                      {/*      <tr className="single-info">*/}
                      {/*        <td className="quickview-title">Tags: </td>*/}
                      {/*        <td className="quickview-value">*/}
                      {/*          <a href="#">Fashion</a>,<a href="#">Men</a>*/}
                      {/*        </td>*/}
                      {/*      </tr>*/}
                      {/*      /!*<tr className="single-info">*!/*/}
                      {/*      /!*  <td className="quickview-title">Share on: </td>*!/*/}
                      {/*      /!*  <td className="quickview-value">*!/*/}
                      {/*      /!*    <ul className="quickview-social-icons">*!/*/}
                      {/*      /!*      <li>*!/*/}
                      {/*      /!*        <a href="#">*!/*/}
                      {/*      /!*          <i className="fa fa-facebook" />*!/*/}
                      {/*      /!*        </a>*!/*/}
                      {/*      /!*      </li>*!/*/}
                      {/*      /!*      <li>*!/*/}
                      {/*      /!*        <a href="#">*!/*/}
                      {/*      /!*          <i className="fa fa-twitter" />*!/*/}
                      {/*      /!*        </a>*!/*/}
                      {/*      /!*      </li>*!/*/}
                      {/*      /!*      <li>*!/*/}
                      {/*      /!*        <a href="#">*!/*/}
                      {/*      /!*          <i className="fa fa-google-plus" />*!/*/}
                      {/*      /!*        </a>*!/*/}
                      {/*      /!*      </li>*!/*/}
                      {/*      /!*      <li>*!/*/}
                      {/*      /!*        <a href="#">*!/*/}
                      {/*      /!*          <i className="fa fa-pinterest" />*!/*/}
                      {/*      /!*        </a>*!/*/}
                      {/*      /!*      </li>*!/*/}
                      {/*      /!*    </ul>*!/*/}
                      {/*      /!*  </td>*!/*/}
                      {/*      /!*</tr>*!/*/}
                      {/*    </tbody>*/}
                      {/*  </table>*/}
                      {/*</div>*/}
                      {/*=======  End of other info table  =======*/}
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
                          <a
                            className="nav-item nav-link"
                            id="product-tab-2"
                            data-toggle="tab"
                            href="#product-series-2"
                            role="tab"
                            aria-selected="false"
                          >
                            Additional information
                          </a>
                          <a
                            className="nav-item nav-link"
                            id="product-tab-3"
                            data-toggle="tab"
                            href="#product-series-3"
                            role="tab"
                            aria-selected="false"
                          >
                            Reviews (3)
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
                            <p>
                              Hurley Dry-Fit Chino Short. Men’s chino short.
                              Outseam Length: 19 Dri-FIT Technology helps keep
                              you dry and comfortable. Made with sweat-wicking
                              fabric. Fitted waist with belt loops. Button waist
                              with zip fly provides a classic look and feel .
                              Back welt pockets and coin pocket for storage.
                              Dual side seam pockets. Heat transferred logos.
                              70% nylon 24% polyester 6% spandex. Imported.
                            </p>
                          </div>
                          {/*=======  End of shop product long description  =======*/}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="product-series-2"
                          role="tabpanel"
                          aria-labelledby="product-tab-2"
                        >
                          {/*=======  shop product additional information  =======*/}
                          <div className="shop-product__additional-info">
                            <table className="shop-attributes">
                              <tbody>
                                <tr>
                                  <th>Size</th>
                                  <td>
                                    <p>L, M, S, XS</p>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Color</th>
                                  <td>
                                    <p>Black, Blue, Brown</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/*=======  End of shop product additional information  =======*/}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="product-series-3"
                          role="tabpanel"
                          aria-labelledby="product-tab-3"
                        >
                          {/*=======  shop product reviews  =======*/}
                          <div className="shop-product__review shop-product__review--wide">
                            <h2 className="review-title mb-20">
                              3 reviews for High-waist Trousers
                            </h2>
                            {/*=======  single review  =======*/}
                            <div className="single-review">
                              <div className="single-review__image">
                                <img
                                  src="assets/images/user/user1.jpeg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="single-review__content">
                                {/*=======  rating  =======*/}
                                <div className="shop-product__rating">
                                  <span className="product-rating">
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="ion-android-star-outline" />
                                  </span>
                                </div>
                                {/*=======  End of rating  =======*/}
                                {/*=======  username and date  =======*/}
                                <p className="username">
                                  Scott James{" "}
                                  <span className="date">/ April 5, 2018</span>
                                </p>
                                {/*=======  End of username and date  =======*/}
                                {/*=======  message  =======*/}
                                <p className="message">
                                  Thanks for always keeping your HTML themes up
                                  to date. Your level of support and dedication
                                  is second to none.
                                </p>
                                {/*=======  End of message  =======*/}
                              </div>
                            </div>
                            {/*=======  End of single review  =======*/}
                            {/*=======  single review  =======*/}
                            <div className="single-review">
                              <div className="single-review__image">
                                <img
                                  src="assets/images/user/user2.jpeg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="single-review__content">
                                {/*=======  rating  =======*/}
                                <div className="shop-product__rating">
                                  <span className="product-rating">
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="ion-android-star-outline" />
                                  </span>
                                </div>
                                {/*=======  End of rating  =======*/}
                                {/*=======  username and date  =======*/}
                                <p className="username">
                                  Owen Christ{" "}
                                  <span className="date">/ April 7, 2018</span>
                                </p>
                                {/*=======  End of username and date  =======*/}
                                {/*=======  message  =======*/}
                                <p className="message">
                                  I didn’t expect this poster to arrive folded.
                                  Now there are lines on the poster and one sad
                                  Ninja.
                                </p>
                                {/*=======  End of message  =======*/}
                              </div>
                            </div>
                            {/*=======  End of single review  =======*/}
                            {/*=======  single review  =======*/}
                            <div className="single-review">
                              <div className="single-review__image">
                                <img
                                  src="assets/images/user/user3.jpeg"
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <div className="single-review__content">
                                {/*=======  rating  =======*/}
                                <div className="shop-product__rating">
                                  <span className="product-rating">
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="active ion-android-star" />
                                    <i className="ion-android-star-outline" />
                                  </span>
                                </div>
                                {/*=======  End of rating  =======*/}
                                {/*=======  username and date  =======*/}
                                <p className="username">
                                  Edna Watson{" "}
                                  <span className="date">/ April 5, 2018</span>
                                </p>
                                {/*=======  End of username and date  =======*/}
                                {/*=======  message  =======*/}
                                <p className="message">
                                  Can’t wait to start mixin’ with this one!
                                  Irba-irr-Up-up-up-up-date your theme!
                                </p>
                                {/*=======  End of message  =======*/}
                              </div>
                            </div>
                            {/*=======  End of single review  =======*/}
                            <h2 className="review-title mb-20">Add a review</h2>
                            <p className="text-center">
                              Your email address will not be published. Required
                              fields are marked *
                            </p>
                            {/*=======  review form  =======*/}
                            <div className="lezada-form lezada-form--review">
                              <form action="#">
                                <div className="row">
                                  <div className="col-lg-6 mb-20">
                                    <input
                                      type="text"
                                      placeholder="Name *"
                                      required
                                    />
                                  </div>
                                  <div className="col-lg-6 mb-20">
                                    <input
                                      type="email"
                                      placeholder="Email *"
                                      required
                                    />
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <span className="rating-title mr-30">
                                      YOUR RATING
                                    </span>
                                    <span className="product-rating">
                                      <i className="active ion-android-star-outline" />
                                      <i className="active ion-android-star-outline" />
                                      <i className="active ion-android-star-outline" />
                                      <i className="active ion-android-star-outline" />
                                      <i className="active ion-android-star-outline" />
                                    </span>
                                  </div>
                                  <div className="col-lg-12 mb-20">
                                    <textarea
                                      cols={30}
                                      rows={10}
                                      placeholder="Your review *"
                                      defaultValue={""}
                                    />
                                  </div>
                                  <div className="col-lg-12 text-center">
                                    <button
                                      type="submit"
                                      className="lezada-button lezada-button--medium"
                                    >
                                      submit
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {/*=======  End of review form  =======*/}
                          </div>
                          {/*=======  End of shop product reviews  =======*/}
                        </div>
                      </div>
                      {/*=======  End of tab content  =======*/}
                    </div>
                    {/*=======  End of shop product description tab  =======*/}
                  </div>
                </div>
              </div>
              {/*=======  End of shop product content  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of shop page content  ======*/}
    </div>
  );
};

export default Product;

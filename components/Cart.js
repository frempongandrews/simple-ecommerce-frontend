import Link from "next/link";
// shop-cart.html

const Cart = () => {
  return (
    <>
      {/*=======  breadcrumb area =======*/}
      <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="breadcrumb-title">Cart</h1>
              {/*=======  breadcrumb list  =======*/}
              <ul className="breadcrumb-list">
                <li className="breadcrumb-list__item">
                  <Link href={`/`}>
                    <a>HOME</a>
                  </Link>
                </li>
                <li className="breadcrumb-list__item breadcrumb-list__item--active">
                  shopping cart
                </li>
              </ul>
              {/*=======  End of breadcrumb list  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*=======  End of breadcrumb area =======*/}

      {/*=============================================
	=            cart page content         =
	=============================================*/}
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
                    <tr>
                      <td className="product-thumbnail">
                        <a href="shop-product-basic.html">
                          <img
                            src="assets/images/products/bag-1-1-600x800.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="product-name">
                        <a href="shop-product-basic.html">Black Fabric Watch</a>
                        <span className="product-variation">Color: Black</span>
                      </td>
                      <td className="product-price">
                        <span className="price">$100.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty d-inline-block mx-0">
                          <input type="text" defaultValue={1} />
                        </div>
                      </td>
                      <td className="total-price">
                        <span className="price">$100.00</span>
                      </td>
                      <td className="product-remove">
                        <a href="#">
                          <i className="ion-android-close" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <a href="shop-product-basic.html">
                          <img
                            src="assets/images/products/watch-1-1-600x800.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="product-name">
                        <a href="shop-product-basic.html">Brown watch</a>
                        <span className="product-variation">Color: Brown</span>
                      </td>
                      <td className="product-price">
                        <span className="price">$150.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty d-inline-block mx-0">
                          <input type="text" defaultValue={1} />
                        </div>
                      </td>
                      <td className="total-price">
                        <span className="price">$250.00</span>
                      </td>
                      <td className="product-remove">
                        <a href="#">
                          <i className="ion-android-close" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <a href="shop-product-basic.html">
                          <img
                            src="assets/images/products/cloth-1-1-600x800.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="product-name">
                        <a href="shop-product-basic.html">High weist pant</a>
                        <span className="product-variation">Color: Blue</span>
                      </td>
                      <td className="product-price">
                        <span className="price">$10.00</span>
                      </td>
                      <td className="product-quantity">
                        <div className="pro-qty d-inline-block mx-0">
                          <input type="text" defaultValue={1} />
                        </div>
                      </td>
                      <td className="total-price">
                        <span className="price">$260.00</span>
                      </td>
                      <td className="product-remove">
                        <a href="#">
                          <i className="ion-android-close" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*=======  End of cart table  =======*/}
            </div>
            <div className="col-lg-12 mb-80">
              {/*=======  coupon area  =======*/}
              <div className="cart-coupon-area pb-30">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-md-30 mb-sm-30">
                    {/*=======  coupon form  =======*/}
                    <div className="lezada-form coupon-form">
                      {/*<form action="#">*/}
                      {/*  <div className="row">*/}
                      {/*    <div className="col-md-7 mb-sm-10">*/}
                      {/*      <input*/}
                      {/*        type="text"*/}
                      {/*        placeholder="Enter your coupon code"*/}
                      {/*      />*/}
                      {/*    </div>*/}
                      {/*    <div className="col-md-5">*/}
                      {/*      <button className="lezada-button lezada-button--medium">*/}
                      {/*        apply coupon*/}
                      {/*      </button>*/}
                      {/*    </div>*/}
                      {/*  </div>*/}
                      {/*</form>*/}
                    </div>
                    {/*=======  End of coupon form  =======*/}
                  </div>
                  <div className="col-lg-6 text-left text-lg-right">
                    {/*=======  update cart button  =======*/}
                    <button className="lezada-button lezada-button--medium">
                      update cart
                    </button>
                    {/*=======  End of update cart button  =======*/}
                  </div>
                </div>
              </div>
              {/*=======  End of coupon area  =======*/}
            </div>
            <div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7">
              <div className="cart-calculation-area">
                <h2 className="mb-40">Cart totals</h2>
                <table className="cart-calculation-table mb-30">
                  <tbody>
                    <tr>
                      <th>SUBTOTAL</th>
                      <td className="subtotal">$100.00</td>
                    </tr>
                    <tr>
                      <th>TOTAL</th>
                      <td className="total">$100.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-calculation-button text-center">
                  <Link href={`/checkout`}>
                    <a>
                      <button className="lezada-button lezada-button--medium">
                        proceed to checkout
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of cart page content  ======*/}
    </>
  );
};

export default Cart;
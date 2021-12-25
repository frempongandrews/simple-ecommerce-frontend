import Link from "next/link";
import { useContext } from "react";
import {
  AppContext,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_ITEM_QUANTITY_IN_CART,
} from "../context/AppContext";
import {
  generateShorterProductTitle,
  centsToPounds,
  calculateTotal,
} from "../lib/helpers.js";
// shop-cart.html

const Cart = () => {
  const {
    state: { cartArr },
    dispatch,
  } = useContext(AppContext);

  const onItemQuantityChange = (e, product) => {
    const newQuantity = parseInt(e.target.value);
    dispatch({
      type: UPDATE_ITEM_QUANTITY_IN_CART,
      payload: {
        product,
        quantity: newQuantity,
      },
    });
  };

  const renderCartItems = () => {
    return cartArr.map((cartItem) => {
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
              <select
                name="quantity"
                onChange={(e) => onItemQuantityChange(e, cartItem.product)}
              >
                {/*<option value="1">1</option>*/}
                {/*<option defaultValue="2">2</option>*/}
                {/*<option value="3">3</option>*/}
                {/*<option value="4">4</option>*/}
                {/*<option value="5">5</option>*/}
                {/*<option value="6">6</option>*/}
                {/*<option value="7">7</option>*/}
                {/*<option value="8">8</option>*/}
                {/*<option value="9">9</option>*/}
                {/*<option value="10">10</option>*/}
                {new Array(10).fill(1).map((_el, index) => {
                  return (
                    <option
                      value={index + 1}
                      selected={cartItem.quantity === index + 1}
                    >
                      {index + 1}
                    </option>
                  );
                })}
              </select>
            </div>
          </td>
          <td className="total-price">
            <span className="price">£{calculateTotal([cartItem])}</span>
          </td>
          <td className="product-remove">
            <a onClick={() => onRemoveProductFromCart(cartItem.product.id)}>
              <i className="ion-android-close" />
            </a>
          </td>
        </tr>
      );
    });
  };

  const onRemoveProductFromCart = (productId) => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      productId,
    });
  };

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
      {cartArr.length > 0 && (
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
                      {renderCartItems()}

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
                        <td className="total">£{calculateTotal(cartArr)}</td>
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
      )}

      <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>

      {/*=====  End of cart page content  ======*/}
    </>
  );
};

export default Cart;

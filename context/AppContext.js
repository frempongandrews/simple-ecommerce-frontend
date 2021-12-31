import { createContext, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { getCurrentUser } from "../lib/api";
export const SHOW_CART = "SHOW_CART";
export const HIDE_CART = "HIDE_CART";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const SET_CART_ARR = "SET_CART_ARR";
export const UPDATE_ITEM_QUANTITY_IN_CART = "UPDATE_ITEM_QUANTITY_IN_CART";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";

export const AppContext = createContext();

const initialState = {
  showCart: false,
  cartArr: [],
  // use product id as key
  cartObj: {},
  currentUser: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.user,
      };

    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null,
      };

    case SET_USER:
      return {
        ...state,
        currentUser: action.user,
      };

    case SHOW_CART:
      return {
        ...state,
        showCart: true,
      };

    case HIDE_CART:
      return {
        ...state,
        showCart: false,
      };

    case ADD_PRODUCT_TO_CART:
      const id = action.product.id;
      console.log("*********Product", action.product);
      // product not in cart
      if (!state.cartObj.hasOwnProperty(id)) {
        const newCartArrState = [
          { quantity: 1, product: action.product },
          ...state.cartArr,
        ];
        // save cartArr to localstorage
        window.localStorage.setItem("cart", JSON.stringify(newCartArrState));
        return {
          ...state,
          cartObj: {
            ...state.cartObj,
            [id]: action.product,
          },
          cartArr: [{ quantity: 1, product: action.product }, ...state.cartArr],
        };
      }

      // product already in cart
      const newCartArrState = state.cartArr.map((prodObj) => {
        // i.e => productObj = {product: {}, quantity: 1}
        console.log("*********Id", id);
        if (prodObj.product.id === id) {
          prodObj = { ...prodObj, quantity: prodObj.quantity + 1 };
        }
        return prodObj;
      });
      // save cartArr to localstorage
      window.localStorage.setItem("cart", JSON.stringify(newCartArrState));
      return {
        ...state,
        cartObj: {
          ...state.cartObj,
        },
        cartArr: state.cartArr.map((prodObj) => {
          // i.e => productObj = {product: {}, quantity: 1}
          console.log("*********Id", id);
          if (prodObj.product.id === id) {
            prodObj = { ...prodObj, quantity: prodObj.quantity + 1 };
          }
          return prodObj;
        }),
      };

    case REMOVE_PRODUCT_FROM_CART:
      const updatedCartObj = {
        ...state.cartObj,
      };
      delete updatedCartObj[action.productId];
      // update localStorage
      const updatedCartArr = state.cartArr.filter((prodObj) => {
        return prodObj.product.id !== action.productId;
      });
      window.localStorage.setItem("cart", JSON.stringify(updatedCartArr));
      return {
        ...state,
        cartArr: [...updatedCartArr],
        // cartObj: {
        //   ...state.cartObj,
        //   [action.productId]: undefined,
        // },
        cartObj: {
          ...updatedCartObj,
        },
      };

    case SET_CART_ARR:
      const newCartObjState = {};
      action.cart.map((prodObj) => {
        newCartObjState[prodObj.product.id] = prodObj.product;
      });
      window.localStorage.setItem("cart", JSON.stringify(action.cart));
      return {
        ...state,
        cartArr: [...action.cart],
        cartObj: {
          ...newCartObjState,
        },
      };

    case UPDATE_ITEM_QUANTITY_IN_CART:
      const newCartArr = state.cartArr.map((cartObj) => {
        if (cartObj.product.id === action.payload.product.id) {
          cartObj.quantity = action.payload.quantity;
        }
        return cartObj;
      });
      window.localStorage.setItem("cart", JSON.stringify(newCartArr));
      return {
        ...state,
        cartArr: [...newCartArr],
      };

    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // always returns user or null
    getCurrentUser().then((res) => {
      dispatch({
        type: LOGIN_USER,
        user: res?.data?.user,
      });
    });

    // load cart
    const cartArr = JSON.parse(window.localStorage.getItem("cart")) || [];
    dispatch({
      type: SET_CART_ARR,
      cart: cartArr,
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

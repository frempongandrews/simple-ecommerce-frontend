import { createContext, useReducer, useEffect } from "react";

export const SHOW_CART = "SHOW_CART";
export const HIDE_CART = "HIDE_CART";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const SET_CART_ARR = "";

export const AppContext = createContext();

const initialState = {
  showCart: false,
  cartArr: [],
  // use product id as key
  cartObj: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case SET_CART_ARR:
      const newCartObjState = {};
      action.cart.map((prodObj) => {
        newCartObjState[prodObj.product.id] = prodObj.product;
      });
      return {
        ...state,
        cartArr: [...action.cart],
        cartObj: {
          ...newCartObjState,
        },
      };

    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    // todo: get current user - if user => set user.cart to localstorage
    // todo: if no user, load cart from localstorage
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

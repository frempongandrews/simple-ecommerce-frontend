import { createContext, useReducer } from "react";

export const SHOW_CART = "SHOW_CART";
export const HIDE_CART = "HIDE_CART";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

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
        return {
          ...state,
          cartObj: {
            ...state.cartObj,
            [id]: action.product,
          },
          cartArr: [{ quantity: 1, product: action.product }, ...state.cartArr],
        };
      }

      // product in cart
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

    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

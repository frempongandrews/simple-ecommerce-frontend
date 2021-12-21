import { createContext, useReducer } from "react";

export const SHOW_CART = "SHOW_CART";
export const HIDE_CART = "HIDE_CART";

export const AppContext = createContext();

const initialState = {
  showCart: false,
  cart: [],
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

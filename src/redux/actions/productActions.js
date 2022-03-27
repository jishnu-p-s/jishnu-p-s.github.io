import fakestoreapi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/action-types";

export const fetchProducts =
  ({ query = "a" } = {}) =>
  async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    try {
      dispatch({ type: "ERROR", payload: false });
      const { data } = await fakestoreapi.get(
        `/product-list/?category=&ordering=&search=${query}&page=1&pop_fields=category_data,store_data`
      );
      dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: data.results });
    } catch {
      dispatch({ type: "ERROR", payload: true });
    }
    dispatch({ type: "LOADING", payload: false });
  };

export const fetchProduct = (id) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    dispatch({ type: "ERROR", payload: false });
    const { data } = await fakestoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: { data, id } });
  } catch {
    dispatch({ type: "ERROR", payload: true });
  }
  dispatch({ type: "LOADING", payload: false });
};

export const addnum = (num) => (dispatch) => {
  dispatch({ type: "ADD", payload: num });
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const changeTheme = (theme) => (dispatch) => {
  dispatch({ type: "THEME", payload: theme });
};

export const searchItem = (payload) => (dispatch) => {
  dispatch({ type: "SEARCH", payload });
};

export const focusInput = (payload) => (dispatch) => {
  dispatch({ type: "FOCUS", payload });
};

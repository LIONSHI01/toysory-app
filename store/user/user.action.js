import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../lib/reducer.utils";

const addItem = (favItems, itemToAdd) => {
  const existItem = favItems.find((item) => item._id === itemToAdd._id);

  if (existItem) return favItems;
  return [...favItems, itemToAdd];
};
const removeItem = (favItems, itemToRemove) =>
  favItems.filter((item) => item._id !== itemToRemove);

export const addItemToFav = (favItems, itemToAdd) => {
  const newFavItems = addItem(favItems, itemToAdd);
  localStorage.setItem("favItems", JSON.stringify(newFavItems));
  return createAction(USER_ACTION_TYPES.SET_FAVORITES, newFavItems);
};

export const removeItemFromFav = (favItems, itemToRemove) => {
  const newFavItems = removeItem(favItems, itemToRemove);
  return createAction(USER_ACTION_TYPES.SET_FAVORITES, newFavItems);
};

export const setFavoritesArr = (favoritesArr) =>
  createAction(USER_ACTION_TYPES.SET_FAVORITES, favoritesArr);

export const setFavItemsFromLocalStorage = (favoritesArr) =>
  createAction(USER_ACTION_TYPES.SET_FAVORITES, favoritesArr);

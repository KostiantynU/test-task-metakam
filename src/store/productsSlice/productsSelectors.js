import { createSelector } from '@reduxjs/toolkit';

const selectSelf = state => state;
export const selectProducts = createSelector(selectSelf, state => state.productsSlice.products);
export const selectProductsStatus = createSelector(
  selectSelf,
  state => state.productsSlice.productsState
);
export const selectOneProduct = createSelector(selectSelf, state => state.productsSlice.oneProduct);
export const selectOneProductStatus = createSelector(
  selectSelf,
  state => state.productsSlice.oneProductStatus
);
export const selectCurrentBasket = createSelector(
  selectSelf,
  state => state.productsSlice.currentBasket
);

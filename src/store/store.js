import { configureStore } from '@reduxjs/toolkit';
import { productsSlice } from './productsSlice/productsSlice';

const store = configureStore({
  reducer: { [productsSlice.name]: productsSlice.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;

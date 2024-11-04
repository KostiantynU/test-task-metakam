import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProducts = createAsyncThunk('getAllProducts', async (_, thunkAPI) => {
  try {
    const result = await fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => json);

    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getOneProduct = createAsyncThunk('getOneProduct', async (productId, thunkAPI) => {
  try {
    const result = await fetch(`https://fakestoreapi.com/products/${productId}`)
      .then(res => res.json())
      .then(result => result);

    return result;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

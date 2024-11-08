import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getOneProduct } from './productsThunks';

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: {
    products: [],
    productsState: '',
    oneProduct: {},
    oneProductStatus: '',
    currentBasket: [],
  },
  reducers: {
    addToCurrentBasket: (state, action) => {
      if (state.currentBasket.find(el => el.id === action.payload.id)) {
        state.currentBasket = state.currentBasket.map(el => {
          if (el.id === action.payload.id) {
            return { ...action.payload, quantity: el.quantity + action.payload.quantity };
          } else {
            return el;
          }
        });
      } else {
        state.currentBasket.push({ ...action.payload, numInOrder: state.currentBasket.length + 1 });
      }
    },
    removeOneFromCurrentBasket: (state, action) => {
      state.currentBasket = state.currentBasket.reduce((acuum, el) => {
        if (el.id === action.payload) {
          if (el.quantity >= 2) {
            return [...acuum, { ...el, quantity: el.quantity - 1 }];
          } else {
            return [...acuum];
          }
        } else {
          return [...acuum, el];
        }
      }, []);
    },
    removeFromCurrentBasket: (state, action) => {
      state.currentBasket = state.currentBasket.filter(el => el.id !== action.payload);
    },
    clearCurrentBasket: (state, action) => {
      state.currentBasket = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, state => {
        state.productsState = 'pending';
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = [...action.payload];
        state.productsState = 'fulfilled';
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.products = [];
        state.productsState = 'error';
      })
      .addCase(getOneProduct.pending, state => {
        state.oneProductStatus = 'pending';
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
        state.oneProductStatus = 'fulfilled';
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.oneProduct = {};
        state.oneProductStatus = 'error';
      });
  },
});

export { productsSlice };

export const {
  addToCurrentBasket,
  removeFromCurrentBasket,
  clearCurrentBasket,
  removeOneFromCurrentBasket,
} = productsSlice.actions;

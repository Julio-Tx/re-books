import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  id: '',
  name: '',
  rating: 0,
  title: '',
  info: '',
  imgSmall: [''],
  imgLarge: [''],
  image: '',
  price: '',
  priceWhole: '',
  priceFraction: '',
  linkTitle: '',
  brand: '',
  color: '',
  weight: '',
  description: '',
  nameOfProduct: '',}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { value: [initialStateValue]},
  reducers: {
    addToCart: (state, action)=> {
      state.value.push(action.payload);
    },
    removeFromCart: (state, action)=> {
      const index = state.value.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );

      const newCart = [...state.value];

      if (index >= 0) {
        newCart.splice(index, 1);
      }
      state.value = newCart;
      
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "@js/bills/config";

const initialState = {list: defaultState.products.list};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (state, action) => {  
      state.list = action.payload;
    },
  },
}); 

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;

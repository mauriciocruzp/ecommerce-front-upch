import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  totalItems: 0
}

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    update: (state, action) => {
        state.totalPrice = action.payload.totalPrice;
        state.totalItems = action.payload.totalItems;
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = counterSlice.actions

export default counterSlice.reducer
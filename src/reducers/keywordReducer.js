import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "",
}

export const counterSlice = createSlice({
  name: 'keyword',
  initialState,
  reducers: {

    update: (state, action) => {
        state.value = action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { update } = counterSlice.actions

export default counterSlice.reducer
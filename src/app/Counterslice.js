import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  inputval: ''
}

export const Counterslice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += parseFloat(state.inputval);
    },
    decrement: (state) => {
      state.value -= parseFloat(state.inputval);
    },
    setcount: (state,action) => {
        state.inputval = action.payload
    }
  },
})

export const { increment, decrement, setcount } = Counterslice.actions

export default Counterslice.reducer
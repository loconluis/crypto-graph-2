import { createSlice } from "@reduxjs/toolkit";
import { CryptoTicker, OptionsProps } from "../interfaces/options";
import { intialValueOptions } from "../interfaces/data";

export interface OptionsThunksProps {
  cryptoTicker: CryptoTicker;
  interval: OptionsProps;
}

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: intialValueOptions,
  reducers: {
    setFilters(state, actions) {
      return { ...state, filters: { ...state.filters, ...actions.payload } };
    },
    setData(state, action) {
      return { ...state, data: action.payload };
    },
    setError(state, action) {
      return { ...state, error: action.payload };
    },
  },
});

export const { setFilters, setData, setError } = cryptoSlice.actions;

export default cryptoSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CryptoTicker, OptionsProps } from "../interfaces/options";
import { intialValueOptions } from "../interfaces/data";
import { DataResults } from "../interfaces/data";
import { config } from "../../config";

const POLYGON_URI = "https://api.polygon.io/";

export interface OptionsThunksProps {
  cryptoTicker: CryptoTicker;
  interval: OptionsProps;
}

export const fetchCrypto = createAsyncThunk<
  DataResults[] | [],
  OptionsThunksProps
>("crypto/fetchByOptions", async (options: OptionsThunksProps) => {
  console.log("options", options);
  const URI = `${POLYGON_URI}v2/aggs/ticker/${options.cryptoTicker}/range/${options.interval.multiplier}/${options.interval.timeSpan}/${options.interval.from}/${options.interval.to}?adjusted=true&sort=asc&apiKey=${config.API_KEY}`;
  console.log("URI", URI);
  const res = await axios.get(URI);
  const { data } = res;
  console.log("res", data);
  return data.results as DataResults[];
});

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState: intialValueOptions,
  reducers: {
    setFilters(state, actions) {
      return { ...state, filters: { ...state.filters, ...actions.payload } };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCrypto.fulfilled, (state, action) => {
      state.loading = false;
      console.log("state", action);
      state.data = action.payload;
    });
    builder.addCase(fetchCrypto.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setFilters } = cryptoSlice.actions;

export default cryptoSlice.reducer;

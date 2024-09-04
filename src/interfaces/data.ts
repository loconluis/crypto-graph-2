import { pastWeek, today } from "../utils/date-helper";
import { InitialValuesProps } from "./options";
export interface DataResults {
  t: number;
  c: number;
}

export const intialValueOptions: InitialValuesProps = {
  filters: {
    currencyName: "BTCUSD",
    currencyKey: "X:BTCUSD",
    multiplier: 4,
    timeSpan: "hour",
    from: pastWeek(),
    to: today(),
  },
  loading: false,
  error: undefined,
  data: [],
};

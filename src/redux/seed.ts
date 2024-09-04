import { pastWeek, today } from "../utils/date-helper";
import { DataResults } from "../interfaces/data";

export interface FiltersOptions {
  currencyName: string;
  currencyKey: string;
  multiplier: number;
  timeSpan: string;
  from: number;
  to: number;
}

export interface InitialValuesProps {
  filters: FiltersOptions;
  loading: boolean;
  error?: string;
  data: DataResults[] | [];
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

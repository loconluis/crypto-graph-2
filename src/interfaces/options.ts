import { DataResults } from "../interfaces/data";
export interface OptionsProps {
  label: string;
  multiplier: number;
  timeSpan: string;
  from: number;
  to: number;
}

export type CryptoTicker =
  | "X:BTCUSD"
  | "X:ETHUSD"
  | "X:ADAUSD"
  | "X:USDCUSD"
  | "X:XLMUSD";

export interface StateProps {
  crypto: InitialValuesProps;
  dark: {
    active: boolean;
  };
}

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

export interface OptionsThunksProps {
  cryptoTicker: CryptoTicker | string;
  interval: Partial<OptionsProps>;
}

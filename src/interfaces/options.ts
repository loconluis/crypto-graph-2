import { InitialValuesProps } from "../redux/seed";

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
}

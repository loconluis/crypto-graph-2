import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "./redux/slice";
import StockChart from "./components/StockChart";
import { StateProps } from "./interfaces/options";

function App() {
  const dispatch = useDispatch();
  const crypto = useSelector((state: StateProps) => state.crypto);

  const initObj = {
    cryptoTicker: crypto.filters.currencyKey,
    interval: crypto.filters,
  };

  useEffect(() => {
    // @ts-expect-error Typo error with dispatch types
    dispatch(fetchCrypto(initObj));
  }, [crypto.filters.currencyKey, crypto.filters.from]);

  return <StockChart />;
}

export default App;

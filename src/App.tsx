import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCrypto } from "./redux/slice";
import StockChart from "./components/StockChart";
import { StateProps } from "./interfaces/options";

function App() {
  const dispatch = useDispatch();
  const crypto = useSelector((state: StateProps) => state.crypto);

  useEffect(() => {
    // @ts-expect-error Values sad
    dispatch(
      fetchCrypto({
        cryptoTicker: crypto.filters.currencyKey,
        interval: crypto.filters,
      })
    );
  }, [crypto.filters.currencyKey, crypto.filters.from]);

  return <StockChart />;
}

export default App;

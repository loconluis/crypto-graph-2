import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setData, setError } from "./redux/slice";
import { fetchCrypto } from "./services/polygon.service";
import StockChart from "./components/StockChart";
import { StateProps } from "./interfaces/options";

function App() {
  const crypto = useSelector((state: StateProps) => state.crypto);
  const dispatch = useDispatch();
  const initObj = {
    cryptoTicker: crypto.filters.currencyKey,
    interval: crypto.filters,
  };

  useEffect(() => {
    const call = async () => {
      try {
        const data = await fetchCrypto(initObj);
        dispatch(setData(data));
      } catch (e) {
        dispatch(setError(e));
      }
    };

    call();
  }, [crypto.filters.currencyKey, crypto.filters.from]);

  return <StockChart />;
}

export default App;

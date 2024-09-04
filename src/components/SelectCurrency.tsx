import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../redux/slice";
import { StateProps } from "../interfaces/options";

const SelectCurrency = () => {
  const dispatch = useDispatch();
  const handleSelect = (e: { target: { value: string } }) => {
    const term = e.target.value;
    const obj = {
      currencyKey: term,
      currencyName: term.split(":")[1],
    };
    dispatch(setFilters(obj));
  };

  const crypto = useSelector((state: StateProps) => state.crypto);
  return (
    <div className="flex justify-center mt-5 mb-5">
      <form>
        <select
          id="countries"
          value={crypto.filters.currencyKey}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleSelect}
        >
          <option label="BTC/USD" value="X:BTCUSD">
            BTC/USD
          </option>
          <option label="ETH/USD" value="X:ETHUSD">
            ETH/USD
          </option>
          <option label="USDC/USD" value="X:USDCUSD">
            USDC/USD
          </option>
        </select>
      </form>
    </div>
  );
};

export default SelectCurrency;

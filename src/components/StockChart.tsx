import { useSelector, useDispatch } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DataResults } from "../interfaces/data";
import { formatPrice, formatDate } from "../utils/format";
import { StateProps } from "../interfaces/options";
import { setDarkMode } from "../redux/darkSlice";
import Intervals from "./Intervals";
import SelectCurrency from "./SelectCurrency";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const StockChart = () => {
  const crypto = useSelector((state: StateProps) => state.crypto);
  const dark = useSelector((state: StateProps) => state.dark);
  const dispatch = useDispatch();

  const dataFormat = (data: DataResults[]) =>
    data.map((el) => ({
      date: formatDate(el.t, crypto.filters.timeSpan) + "",
      price: el.c,
    }));

  const formatTooltip = (value: number) => formatPrice(value);

  const handleDark = () => {
    dispatch(setDarkMode(!dark.active));
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 sm:mt-0 dark:bg-black">
      <div
        className="absolute right-10 top-10 cursor-pointer"
        onClick={handleDark}
      >
        {dark.active ? <SunIcon /> : <MoonIcon />}
      </div>
      <div>
        <h2 className="sm:mt-0 md:mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          CRYPTO MARKET
        </h2>
      </div>
      <div>
        <h3 className="sm:mt-1 md:mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
          {crypto.filters.currencyName}
        </h3>
      </div>
      <Intervals />
      <SelectCurrency />
      <div className=" flex justify-center mt-8">
        <ResponsiveContainer minHeight={400} width="80%" height="100%">
          <LineChart width={800} height={600} data={dataFormat(crypto.data)}>
            <XAxis dataKey="date" hide />
            <YAxis
              interval={1}
              dataKey="price"
              hide
              domain={["dataMin", "dataMax"]}
            />
            <Tooltip
              formatter={formatTooltip}
              itemStyle={{
                color: "#000000",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              strokeWidth={2}
              name={crypto.filters.currencyName}
              stroke={dark.active ? "#FFFFFF" : "#000000"}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockChart;

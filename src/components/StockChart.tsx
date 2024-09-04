import { useSelector } from "react-redux";
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
import Intervals from "./Intervals";
import SelectCurrency from "./SelectCurrency";
import { StateProps } from "../interfaces/options";

const StockChart = () => {
  const crypto = useSelector((state: StateProps) => state.crypto);

  const dataFormat = (data: DataResults[]) =>
    data.map((el) => ({
      date: formatDate(el.t) + "",
      price: el.c,
    }));

  const formatTooltip = (value: number) => formatPrice(value);

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          CRYPTO MARKET
        </h2>
      </div>
      <div>
        <h3 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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
            <Tooltip formatter={formatTooltip} />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              strokeWidth={2}
              name={crypto.filters.currencyName}
              stroke="#000000"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StockChart;

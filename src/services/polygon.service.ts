import axios from "axios";
import { OptionsThunksProps } from "../interfaces/options";
import { DataResults } from "../interfaces/data";
import { config } from "../../config";

export const fetchCrypto = async (options: OptionsThunksProps) => {
  try {
    const URI = `${config.POLYGON_URI}v2/aggs/ticker/${options.cryptoTicker}/range/${options.interval.multiplier}/${options.interval.timeSpan}/${options.interval.from}/${options.interval.to}?adjusted=true&sort=asc&apiKey=${config.API_KEY}`;
    const res = await axios.get(URI);
    const { data } = res;
    return data.results as DataResults[];
  } catch (e) {
    console.error(e);
  }
};

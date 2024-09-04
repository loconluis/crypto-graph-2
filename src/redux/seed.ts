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

export const seed = [
  {
    v: 1584.3927743100016,
    vw: 59216.5432,
    o: 59459,
    c: 60200,
    h: 60330,
    l: 58518,
    t: 1724824800000,
    n: 69294,
  },
  {
    v: 1518.4901175800005,
    vw: 59910.467,
    o: 60201.49,
    c: 59347.94,
    h: 60323,
    l: 59321.96,
    t: 1724839200000,
    n: 71984,
  },
  {
    v: 3675.335503330005,
    vw: 58768.7733,
    o: 59351.22,
    c: 58657.28,
    h: 60084,
    l: 57851.62,
    t: 1724853600000,
    n: 148306,
  },
  {
    v: 2607.9591709900023,
    vw: 59201.3422,
    o: 58815,
    c: 59130,
    h: 59991,
    l: 58590,
    t: 1724868000000,
    n: 111199,
  },
  {
    v: 1078.9179457100004,
    vw: 59081.5006,
    o: 59141.82,
    c: 59012.59,
    h: 59455,
    l: 58842.77,
    t: 1724882400000,
    n: 63932,
  },
  {
    v: 739.40435784,
    vw: 59206.2971,
    o: 59012.6,
    c: 59454.62,
    h: 59638,
    l: 58935.59,
    t: 1724896800000,
    n: 51549,
  },
  {
    v: 727.7238708899994,
    vw: 59636.1924,
    o: 59454.63,
    c: 59610.97,
    h: 59929,
    l: 59376.82,
    t: 1724911200000,
    n: 44361,
  },
  {
    v: 2539.9433018699992,
    vw: 60281.9481,
    o: 59610.98,
    c: 60646.43,
    h: 60800,
    l: 59586.39,
    t: 1724925600000,
    n: 92281,
  },
  {
    v: 4435.118163290006,
    vw: 60733.2496,
    o: 60648.6,
    c: 60547.32,
    h: 61290,
    l: 60179,
    t: 1724940000000,
    n: 116405,
  },
  {
    v: 3694.6642237100027,
    vw: 59467.2088,
    o: 60663,
    c: 59493.26,
    h: 60672,
    l: 58906.11,
    t: 1724954400000,
    n: 106094,
  },
  {
    v: 1397.097701229999,
    vw: 59204.4347,
    o: 59550.1,
    c: 59217.63,
    h: 59656,
    l: 58717.4,
    t: 1724968800000,
    n: 64404,
  },
  {
    v: 1053.4213423299998,
    vw: 59035.6886,
    o: 59243.7,
    c: 58786.39,
    h: 59522,
    l: 58669.68,
    t: 1724983200000,
    n: 51010,
  },
  {
    v: 1319.81914362,
    vw: 59345.2892,
    o: 58786.4,
    c: 59581.67,
    h: 59785,
    l: 58703.37,
    t: 1724997600000,
    n: 51300,
  },
  {
    v: 1355.171638119999,
    vw: 59511.6158,
    o: 59584.17,
    c: 59662.25,
    h: 60102,
    l: 58914.17,
    t: 1725012000000,
    n: 65001,
  },
  {
    v: 6307.223819490008,
    vw: 58508.309,
    o: 59667.25,
    c: 58623.78,
    h: 59943,
    l: 57700,
    t: 1725026400000,
    n: 184405,
  },
  {
    v: 1747.2712093699997,
    vw: 58983.956,
    o: 58623.78,
    c: 59055.77,
    h: 59527,
    l: 58609.09,
    t: 1725040800000,
    n: 84756,
  },
  {
    v: 718.6529540100001,
    vw: 59261.1807,
    o: 59055.78,
    c: 59276.38,
    h: 59622,
    l: 59035.3,
    t: 1725055200000,
    n: 52882,
  },
  {
    v: 491.04107494,
    vw: 59311.2151,
    o: 59279.46,
    c: 59208.48,
    h: 59536,
    l: 59124,
    t: 1725069600000,
    n: 41583,
  },
  {
    v: 335.2078865499999,
    vw: 59143.5542,
    o: 59207.73,
    c: 58906.68,
    h: 59448,
    l: 58826.02,
    t: 1725084000000,
    n: 34040,
  },
  {
    v: 395.8169825300001,
    vw: 59173.2667,
    o: 59076,
    c: 58959.9,
    h: 59405,
    l: 58869.45,
    t: 1725098400000,
    n: 35140,
  },
];

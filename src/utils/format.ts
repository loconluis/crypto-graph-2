import { format } from "date-fns";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};

export const formatDate = (date: number, timeSpan: string) => {
  const formatString = timeSpan !== "hour" ? "PP" : "p";
  return format(date, formatString);
};

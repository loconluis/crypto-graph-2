export const today = () => {
  return new Date().getTime();
};

export const pastWeek = () => {
  return new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).getTime();
};

export const pastMonth = () => {
  return new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000).getTime();
};

export const pastYear = () => {
  return new Date(
    new Date().getTime() - 12 * 30 * 24 * 60 * 60 * 1000
  ).getTime();
};

export const pastHour = () => {
  return new Date(new Date().getTime() - 60 * 60 * 1000).getTime();
};

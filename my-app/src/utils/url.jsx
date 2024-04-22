export const isDev =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const getApiUrl = () => {
  return isDev
    ? process.env.REACT_APP_DEMO_API_URL
    : process.env.REACT_APP_LIVE_API_URL;
};

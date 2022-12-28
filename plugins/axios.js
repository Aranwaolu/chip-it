export default ({ $axios }) => {
  // $axios.defaults.baseURL = process.env.apiBaseUrl;

  $axios.onRequest((config) => {
    config.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
      "chip-it-token"
    )}`;
  });
};

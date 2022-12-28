import axios from "axios";

const bearer = localStorage.getItem("chip-it-token");

let bearerSync;

chrome.storage.sync.get(["chipItToken"]).then((result) => {
  console.log("Value currently is " + result.key);
  bearerSync = result.key;
});

export const getAllChips = () => {
  return axios.get("https://chip-it-api.fly.dev/v1/chips", {
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
  });
};

import axios from "axios";

const bearer = localStorage.getItem("chip-it-token");
const userId = localStorage.getItem("chip-it-uuid");

// let bearer, userId;

// // const setStorageSync = () => {
// chrome.storage.sync.get(["chipItToken"]).then((result) => {
//   console.log("Bearer Token currently is " + result.key);
//   bearer = result.key;
// });

// chrome.storage.sync.get(["chipItUseruuid"]).then((result) => {
//   console.log("userId currently is " + result.key);
//   userId = result.key;
// });
// // };

// setStorageSync();

export const getTopVisited = () => {
  return axios.get(
    `https://chip-it-api.fly.dev/v1/users/${userId}/top-visited?page=1&limit=4`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

export const getUserChips = (page) => {
  return axios.get(
    `https://chip-it-api.fly.dev/v1/users/${userId}/chips?page=${page}&limit=6&sort=latest`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

export const getUserFavouriteChips = (page) => {
  return axios.get(
    `https://chip-it-api.fly.dev/v1/users/${userId}/favorites?page=${page}&limit=6&sort=latest`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

export const createNewChip = (userId, url) => {
  return axios.post(
    `https://chip-it-api.fly.dev/v1/chips/`,
    {
      url,
      user_id: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

// FOLDERS
export const getFolders = (userId, page) => {
  return axios.get(
    `https://chip-it-api.fly.dev/v1/users/${userId}/folders?page=${page}&limit=12&sort=latest`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

/**
 *
 * @param {*} page
 * @returns
 * This is for dropdown menu only
 */
export const getAllFolders = (userId, page) => {
  return axios.get(
    `https://chip-it-api.fly.dev/v1/users/${userId}/folders?page=${page}&limit=25`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

export const getFolderById = (folderId, page) => {
  return axios.get(
    `https://chip-it-api.fly.dev/v1/folders/${folderId}/chips?page=${page}&limit=6`,
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

export const createNewFolder = (userId, foldername) => {
  return axios.post(
    `https://chip-it-api.fly.dev/v1/folders/`,
    {
      name: foldername,
      user_id: userId,
    },
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

export const addChipToFolder = (folderId, chipId) => {
  return axios.patch(
    `https://chip-it-api.fly.dev/v1/folders/${folderId}/chips/${chipId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

// FAVOURITES
export const toggleChipFavourite = (chipId) => {
  return axios.patch(
    `https://chip-it-api.fly.dev/v1/chips/${chipId}/toggle-favorite`,
    {},
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

// CLICKS
export const incrementClicks = (chipId) => {
  return axios.patch(
    `https://chip-it-api.fly.dev/v1/chips/${chipId}/clicks`,
    {},
    {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    }
  );
};

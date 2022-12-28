<template>
  <div class="folder-dropdown--container">
    <p>Folder</p>

    <div class="folder-dropdown--box" @click="toggleDropdownMenu">
      <div class="dropdown--box-left">
        <img src="/icons/folder-dropdown-icon.svg" alt="" />
        <p>{{ selectedMenuItem.name }}</p>
      </div>
      <div class="dropdown--box-right">
        <img
          src="/icons/arrow-down-icon.svg"
          alt=""
          :class="{ 'dropdown-icon-rotate': isDropdownMenuShown }"
        />
      </div>
    </div>

    <div v-show="isDropdownMenuShown" class="folder-dropdown--menu">
      <div
        v-for="item in menu"
        :key="item.id"
        :class="{ selected: selectedMenuItem === item }"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { getAllFolders } from "~/services/user";

export default {
  data() {
    return {
      isDropdownMenuShown: false,
      menu: ["VIP", "Bookmarks", "Vue", "VueIsh", "Server stufff", "Okayyy"],
      selectedMenuItem: { name: "--select a folder--" },
    };
  },

  async mounted() {
    let userId = localStorage.getItem("chip-it-uuid");
    let response = await getAllFolders(userId, 1);
    console.log(response);
    this.menu = response.data.folders.data;
  },

  methods: {
    toggleDropdownMenu() {
      this.isDropdownMenuShown = !this.isDropdownMenuShown;
    },

    selectItem(item) {
      this.selectedMenuItem = item;
      this.isDropdownMenuShown = false;
      this.$emit("selected-item", item);
    },
  },
};
</script>

<style>
.folder-dropdown--container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.folder-dropdown--container > p {
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 8px;
}

.folder-dropdown--box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 26px;

  width: 484px;
  height: 72px;

  border: 1px solid #808080;
  border-radius: 8px;
  cursor: pointer;
}

.dropdown--box-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.dropdown--box-left > img {
  margin-right: 16px;
}

.dropdown--box-left > p {
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #121212;
}

.dropdown--box-right > img {
  transition: all 0.2s ease-in-out;
}

.dropdown--box-right > img.dropdown-icon-rotate {
  transform: rotate(180deg);
}

.folder-dropdown--menu {
  position: absolute;
  top: 102px;
  width: 100%;
  background: #ffffff;
  max-height: 200px;
  padding: 0;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.15);
  z-index: 10;
  overflow: scroll;
}

.folder-dropdown--menu > div {
  width: 100%;
  padding: 16px 60px;
  /* background: red; */
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.folder-dropdown--menu > div:not(:last-child) {
  border-bottom: 1px solid rgb(221, 221, 221);
}

.folder-dropdown--menu > div:hover {
  width: 100%;
  padding: 16px 60px;
  background: rgb(190, 190, 190);
}

.selected {
  background-color: #e3e3e3;
  /* color: #ffffff; */
}
</style>

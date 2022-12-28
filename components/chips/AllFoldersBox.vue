<template>
  <div class="chips-folder-box--container">
    <div class="chips-folder-box--mini-container" v-if="isFoldersShown">
      <ChipFolder
        v-for="folder in foldersData"
        :folder="folder"
        :key="folder.id"
        @select-folder="openFolder($event)"
      />

      <AddNewChips />
    </div>

    <!-- Folders Pagination -->
    <paginate
      v-if="totalFolderPages > 1 && isFoldersShown"
      v-model="folderPage"
      :click-handler="onFolderPageChange"
      :page-count="totalFolderPages"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link-class'"
      :prev-link-class="'prev-link-class'"
      :next-link-class="'next-link-class'"
      :active-class="'active-class'"
      :disabled-class="'disabled-class'"
      :prev-text="'Prev'"
      :next-text="'Next'"
    >
    </paginate>

    <div class="chips-folder-box--chips-container" v-if="!isFoldersShown">
      <FolderBreadcrumb
        :folder-name="selectedFolder.name"
        @leave-folder="leaveFolderView"
      />

      <div class="chips-folder-box--chips-box">
        <Chip
          v-for="chip in folderChipsData"
          :key="chip.id"
          :chips-data="chip"
          :style="{ 'margin-bottom': '40px' }"
        />
      </div>

      <AddNewChips />
    </div>

    <!-- Chips Pagination -->
    <paginate
      v-if="totalFolderChipsPages > 1 && !isFoldersShown"
      v-model="folderChipsPage"
      :click-handler="onFolderChipsPageChange"
      :page-count="totalFolderChipsPages"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link-class'"
      :prev-link-class="'prev-link-class'"
      :next-link-class="'next-link-class'"
      :active-class="'active-class'"
      :disabled-class="'disabled-class'"
      :prev-text="'Prev'"
      :next-text="'Next'"
    >
    </paginate>
  </div>
</template>

<script>
import Paginate from "vuejs-paginate";

import Chip from "../chips/Chip.vue";

import { getFolders, getFolderById } from "~/services/user";
import ChipFolder from "../folders/ChipFolder.vue";
import FolderBreadcrumb from "../folders/FolderBreadcrumb.vue";
import AddNewChips from "./AddNewChips.vue";

export default {
  components: { Chip, Paginate, ChipFolder, FolderBreadcrumb, AddNewChips },

  data() {
    return {
      folderPage: 1,
      totalFolderPages: 1,
      foldersData: [],
      isFoldersShown: true,

      selectedFolder: { name: "", id: "" },
      folderChipsPage: 1,
      totalFolderChipsPages: 1,
      folderChipsData: [],
    };
  },

  methods: {
    async fetchAllFolders(folderPage) {
      let userId = localStorage.getItem("chip-it-uuid");
      let response = await getFolders(userId, folderPage);
      this.foldersData = response.data.folders.data;
    },

    onFolderPageChange() {
      // do a skeleton loader here
      this.fetchAllFolders(this.page);
    },

    async fetchAllFolderChips(id) {
      let response = await getFolderById(id, this.folderChipsPage);
      this.folderChipsData = response.data.chips.data;

      // console.log(response);
      this.totalFolderChipsPages = response.data.chips.meta.last_page;
    },

    openFolder(folder) {
      this.isFoldersShown = false;
      this.selectedFolder = folder;

      this.fetchAllFolderChips(folder.id);
    },

    onFolderChipsPageChange() {
      this.fetchAllFolderChips(this.selectedFolder.id);
    },

    leaveFolderView() {
      this.isFoldersShown = true;
    },
  },

  mounted() {
    this.fetchAllFolders(this.page);
  },
};
</script>

<style>
.chips-folder-box--container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.chips-folder-box--mini-container {
  width: 100%;
  max-width: 1280px;
  /* max-height: 1040px; */

  background: #fafafa;
  border-radius: 24px;
  padding: 48px 56px;
  margin: 40px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.chips-folder-box--chips-container {
  width: 100%;
  max-width: 1280px;
  background: #fafafa;
  border-radius: 24px;
  padding: 48px 56px;
  margin: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.chips-folder-box--chips-box {
  margin-top: 32px;
  width: 100%;
  height: 900px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

pagination {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px 0;
  border-radius: 4px;
}

.page-item {
  display: inline;
}

.prev-link-class {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.next-link-class {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.page-link-class {
  position: relative;
  float: left;
  padding: 6px 15px;
  color: #337ab7;
  margin-left: -1px;
  line-height: 1.42857143;
  text-decoration: none;
  border: 1px solid #ddd;
}
.page-link-class.active {
  color: #fff !important;
}

.disabled-class {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}

.active-class .page-link-class {
  z-index: 2;
  color: #fff !important;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}
a:active {
  color: #fff !important;
  text-decoration: none;
}
</style>

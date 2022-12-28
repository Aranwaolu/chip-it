<template>
  <div class="add-new-chips--container">
    <img src="/icons/add-icon.svg" alt="" @click="openModal" />

    <!-- v-if will cause mounted -->
    <div v-if="isModalShown" class="add-new-chips--modal--container">
      <div class="add-new-chips--modal">
        <img src="/icons/close-icon.svg" alt="" @click="closeModal" />
        <h5>Add New Chip</h5>

        <FormInput
          :input-type="'text'"
          :label="'Link'"
          :placeholder="'https://drchibs.com/how-to-use-nodejs'"
          :input-size="'full'"
          v-model="linkUrl"
          :style="{ 'margin-bottom': '24px' }"
        />

        <FolderDropdown @selected-item="selectAnExisitingFolder($event)" />

        <span :style="{ 'margin-top': '20px' }">OR</span>

        <FormInput
          :input-type="'text'"
          :label="'New Folder'"
          :placeholder="'Type the name of your new folder here'"
          :input-size="'full'"
          :style="{ 'margin-top': '20px' }"
          v-model="newFolderName"
        />

        <div
          class="btn--container"
          :style="{ 'margin-top': '36px' }"
          @click="saveChip"
          :class="{ 'disabled-btn': isDisabled }"
        >
          <div class="btn--container__text">Save</div>
          <!-- <div v-if="loading" class="btn--container__loader"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from "../general/FormInput.vue";
import FolderDropdown from "../folders/FolderDropdown.vue";

import {
  createNewChip,
  createNewFolder,
  addChipToFolder,
} from "~/services/user";

export default {
  components: { FormInput, FolderDropdown },

  data() {
    return {
      isModalShown: false,
      linkUrl: "",
      selectedFolder: { id: "", name: "" },
      newFolderName: "",
    };
  },

  computed: {
    isDisabled() {
      return (
        this.linkUrl == "" &&
        (JSON.stringify(this.selectedFolder) == "{}" ||
          this.newFolderName == "")
      );
    },
  },

  methods: {
    openModal() {
      this.isModalShown = true;
    },

    closeModal() {
      this.isModalShown = false;
    },

    selectAnExisitingFolder(e) {
      this.selectedFolder = e;
      this.newFolderName = "";
    },

    async saveChip() {
      const userId = localStorage.getItem("chip-it-uuid");

      console.log(this.linkUrl, this.selectedFolder, this.newFolderName);

      if (!this.isDisabled) {
        try {
          // 1. create chip
          let chipResponse = await createNewChip(userId, this.linkUrl);

          if (this.newFolderName != "") {
            // asynchronously create new folder endpoint call
            let folderResponse = await createNewFolder(
              userId,
              this.newFolderName
            );

            // 2. then, save the chip in the new folder
            let addChipResponse = await addChipToFolder(
              folderResponse.data.folder.id,
              chipResponse.data.chip.id
            );

            this.$toast.success(
              "Successfully Add Chip to " + this.newFolderName
            );
          } else {
            //... save the link in the already selected folder
            // console.log(this.selectedFolder, "againnnnnn");

            let addChipResponse = await addChipToFolder(
              this.selectedFolder.id,
              chipResponse.data.chip.id
            );

            this.$toast.success(
              "Successfully Add Chip to " + this.selectedFolder.name
            );

            this.isModalShown = false;
          }
        } catch (error) {
          this.$toast.error("Error Adding Chip...Try again");
        }
      }
    },
  },
};
</script>

<style>
.add-new-chips--container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 999;
}

.add-new-chips--container > img {
  cursor: pointer;
}

.add-new-chips--modal--container {
  inset: 0;
  position: fixed;
  background: rgba(74, 74, 74, 0.438);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.add-new-chips--modal {
  width: 681px;
  min-height: 484px;

  background: #ffffff;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 24px 24px 30px;
  position: relative;
}

.add-new-chips--modal > img {
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
}

.add-new-chips--modal > h5 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #121212;
  margin-bottom: 37px;
}

.btn--container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 26px;
  width: 484px;
  height: 86px;
  background: #121212;
  border-radius: 8px;

  cursor: pointer;

  transition: all 0.2s ease-in;
}

.disabled-btn {
  background: #959595 !important;
  cursor: default !important;
}

.btn--container__text {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
}
</style>

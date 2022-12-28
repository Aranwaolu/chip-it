<template>
  <div class="folder-breadcrumb--container">
    <img src="/icons/arrow-back-icon.svg" alt="" @click="leaveFolder" />
    <img src="/icons/folder-mini-icon.svg" alt="" />
    <div><span>Folders</span> / {{ folderName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    folderName: { type: String },
  },

  methods: {
    leaveFolder() {
      this.$emit("leave-folder");
    },
  },
};
</script>

<style>
.folder-breadcrumb--container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.folder-breadcrumb--container > img:nth-child(1) {
  margin-right: 18px;
  cursor: pointer;
}

.folder-breadcrumb--container > img:nth-child(2) {
  margin-right: 10px;
}

.folder-breadcrumb--container > div {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
}
.folder-breadcrumb--container > div > span {
  color: #808080;
}
</style>

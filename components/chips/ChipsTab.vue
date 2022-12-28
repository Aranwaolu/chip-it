<template>
  <div class="chips-tab--container">
    <div @click="switchTab('all')" :class="{ active: activeTab === 'all' }">
      All
    </div>
    <div
      @click="switchTab('favourites')"
      :class="{ active: activeTab === 'favourites' }"
    >
      Favourites
    </div>
    <div
      @click="switchTab('folders')"
      :class="{ active: activeTab === 'folders' }"
    >
      Folders
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "all",
    };
  },

  methods: {
    switchTab(tabName) {
      this.activeTab = tabName;
      this.$emit("change-tab", tabName);
    },
  },
};
</script>

<style>
.chips-tab--container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 443px;
  height: 86px;

  background: #fafafa;
  border-radius: 16px;

  margin: 38px 0 0;
}

.chips-tab--container > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: transparent;
  border-radius: 12px;

  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #808080;
  margin: 0 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.chips-tab--container > div.active {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 36px;
  background: #121212;
  border-radius: 12px;

  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  cursor: default;
}
</style>

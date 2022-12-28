<template>
  <div>
    <TopVisited />

    <div class="chips--main-box">
      <ChipsTab @change-tab="switchTab($event)" />

      <AllChipsBox v-show="activeTab == 'all'" />
      <AllFavouriteChipsBox v-show="activeTab == 'favourites'" />
      <AllFoldersBox v-show="activeTab == 'folders'" />
    </div>
  </div>
</template>

<script>
import TopVisited from "~/components/general/TopVisited.vue";
import AllChipsBox from "~/components/chips/AllChipsBox.vue";
import ChipsTab from "~/components/chips/ChipsTab.vue";
import AllFavouriteChipsBox from "~/components/chips/AllFavouriteChipsBox.vue";
import AllFoldersBox from "~/components/chips/AllFoldersBox.vue";

export default {
  components: {
    AllChipsBox,
    ChipsTab,
    AllFavouriteChipsBox,
    AllFoldersBox,
    TopVisited,
  },

  middleware: ["auth"],

  data() {
    return {
      activeTab: "all",
    };
  },

  methods: {
    switchTab(e) {
      this.activeTab = e;
    },
  },
};
</script>

<style>
.chips--main-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

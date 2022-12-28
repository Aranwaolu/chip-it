<template>
  <div class="top-visited--container" v-if="topVisitedData.length > 8">
    <h5>Top Visited</h5>
    <div class="top-visited--list">
      <ChipMini
        v-for="chipMiniData in topVisitedData.slice(0, 4)"
        :key="chipMiniData.id"
        :chip-mini-data="chipMiniData"
      />
    </div>
  </div>
</template>

<script>
import ChipMini from "../chips/ChipMini.vue";

import { getTopVisited } from "~/services/user";

export default {
  components: { ChipMini },

  data() {
    return {
      topVisitedData: [],
    };
  },

  async mounted() {
    let response = await getTopVisited();
    console.log(response);
    this.topVisitedData = response.data.top_visited.data;
  },
};
</script>

<style>
.top-visited--container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 120px;
}

.top-visited--container > h5 {
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #121212;
  margin-bottom: 24px;
}

.top-visited--list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

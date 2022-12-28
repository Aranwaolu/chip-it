<template>
  <div class="favourites-chips-box--container">
    <div class="favourites-chips-box--mini-container">
      <Chip
        v-for="chip in chips"
        :key="chip.id"
        :chips-data="chip"
        :style="{ 'margin-bottom': '40px' }"
      />

      <div class="favourites-empty-state" v-if="chips.length == 0">
        You have no favourites
      </div>

      <AddNewChips />
    </div>

    <paginate
      v-if="totalPages > 1"
      v-model="page"
      :click-handler="onPageChange"
      :page-count="totalPages"
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

import { getUserFavouriteChips } from "~/services/user";
import AddNewChips from "./AddNewChips.vue";

export default {
  components: { Chip, Paginate, AddNewChips },

  data() {
    return {
      page: 1,
      chips: [],
      meta: {},
      totalPages: 1,
    };
  },

  methods: {
    async fetchAllFavouriteChips(page) {
      let response = await getUserFavouriteChips(page);

      console.log(response);
      this.chips = response.data.favorites.data;
      this.meta = response.data.favorites.meta;
      this.totalPages = response.data.favorites.meta.last_page;

      console.log(this.chips);
    },

    onPageChange() {
      // do a skeleton loader here
      this.fetchAllFavouriteChips(this.page);
    },
  },

  activated() {
    this.fetchAllFavouriteChips(this.page);
  },
};
</script>

<style>
.favourites-chips-box--container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.favourites-chips-box--mini-container {
  width: 100%;
  max-width: 1280px;
  /* max-height: 1040px; */

  background: #fafafa;
  /* background: red; */
  border-radius: 24px;
  padding: 48px 56px;
  margin: 40px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.favourites-empty-state {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
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

<template>
  <a
    @click="incrementClickCount"
    :href="chipMiniData.url"
    target="_blank"
    class="chip-mini--container"
    :style="{ 'background-image': `url(${chipMiniData.metadata.images[0]})` }"
  >
    <div class="chip-mini--details">
      <a class="chip-mini--details__name">{{
        chipMiniData.metadata.siteName
      }}</a>
      <div class="chip-mini--details__visits">
        <img src="/icons/visit-icon.svg" alt="" />
        {{ clicks }}
      </div>
    </div>
  </a>
</template>

<script>
import { incrementClicks } from "~/services/user";

export default {
  props: {
    chipMiniData: { type: Object },
  },

  data() {
    return {
      clicks: this.chipMiniData.clicks,
    };
  },

  methods: {
    async incrementClickCount() {
      this.clicks++;
      await incrementClicks(this.chipMiniData.id);
    },
  },
};
</script>

<style scoped>
.chip-mini--container {
  width: 30rem;
  height: 24rem;
  background: #e3f2fc;
  border-radius: 24px;
  padding: 24px 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;

  margin-bottom: 30px;
}

.chip-mini--details {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 8px;
  min-width: 248px;
  max-width: 285px;
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
}

.chip-mini--details__name {
  min-width: 85px;
  height: 42px;
  /* background: #e3f2fc; */
  background: #e5e5e5;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  /* color: #55adee; */
  color: #161616;
  margin-right: 10px;
}

.chip-mini--details__visits {
  width: 85px;
  height: 42px;
  /* background: #e3f2fc; */
  background: #e5e5e5;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  /* color: #55adee; */
  color: #161616;
}

.chip-mini--details__visits > img {
  margin-right: 3px;
}
</style>

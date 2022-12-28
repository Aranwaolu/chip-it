<template>
  <div class="btn--container">
    <div class="btn--container__text">{{ btnText }}</div>
    <!-- <div v-if="loading" class="btn--container__loader"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    btnText: { type: String },
    loading: { type: Boolean },
  },

  watch: {
    // It listens to the change in prop name
    loading: function () {
      console.log("loading"); // print out when the name changes
    },
  },
};
</script>

<style>
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
}

.btn--container__text {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
}
</style>

<template>
  <div class="chips-folder--container" @click="openFolder">
    <img src="/icons/chip-it-folder.svg" alt="" />
    <p>{{ folder.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    folder: { type: Object },
  },

  methods: {
    openFolder() {
      this.$emit("select-folder", this.folder);
    },
  },
};
</script>

<style>
.chips-folder--container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 30px 40px;
  cursor: pointer;
}

.chips-folder--container > p {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #121212;
  margin-top: 8px;
}
</style>

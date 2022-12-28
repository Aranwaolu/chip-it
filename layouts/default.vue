<template>
  <div class="main-layout--container">
    <Header />
    <nuxt keep-alive />
  </div>
</template>

<script>
import Header from "~~/components/general/Header.vue";

export default {
  components: { Header },
};
</script>

<style>
.main-layout--container {
  display: flex;
  flex-direction: column;
  padding: 66px 80px;
}
</style>

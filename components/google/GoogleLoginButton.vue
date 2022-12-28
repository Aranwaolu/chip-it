<template>
  <div class="g-btn--container">
    <img src="/icons/google-icon.svg" alt="" /> Log In with Google
  </div>
</template>

<script>
export default {};
</script>

<style>
.g-btn--container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 26px;

  width: 484px;
  height: 86px;

  border: 1px solid #808080;
  border-radius: 8px;

  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #808080;

  cursor: pointer;
}

.g-btn--container > img {
  margin-right: 16px;
}
</style>

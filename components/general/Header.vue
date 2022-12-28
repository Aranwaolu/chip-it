<template>
  <div class="header--container">
    <div class="logo">
      <img src="/images/chip-it-logo.png" alt="" />
      <p>ChipIt</p>
    </div>

    <img
      class="menu-icon"
      src="/icons/menu-icon.svg"
      alt=""
      @click="toggleMenu"
    />

    <div class="menu--container" v-show="isMenuShown">
      <div class="menu-item">
        <img src="/icons/settings-icon.svg" alt="" /> Settings
      </div>
      <div class="menu-item">
        <img src="/icons/profile-icon.svg" alt="" /> Profile
      </div>
      <div class="menu-item logout" @click="logoutUser">
        <img src="/icons/logout-icon.svg" alt="" /> Logout
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuShown: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuShown = !this.isMenuShown;
    },

    logoutUser() {
      this.isMenuShown = false;
      localStorage.clear();
      this.$store.commit("setLIState", false);
      this.$router.push("/login");

      storage.sync.clear();
    },
  },
};
</script>

<style>
.header--container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
}

.header--container > .logo {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header--container > .logo > img {
  width: 80px;
  height: 80px;
  margin-right: 16px;
}

.header--container > .logo > p {
  padding: 0;
  margin: 0;
  font-family: "Satoshi-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 49px;
  color: #121212;
}

.menu-icon {
  cursor: pointer;
}

.menu--container {
  position: absolute;
  right: 0;
  top: 60px;
  /* width: 161px; */
  height: 181px;

  background: #ffffff;
  box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.15);

  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-item {
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.menu-item.logout {
  color: #fa7777;
}

.menu-item > img {
  margin-right: 10px;
}
</style>

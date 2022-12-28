<template>
  <div class="login--container">
    <div class="login--bg">
      <img src="/bg/login.svg" alt="" />
    </div>

    <div class="login--form">
      <div class="login--form__header">
        <img src="/images/chip-it-logo-small.png" alt="" /> Log In
      </div>

      <div class="login--form__title">
        Hey <img src="/icons/emoji_waving_hand.svg" alt="" /> Welcome back
      </div>

      <div class="login--form__subtitle" @click="loginUser">
        Enter the information you used to sign up
      </div>

      <FormInput
        :input-type="'text'"
        :label="'Email Address'"
        :placeholder="'Email Address'"
        :input-size="'full'"
        v-model="email"
      />
      <FormInput
        :input-type="'password'"
        :label="'Password'"
        :placeholder="'Password'"
        :input-size="'full'"
        :style="{
          'margin-top': '30px',
        }"
        v-model="password"
      />

      <div
        class="btn--container"
        @click="loginUser"
        :class="{ 'disabled-btn': isDisabled }"
      >
        <div class="btn--container__text">Log In</div>
        <!-- <div v-if="loading" class="btn--container__loader"></div> -->
      </div>

      <GoogleLoginButton />
    </div>
  </div>
</template>

<script>
import FormInput from "~/components/general/FormInput.vue";
import GoogleLoginButton from "~/components/google/GoogleLoginButton.vue";

import { login } from "~/services/auth";
import Button from "~/components/general/Button.vue";

import axios from "axios";

export default {
  components: { FormInput, GoogleLoginButton, Button },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {
    isDisabled() {
      return this.email == "" && this.password == "";
    },
  },

  layout: "auth",
  middleware: ["guest"],

  mounted() {
    // this.loginUser();
    console.log(this.$store.state.L_I);
  },

  methods: {
    async loginUser() {
      if (!this.isDisabled) {
        try {
          let response = await login(this.email, this.password);

          // chrome.storage.sync.set({
          //   chipItToken: response.data.token.token,
          //   chipItUsername: response.data.user.name,
          //   chipItUseruuid: response.data.user.id,
          // });

          localStorage.setItem("chip-it-token", response.data.token.token);
          localStorage.setItem("chip-it-username", response.data.user.name);
          localStorage.setItem("chip-it-uuid", response.data.user.id);
          this.$store.commit("setLIState", true);

          // 3. set axios header with bearer token for authorisation
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.token.token}`;

          // 4. push route to dashboard page
          this.$router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style>
.login--container {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  padding: 40px;
  /* background: red; */
}

.login--bg,
.login--bg > img {
  width: 640px;
  height: 100%;
  object-fit: fill;
  /* background: url('/bg/login.svg'); */
}

.login--form {
  width: calc(100% - 640px);
  height: 100%;
  padding: 0 80px;
}

.login--form__header {
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.01em;
  color: #212529;
}

.login--form__header > img {
  margin-right: 16px;
  width: 40px;
  height: 40px;
}

.login--form__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 60px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #212529;
  margin: 25px 0 0;
}

.login--form__title > img {
  width: 34.57px;
  height: 35.41px;
  margin: 0 24px 0 10px;
}

.login--form__subtitle {
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #808080;
  margin: 4px 0 40px;
}

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

  margin: 36px 0;
}

.disabled-btn {
  background: #959595 !important;
  cursor: default !important;
}

.btn--container__text {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
}
</style>

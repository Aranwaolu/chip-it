<template>
  <div class="register--container">
    <div class="register--bg">
      <img src="/bg/register.svg" alt="" />
    </div>

    <div class="register--form">
      <div class="register--form__header">
        <img src="/images/chip-it-logo-small.png" alt="" /> Sign Up
      </div>

      <div class="register--form__fullname">
        <FormInput
          :input-type="'text'"
          :label="'First Name'"
          :placeholder="'First Name'"
          :input-size="'half'"
          v-model="firstName"
        />
        <FormInput
          :input-type="'text'"
          :label="'Last Name'"
          :placeholder="'Last Name'"
          :input-size="'half'"
          v-model="lastName"
        />
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
          'margin-top': '20px',
        }"
        v-model="password"
      />

      <FormInput
        :input-type="'password'"
        :label="'Confirm Password'"
        :placeholder="'Confirm Password'"
        :input-size="'full'"
        :style="{
          'margin-top': '20px',
        }"
        v-model="password"
      />

      <span v-if="this.password !== this.confirmPassword">
        Passwords do not match!
      </span>

      <!-- <Button
        :btn-text="'Sign Up'"
        :style="{
          'margin-top': '40px',
          'margin-bottom': '36px',
        }"
      /> -->

      <div class="btn--container" @click="register">
        <div class="btn--container__text">Sign Up</div>
        <!-- <div v-if="loading" class="btn--container__loader"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/general/Button.vue";
import FormInput from "~/components/general/FormInput.vue";

import { register, login } from "~/services/auth";

export default {
  components: { FormInput, Button },

  layout: "auth",
  middleware: "guest",

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },

  methods: {
    async register() {
      console.log(
        "here",
        this.firstName + " " + this.lastName,
        this.email,
        this.password
      );
      // check that fields are filled
      // check that passwords matchs -- up before even clicking register button
      // check email
      // check that names are more than 3 letters
      // check

      await register(
        this.firstName + " " + this.lastName,
        this.email,
        this.password
      );

      let response = await login(this.email, this.password);

      console.log(response);

      localStorage.setItem("chip-it-token", response.data.token.token);
      localStorage.setItem("chip-it-username", response.data.user.name);
      localStorage.setItem("chip-it-uuid", response.data.user.id);
      this.$store.commit("setLIState", true);

      // 3. set axios header with bearer token for authorisation

      // 4. push route to dashboard page
      this.$router.push("/");
    },
  },
};
</script>

<style>
.register--container {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* height: 100vh; */
  padding: 40px;
}

.register--bg,
.register--bg > img {
  width: 684px;
  height: 100%;
  object-fit: fill;
}

.register--form {
  width: calc(100% - 640px);
  /* height: 100%; */
  padding: 0 80px;
}

.register--form > span {
  color: red;
  font-style: italic;
  margin-top: 8px;
}

.register--form__header {
  font-weight: 700;
  font-size: 36px;
  line-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  letter-spacing: 0.01em;
  color: #212529;
}

.register--form__header > img {
  margin-right: 16px;
  width: 40px;
  height: 40px;
}

.register--form__fullname {
  width: 484px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.register--form__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 60px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #212529;
  margin: 25px 0 0;
}

.register--form__title > img {
  width: 34.57px;
  height: 35.41px;
  margin: 0 24px 0 10px;
}

.register--form__subtitle {
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

.btn--container__text {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
}
</style>

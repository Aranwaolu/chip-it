<template>
  <div
    class="form-input--container"
    :class="{ full: inputSize === 'full', half: inputSize === 'half' }"
  >
    <label for="">{{ label }}</label>
    <input
      v-if="inputType !== 'password'"
      :type="inputType"
      :placeholder="placeholder"
      @input="handleInput"
      :value="value"
    />
    <input
      v-if="inputType == 'password'"
      :type="passwordInputType"
      :placeholder="placeholder"
      @input="handleInput"
    />

    <div
      class="password-eye"
      v-if="inputType == 'password'"
      @click="togglePasswordVisibility"
    >
      <img v-if="isPasswordShown" src="/icons/eye.svg" alt="" />
      <img v-else src="/icons/eye-slash.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inputType: { type: String },
    label: { type: String },
    inputSize: { type: String },
    placeholder: { type: String },
    value: { type: String },
  },

  data() {
    return {
      isPasswordShown: false,
      passwordInputType: "password",
      // content: this.value,
    };
  },

  methods: {
    togglePasswordVisibility() {
      this.isPasswordShown = !this.isPasswordShown;

      if (this.isPasswordShown == true) {
        this.passwordInputType = "text";
      } else {
        this.passwordInputType = "password";
      }
    },

    handleInput(e) {
      // this.content = e
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped>
.form-input--container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.form-input--container > label {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.7rem;
  letter-spacing: 0.01em;
  color: #000000;
}

.form-input--container > input {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 60px 8px 24px;
  height: 76px;
  width: 100%;
  border: 0.5px solid #121212;
  border-radius: 12px;
  color: #121212;
}

.form-input--container.full {
  width: 484px;
}

.form-input--container.half {
  width: 230px;
}

.form-input--container > input::placeholder {
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
  letter-spacing: 0.01em;
  color: #808080;
}

.password-eye {
  position: absolute;
  right: 24px;
  top: 60px;
  cursor: pointer;
}
</style>

<template>
  <form class="p-5">
    <div class="input-group mb-3">
      <span class="input-group-text"
        ><i class="fa-solid fa-envelope fa-shake"></i
      ></span>
      <input
        type="email"
        class="form-control text-light"
        placeholder="enter your e-mail"
        v-model="user.email"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text"
        ><i class="fa-solid fa-lock fa-shake"></i
      ></span>
      <input
        type="password"
        class="form-control text-light"
        placeholder="enter your password"
        v-model="user.password"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text"
        ><i class="fa-solid fa-check-double fa-shake"></i
      ></span>
      <input
        type="password"
        class="form-control text-light"
        placeholder="confirm your password"
      />
    </div>
    <div class="form-check mb-3 d-flex justify-content-start">
      <input
        class="form-check-input me-1"
        type="checkbox"
        id="termsAgreed"
        v-model="user.termsAgreed"
      />
      <label class="form-check-label text-light" for="termsAgreed">
        I agree to
        <a href="#" class="link-warning">the terms and conditions</a>.
      </label>
    </div>
    <button type="button" class="btn btnColor w-100 text-light" @click.prevent="signUp" :style="{'background':btnColor}">
      <strong>Register</strong>
    </button>
  </form>
</template>

<script>
export default {
  name: 'signUp',
  props: {
    btnColor: {
      type: String,
      default: 'linear-gradient(90deg,rgba(6, 154, 231, 1) 0%,rgba(35, 204, 236, 1) 100%)'
    }
  },
  data () {
    return {
      user: {
        email: '',
        password: '',
        submitType: 'register',
        termsAgreed: false
      }
    }
  },
  methods: {
    signUp () {
      this.$emit('update:modelValue', this.user)
    }
  }
}
</script>

<style scoped></style>

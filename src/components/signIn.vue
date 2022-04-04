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
    <div class="form-check mb-3">
      <input
        class="form-check-input"
        type="checkbox"
        id="rememberMe"
        v-model="user.rememberMe"
      />
      <label class="form-check-label text-light" for="rememberMe">
        Remember Me
      </label>
      <label class="float-end">
        <a href="#" class="text-light">Forgot Password?</a>
      </label>
    </div>
    <div class="text-center">
      <button type="button" class="btn btnColor w-100 text-light" @click.prevent="signIn" :style="{'background':btnColor}">
        <strong>Login</strong>
      </button>
    </div>
  </form>
</template>

<script>
export default {

  props: {
    btnColor: {
      type: String,
      default: 'linear-gradient(90deg,rgba(6, 154, 231, 1) 0%,rgba(35, 204, 236, 1) 100%)'
    }
  },
  name: 'signIn',
  data () {
    return {
      user: {
        email: '',
        password: '',
        submitType: 'login',
        rememberMe: false
      }
    }
  },
  methods: {
    signIn () {
      this.$emit('update:modelValue', this.user)
    }
  }

}

</script>

<style scoped></style>

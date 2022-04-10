<template>
  <form class="p-5" @submit.prevent="signIn" >
    <div class="input-group mb-3">
      <span class="input-group-text">
        <i class="bi bi-envelope-fill" :class="{shake:shakeM}"></i>
      </span>
      <input
        v-model="v.user.email.$model"
        type="text"
        class="form-control"
        :class="{'is-invalid' : v.user.email.$error}"
        placeholder="enter your e-mail"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text"><i class="bi bi-shield-lock-fill" :class="{shake:shakeP}"></i></span>
      <input
        v-model="v.user.password.$model"
        type="password"
        class="form-control text-light"
        :class="{'is-invalid' : v.user.password.$error}"
        placeholder="enter your password"
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
        <a :href="forgotPassLink" class="text-light">Forgot Password?</a>
      </label>
    </div>
    <div class="text-center">
      <button
        type="submit"
        class="btn w-100 text-light"
        @click="iconShake"
        :style="{'background':isCorrect ? btnColor : 'red',}"
        :disabled="!isCorrect"
      >
        <strong v-if="isCorrect">Login</strong>
        <strong v-else>{{ loginMessage }}</strong>
      </button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  setup: () => ({ v: useVuelidate() }),
  props: ['btnColor', 'passLength', 'forgotPassLink', 'isCorrect', 'loginMessage', 'isOn'],
  name: 'signIn',
  data () {
    return {
      user: {
        email: null,
        password: null,
        submitType: 'login',
        rememberMe: false
      },
      shakeM: false,
      shakeP: false
    }
  },
  validations () {
    return {
      user: {
        email: {
          required,
          email
        },
        password: {
          required: {
            ...required
            // special error messages will be added here
          },
          minLength: minLength(this.passLength)
        }
      }
    }
  },
  methods: {
    signIn () {
      if (this.v.$invalid) {
        this.$emit('update:modelValue', 'invalidLogin')
        this.iconShake()
      } else {
        this.$emit('update:modelValue', this.user)
      }
    },
    iconShake () {
      this.shakeM = this.v.user.email.$error
      this.shakeP = this.v.user.password.$error
      setTimeout(() => {
        this.shakeM = false
        this.shakeP = false
      }, 1000)
    }
  },
  watch: {
    isOn () {
      this.v.$reset()
      this.user = {
        email: null,
        password: null,
        submitType: 'login',
        rememberMe: false
      }
    }
  }
}
</script>

<style>

</style>

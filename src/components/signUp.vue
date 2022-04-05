<template>
  <form class="p-5" @submit.prevent="signUp">
    <div class="input-group mb-3">
      <span class="input-group-text">
        <i class="fa-solid fa-envelope" :class="{'fa-shake':shakeM}"></i>
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
      <span class="input-group-text">
        <i class="fa-solid fa-lock" :class="{'fa-shake':shakeP}"></i>
      </span>
      <input
        v-model="v.user.password.$model"
        type="password"
        class="form-control text-light"
        :class="{'is-invalid' : v.user.password.$error}"
        placeholder="enter your password"
      />
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text"
        ><i class="fa-solid fa-check-double" :class="{'fa-shake':shakeC}"></i
      ></span>
      <input
        v-model="v.user.cPassword.$model"
        type="password"
        class="form-control text-light"
        :class="{'is-invalid' : v.user.cPassword.$error}"
        placeholder="confirm your password"
      />
    </div>
    <div class="form-check mb-3 d-flex justify-content-start">
      <input
        class="form-check-input me-1"
        type="checkbox"
        id="termsAgreed"
        v-model="v.user.termsAgreed.$model"
      />
      <label class="form-check-label text-light" for="termsAgreed">
        I agree to
        <a :href="termsLink" class="link-warning">the terms and conditions</a>.
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
        <strong v-if="isCorrect">Register</strong>
        <strong v-else>{{ registerMessage }}</strong>
      </button>
    </div>
  </form>
</template>

<script>
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export default {
  setup: () => ({ v: useVuelidate() }),
  name: 'signUp',
  props: ['btnColor', 'passLength', 'termsLink', 'isCorrect', 'registerMessage', 'isOn'],
  data () {
    return {
      user: {
        email: null,
        password: null,
        cPassword: null,
        submitType: 'register',
        termsAgreed: false
      },
      shakeM: false,
      shakeP: false,
      shakeC: false
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
        },
        cPassword: {
          required: {
            ...required
            // special error messages will be added here
          },
          minLength: minLength(this.passLength),
          sameAsPassword: {
            ...sameAs(this.user.password)
            // special error messages will be added here
          }
        },
        termsAgreed: {
          sameAs: {
            ...sameAs(true)
            // special error messages will be added here
          }
        }
      }
    }
  },
  methods: {
    signUp () {
      if (this.v.$invalid) {
        this.$emit('update:modelValue', 'invalidRegister')
        console.log(this.v.user.cPassword.required.$message)
        this.iconShake()
      } else {
        this.$emit('update:modelValue', this.user)
      }
    },
    iconShake () {
      this.shakeM = this.v.user.email.$error
      this.shakeP = this.v.user.password.$error
      this.shakeC = this.v.user.cPassword.$error
      setTimeout(() => {
        this.shakeM = false
        this.shakeP = false
        this.shakeC = false
      }, 1000)
    }
  },

  watch: {
    isOn () {
      this.v.$reset()
      this.user = {
        email: null,
        password: null,
        submitType: 'register',
        termsAgreed: false
      }
    }
  }
}
</script>

<style scoped></style>

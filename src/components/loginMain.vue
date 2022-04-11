<template>
  <div class="card shadow-lg border-2" :style="{'background':bgColor}">
    <div class="card-header text-center p-3 pb-5">
      <h1 v-if="isLogin"
          class="card-title"
          :class="{'text-light':!isDark,'text-dark':isDark}"
          :style="{'font-size':titleSize+'rem'}">
        {{loginTitle}}
      </h1>
      <h1 v-else class="card-title"
          :class="{'text-light':!isDark,'text-dark':isDark}"
          :style="{'font-size':titleSize+'rem'}">
        {{registerTitle}}
      </h1>
    </div>
    <div class="card-body collapse p-0 show" id="collapseExample">
      <sign-in
        v-model="userInfo"
        :btn-color="btnColor"
        :pass-length="passLength"
        :is-correct="isCorrect"
        :forgot-pass-link="forgotPassLink"
        :login-message="loginMessage"
        :is-on="isLogin"
        :is-dark="isDark"
      ></sign-in>
    </div>
    <div class="card-footer text-center p-0">
      <button
        class="btn border-0 btnOffset"
        :class="{'text-light':!isDark,'text-dark':isDark}"
        :style="{'background':btnColor}"
        data-bs-toggle="collapse"
        @click="isLogin = !isLogin"
        data-bs-target="#collapseExample"
      >
            <span v-if="isLogin"
            ><strong >Sign-Up</strong></span
            >
        <span v-else><strong >Sing-In</strong></span>
      </button>
      <div class="collapse p-0" id="collapseExample">
        <sign-up
          v-model="userInfo"
          :btn-color="btnColor"
          :pass-length="passLength"
          :is-correct="isCorrect"
          :terms-link="termsLink"
          :register-message="registerMessage"
          :is-on="!isLogin"
          :is-dark="isDark"
        ></sign-up>
      </div>
    </div>
  </div>
</template>

<script>
import signIn from './signIn'
import signUp from './signUp'
import 'bootstrap'
export default {
  name: 'loginMain',
  components: {
    signIn,
    signUp
  },
  props: {
    bgColor: {
      type: String,
      default: 'transparent'
    },
    btnColor: {
      type: String,
      default: 'linear-gradient(90deg,rgba(6, 154, 231, 1) 0%,rgba(35, 204, 236, 1) 100%)'
    },
    isDark: {
      type: Boolean,
      default: false
    },
    loginTitle: {
      type: String,
      default: 'WELCOME'
    },
    registerTitle: {
      type: String,
      default: 'JOIN US!'
    },
    titleSize: {
      type: String,
      default: '4'
    },
    passLength: {
      type: Number,
      default: 6
    },
    forgotPassLink: {
      type: String,
      default: '#'
    },
    termsLink: {
      type: String,
      default: '#'
    },
    isCorrect: {
      type: Boolean,
      default: true
    },
    loginMessage: {
      type: String,
      default: 'information is incorrect'
    },
    registerMessage: {
      type: String,
      default: 'information is incorrect'
    }
  },
  data () {
    return {
      isLogin: true,
      userInfo: {}
    }
  },
  watch: {
    userInfo: {
      handler (newValue, oldValue) {
        if (newValue !== oldValue) {
          this.$emit('update:modelValue', newValue)
        }
      },
      deep: true
    }
  }
}

</script>

<style>
@import "bootstrap";
@import 'bootstrap-icons';
::placeholder {
  color: lightgray !important;
  opacity: 1;
}
.form-control {
  background: transparent !important;
}
@keyframes shake {
  0% { transform: rotate(0deg) }
  10% { transform: rotate(-10deg) }
  20% { transform: rotate(10deg) }
  30% { transform: rotate(-10deg) }
  40% { transform: rotate(10deg) }
  50% { transform: rotate(-10deg) }
  60% { transform: rotate(10deg) }
  70% { transform: rotate(-10deg) }
  80% { transform: rotate(10deg) }
  90% { transform: rotate(-10deg) }
  100% { transform: rotate(0deg) }

}
.shake {
  animation: shake 1s;
  animation-iteration-count: 1;
}
.redShadow:focus {
  box-shadow: 0 0 10px red!important;
}
.btnOffset {
  position: relative;
  top: -18px;
}
</style>
